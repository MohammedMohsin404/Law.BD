import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

import {
  createUserWithEmailAndPassword,
  getAuth,

  GoogleAuthProvider,

  onAuthStateChanged,

  signInWithEmailAndPassword,
  
  signInWithPopup,
  
  signOut,
  
  
} from "firebase/auth";


export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

    // Google login
  const signInWithGoogle = () => {
    
    return signInWithPopup(auth, googleProvider);
  };


  const logOut=()=>{
    
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser,
    loading,
    signInWithGoogle,
  };
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); // ✅ this updates user after login/logout
  });
  return () => unsubscribe();
}, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
