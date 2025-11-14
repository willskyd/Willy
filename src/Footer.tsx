// import React from 'react'
import logo from './img/logo.webp'

const Footer = () => {
  return (
  <div className="w-full md:-mb-[10rem] py-2 md:py-4 px-4 md:px-12">
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-1 md:gap-2">

    {/* Logo Section */}
    <a href="/" className="flex justify-center md:justify-start">
      <img
        src={logo}
        alt="TorqTech Logo"
        className="w-[30vw] sm:w-[26vw] md:w-[18vw] h-auto md:-ml-[4rem] md:-mt-[4rem]"
      />
    </a>

    {/* Links + Copyright */}
    <div className="flex flex-col items-center md:items-end text-sm text-gray-200 mt-1 md:mt-0">
      <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 mb-0 md:mb-1 md:-mr-[4rem] md:mt-[1.5rem]">
        <a href="#" className="hover:underline hover:text-blue-600">Privacy Policy</a>
        <a href="#" className="hover:underline hover:text-blue-600">Privacy Center</a>
        <a href="#" className="hover:underline hover:text-blue-600">Terms of Service</a>
      </div>

      <p className="text-xs sm:text-sm text-center md:text-right md:mr-[26rem] mt-7 md:mt-[3rem] md:text-lg">
        &copy; {new Date().getFullYear()} TorqTech. All rights reserved.
      </p>
    </div>

  </div>
</div>

  )
}

export default Footer