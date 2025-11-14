import { useState, useEffect } from "react";
import "./Styles/Header.css";
import logo from './img/logo.webp'
import Iso from './img/Iso.webp'



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll depth
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header_div_fixed ${!isScrolled ? "header_div_transparent" : ""}`}>
      <div className="flex items-center justify-between pl-6 -mb-[2rem]">
        {/* ====== LOGO SECTION ====== */}
        <div className="flex items-center space-x-1">
          <a href="/">
            <img
              src={logo}
              alt="TorqTech Logo"
              className="w-36 h-auto -mt-6"
            />
          </a>

          <a href="/">
            <img
              src={Iso}
              alt="ISO"
              className="w-14 h-auto -mt-6"
            />
          </a>
        </div>

        {/* ====== HAMBURGER BUTTON (MOBILE) ====== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-100 focus:outline-none transition-transform duration-300 mr-[2rem] -mt-8"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7 transition-transform duration-300 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* ====== DESKTOP MENU ====== */}
        <nav className="hidden md:flex items-center space-x-8 uppercase font-bold text-lg  -mt-6 mr-[5rem]">
          <a href="/" className="hover:text-blue-600 transition-all hover:text-xl">Home</a>
          <a href="/services" className="hover:text-blue-600 transition-all hover:text-xl">Services</a>
          <a href="/about" className="hover:text-blue-600 transition-all hover:text-xl">About Us</a>
          <a href="/contact">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors ml-[3rem]">
              Contact Us
            </button>
          </a>
        </nav>
      </div>

      {/* ====== MOBILE MENU (DROP-DOWN ANIMATION) ====== */}
      <div
        className={`md:hidden absolute top-full right-0 w-[40%] bg-black/70 shadow-lg rounded-b-2xl rounded-br-none justify-items-center transition-all 
          duration-500 ease-out transform origin-top-right z-50 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 -translate-y-5 scale-y-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-end py-6 pr-8 uppercase font-semibold text-base sm:text-lg space-y-4 text-white">
          <a href="/" className="hover:text-blue-500 transition-all hover:scale-105 mr-1" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/services" className="hover:text-blue-500 transition-all hover:scale-105 -mr-3.5" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/about" className="hover:text-blue-500 transition-all hover:scale-105 -mr-3.5" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="/contact" onClick={() => setIsOpen(false)} className="relative -mr-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors">
              Contact Us
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}
