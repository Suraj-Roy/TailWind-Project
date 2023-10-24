import React,{useState} from "react";
import { GrLanguage } from "react-icons/gr";
import Logo from '../assets/Logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';
function Navbar() {
  const [IsMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () =>{
    if(!IsMenuOpen){
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
    <>
    <nav className="md:px-14 p-3 bg-white mx-auto top-0 left-0 right-0">
      <div className="text-lg mx-auto flex items-center justify-between font-medium">
        <div className="flex items-center space-x-14">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={Logo} alt="" className="w-10 inline-block items-center" />
            <span>XYZ</span>
          </a>

          <ul className="hidden lg:flex space-x-12 items">
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-sky-200">
                {link}
              </a>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-12 p-2 justify-end">
          <a href="/" className="hidden lg:flex items-center">
            <GrLanguage className="mr-2" />
            <span className="text-xl hover:text-slate-400">Language</span>{" "}
          </a>
          <button className="bg-purple-400 py-2 px-4 rounded-md transition-all duration-300 hover:text-white hover:bg-indigo-600 ease-in">
            Sign Up
          </button>
        </div>

        {/* menu button onlydisplay in Mobile */}
        <div className="lg:hidden flex items-center justify-end mr-3">
          
              <button className=" cursor-pointer" onClick={toggleMenuOpen}>{
                IsMenuOpen?(<RxCross2 className="w-6 h-6 "/>):(<GiHamburgerMenu className="w-6 h-6"/>)
              }
              </button>
        </div>
      </div>
   </nav>

   <div className={`lg:hidden px-5 space-y-4 pb-5 pt-5 text-lg font-blod bg-purple-300 ${IsMenuOpen?"block fixed right-0 left-0":"hidden"}`}>{
     navItems.map(({ link, path }) => (
      <a key={link} href={path} className="block hover:text-yellow-200">
        {link}
      </a>
    ))}

   </div>
   </>
  );
}

export default Navbar;
