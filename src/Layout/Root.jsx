import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../Components/ScrollToTop";



const Root = () => {
  const location = useLocation();

  // Check if we are on an error route (can use pathname or a global flag)
  const hideFooter = location.pathname === "/error"; // You can change condition as needed


  return (
    <>
      <ScrollToTop />
      <header className=" container mx-auto">
        <Navbar />
      </header>
      <main className=" container mx-auto">
          <ToastContainer  />
           
        <Outlet />
      </main>
      <footer className="mt-[100px]">
         {!hideFooter && <Footer />} {/* Conditionally hide footer */}
      </footer>
      {/* {!hideFooter && <Footer />} */}
    </>
  );
};

export default Root;
