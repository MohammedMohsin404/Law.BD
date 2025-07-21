// src/routes.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import LawyersDetails from "./Pages/LawyersDetails/LawyersDetails";
import Bookings from "./Pages/Bookings/Bookings";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import ContactNow from "./Pages/ContactNow/ContactNow";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Login.jsx/Login";
import Signup from "./Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";


// ✅ Load top lawyers
const lawyers = async () => {
  const res = await fetch("/top_lawyers.json");
  const data = await res.json();
  return data;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route index element={<Home />} loader={lawyers} />
      <Route
        path="lawyer/:id"
        element={
          <PrivateRoute>
            <LawyersDetails />
          </PrivateRoute>
        }
        loader={lawyers}
      />
      <Route
        path="bookings"
        element={
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        }
        loader={lawyers}
      />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<ContactNow />} />

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>
  )
);

export default router;
