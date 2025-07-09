import logo from "../assets/logo-footer.png";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <section className="bg-[#0F0F0F] h-auto">
        <div className="pt-[100px] flex flex-col justify-center items-center space-y-20">
          <Link className="btn btn-ghost text-3xl text-[#ffffff]">
            {" "}
            <img src={logo} alt="" /> Law.BD
          </Link>
          <ul className="menu menu-horizontal text-[#ffffffb0]  px-1">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>My Bookings</NavLink>
            </li>
            <li>
              <NavLink>Blogs</NavLink>
            </li>
            <li>
              <NavLink>Contact Us</NavLink>
            </li>
          </ul>

          <ul className="menu  menu-horizontal text-[#ffffffb0]  px-1">
            <li>
              <NavLink><img className="w-9 " src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="Facebook" /></NavLink>
            </li>
            
            <li>
              <NavLink><img className="w-9 " src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=FFFFFF" alt="X" /></NavLink>
            </li>
            
            <li>
              <NavLink><img className="w-9 " src="https://img.icons8.com/?size=100&id=114445&format=png&color=000000" alt="Linkedin" /></NavLink>
            </li>
            
            <li>
              <NavLink><img className="w-9 " src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="YouTube" /></NavLink>
            </li>
            
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
