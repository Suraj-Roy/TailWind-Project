import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  //navitems array
  const navItems =[
    {link : "Home",path:"home"},
    {link : "Service",path:"service"},
    {link : "About",path:"about"},
    {link : "Product",path:"product"},
    {link : "FAQ",path:"faq"}
  ]
  return (
    <>
      <header className="w-full bg-slate-100 md:bg-transparent fixed top-0 left-0 right-0"></header>
      <nav>
        <div>
          <a href=""></a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
