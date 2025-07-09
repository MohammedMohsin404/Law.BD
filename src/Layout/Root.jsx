import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  //   const { pathname } = useLocation();
  //   const hideFooter = pathname === '/404';

  return (
    <>
      <header className=" container mx-auto">
        <Navbar />
      </header>
      <main className=" container mx-auto">
        <Outlet />
      </main>
      <footer className="mt-[100px]"><Footer/></footer>
      {/* {!hideFooter && <Footer />} */}
    </>
  );
};

export default Root;
