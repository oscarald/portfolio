import { useState } from "react";
import logo from "../assets/images/BosKar.png";
import { Link } from "react-scroll";
import Switcher from "./Switcher";

function Navbar() {
  let links = [
    { name: "Home", link: "#home" },
    { name: "Acerca de mí", link: "#about" },
    { name: "Habilidades", link: "#abilities" },
    { name: "Portafolio", link: "#portfolio" },
    { name: "Contacto", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-100 border-b-4 border-slate-200 dark:bg-[#211d33] dark:border-[#211d33] fixed h-20 w-full flex">
      <div className="container mx-auto md:flex justify-between  items-center relative">
        <div className="p-3">
          <img src={logo} alt="logo"  className="h-8 object-contain"/>
        </div>
        <nav className="flex flex-row">
          <div
            className="absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon size="large" name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-10 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                            ${open ? "top-20 " : "top-[-490px]"}  `}
          >
            {links.map((link) => (
              <li key={link.name} className="md:ml-8  md:my-0 my-7 ">
                <Link
                  to={link.link}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-100}
                  className="pr-2 text-gray-700  hover:text-indigo-700 duration-500 cursor-pointer font-Poppins font-semibold dark:text-slate-100 "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Switcher />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
