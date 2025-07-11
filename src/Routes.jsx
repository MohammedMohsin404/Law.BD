// src/routes.jsx
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router"; // ✅ Correct import

import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import LawyersDetails from "./Pages/LawyersDetails/LawyersDetails";
import Bookings from "./Pages/Bookings/Bookings";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import ContactNow from "./Pages/ContactNow/ContactNow";

// ✅ Data loader for lawyers
const lawyers = async () => {
  const res = await fetch("/top_lawyers.json");
  const data = await res.json();
  return data;
};

const Routes = createBrowserRouter(
  createRoutesFromElements(
  
        <Route path="/" element={<Root />} errorElement={<NotFound />}>
          <Route index element={<Home />} loader={lawyers} />
          <Route
            path="/lawyer/:id"
            element={<LawyersDetails />}
            loader={lawyers}
          />
          <Route path="/bookings" element={<Bookings />} loader={lawyers} />
          <Route path="/blogs" element={<Blogs />} loader={lawyers} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/contact" element={<ContactNow />} />
        </Route>
  
  )
);

export default Routes;
