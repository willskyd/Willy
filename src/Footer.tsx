// import React from 'react'
import logo1 from './img/logo1.webp'
import './Styles/Header.css'

const Footer = () => {
  return (
  <div className="relative md:w-[100vw] w-screen h-auto overflow-hidden overflow-x-hidden mt-6 top-10 md:left-1/2 
  md:-translate-x-1/2 -ml-[8vw] md:ml-0 bg-gray-100 px-4 py-7 ">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

    {/* Logo */}
    <a href="/" className="flex justify-center md:justify-start relative  ">
      <img
        src={logo1}
        alt="TorqTech Logo"
        className="w-[32vw] sm:w-[26vw] md:w-[14vw] h-auto large_responsive"
      />
    </a>


    <div className="flex flex-col items-center md:items-end text-gray-300">

      <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base text-black">
        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Center</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
      </div>

      {/* Copyright */}
      <p className="text-xs sm:text-sm md:text-base mt-4 text-center md:text-right text-black font-medium">
        &copy; {new Date().getFullYear()} TorqTech. All rights reserved.
      </p>
    </div>

  </div>
</div>


  )
}

export default Footer