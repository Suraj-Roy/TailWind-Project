import React from "react";
import Logo from "../assets/Logo.png";
import { GrLanguage } from "react-icons/gr";

function Navbar() {
  const [IsMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () =>{
    if(IsMenuOpen){
      setIsMenuOpen(true);
    }
    else{
      setIsMenuOpen(false);
    }
  }
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <nav className="md:px-14 p-3">
      <div className="text-lg mx-auto flex items-center justify-between font-medium">
        <div className="flex items-center space-x-14">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={Logo} alt="" className="w-10 inline-block items-center" />
            <span>XYZ</span>
          </a>

          <ul className="md:flex space-x-12 items">
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-sky-200">
                {link}
              </a>
            ))}
          </ul>
        </div>
        <div className=" md:flex items-center space-x-12 p-2">
          <a href="/" className="hidden md:flex items-center">
            <GrLanguage className="mr-2" />
            <span className="text-xl hover:text-slate-400">Language</span>{" "}
          </a>
          <button className="bg-purple-400 py-2 px-4 rounded-md transition-all duration-300 hover:text-white hover:bg-indigo-600 ease-in">
            Sign Up
          </button>
        </div>

        {/* menu button onlydisplay in Mobile */}
        <div className="md:hidden">
              <button></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
