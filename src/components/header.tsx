// components/Header.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import logo1 from "../../public/logo.png";
import logo2 from "../../public/square-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverActive, setHoverActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // handleClickOutside
  const handleClickOutside = (event:any) => {
    if (headerRef.current) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // TestHover
  const TestHover = () => {
    setHoverActive(true); 
    console.log("Test hover");
  };

  // handleScroll
  const handleScroll = (event: any) => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header
      className={` px-8 border-b py-3 bg-[#ebebeb6b] fixed  w-full z-50 ${
        scrolled ? "bg-white  top-0" : "  md:top-[48px]"
      }`}
      ref={headerRef}
    >
      {/* <SearchBar /> */}
      <div className="container mx-auto flex justify-between items-center">
        <a href={"/"} className="">
          {scrolled ? (
            <img
              src={logo2}
              alt="Square Contracting Logo"
              className="w-[60px] "
            />
          ) : (
            <img src={logo1} alt="Square Contracting Logo" className="w-[100px]" />
          )}
        </a>
        {/* Navigation as */}
        <nav
          className={`hidden md:flex items-center gap-10  text-[11px] font-bold mb-3  ${
            scrolled ? "!text-[#303030] mb-0 " : "text-white "
          } `}
        >
          <a href="/" className="">
            Home
          </a>
          <a href="/" className=" ">
            Peb Applications
          </a>
          <a
            href="/"
            className="flex items-center gap-1  relative"
            onMouseEnter={() => setHoverActive(true)}
            onMouseLeave={() => setHoverActive(false)}
          >
            <div> Projects</div>
            <div className="text-[16px]">{/* <VscTriangleDown /> */}</div>
            {/* <Menu onHover={hoverActive} /> */}
          </a>
          <a href="/" className="text-[11px]">
            Contact Us
          </a>
          <button>
            <FaSearch />
          </button>
        </nav>
        {/* toggleMenu  */}
        <div className="text-2xl block md:hidden cursor-pointer ">
          <div
            className={` ${
              scrolled ? "!text-[#242323] mb-1 " : "text-white mb-6"
            }  ${menuOpen ? "hidden" : "block text-white"} `}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdOutlineMenu />
          </div>
          <div
            className={` ${menuOpen ? "block" : "hidden"} relative z-40 mb-0`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdOutlineClose />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? " scale-x-100" : " scale-x-0"
          } absolute right-0 top-0 bg-white w-[300px] duration-300 h-[100vh] shadow-lg transition-transform transform origin-top-right z-30`}
        >
          <div className="mt-28 p-4 flex flex-col text-[11px] font-bold ">
            <div className="border-b mb-2 pb-2">
              <a href="#home" className=" py-3 text-[11px] font-bold">
                Home
              </a>
            </div>
            <div className="border-b mb-2 pb-2">
              <a href="#about" className=" ">
                Peb Applications
              </a>
            </div>
            <div className="border-b mb-2 pb-2">
              <a href="#projects" className=" ">
                Projects
              </a>
            </div>
            <div className="border-b  mb-2 pb-2 ">
              <a href="#contact" className="">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
