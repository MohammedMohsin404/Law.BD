// src/pages/Signup.jsx
import { useContext } from "react";

import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Signup = () => {

    // const provider = new GoogleAuthProvider();

  const { createNewUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    try {
      const res = await createNewUser(email, password);
      const user = res.user;
         

      // ✅ Set the user's display name
      await updateProfile(user, {
        displayName: name,
      });

      setUser({ ...user, displayName: name }); // optional: set locally with name
       toast.success(` Congratulation ${user.displayName}, Your Account Has been Created`);
      navigate("/bookings");
    } catch (err) {
      console.log(err.code, err.message);
    }
  };


  return (
    <section className="flex items-center justify-center min-h-screen bg-[#F8FAFC]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#0EA106]">
          Create Your Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4 mt-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
          />
          <button
            type="submit"
            className="w-full bg-[#0EA106] text-white py-2 rounded-md hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-[#0EA106] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
