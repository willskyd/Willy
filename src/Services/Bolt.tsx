// import React from 'react'
import '../Styles/Header.css'
import serv1 from '../img/serv1.webp'

const Bolt = () => {
  return (
   <div className="pb-10">

  <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src={serv1}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    BOLT TENSIONING
  </div>
</section>

  
  <div
    className="
      bg-black/20 
     relative md:w-[100vw] w-screen h-auto overflow-hidden -mt-0 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 px-2
    "
  >
   <p className="px-4 sm:px-8 md:px-16 py-10 text-justify leading-relaxed text-base sm:text-lg md:text-xl">
 
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6">
    BOLT TENSIONING
  </h1>

 
  <p className="text-start mb-8">
    Bolt tensioning is a method used to apply a precise and controlled preload to bolts 
    in order to ensure proper clamping force and joint integrity. This technique is 
    commonly employed in industries such as construction, manufacturing, and heavy 
    equipment maintenance. The process involves specialized hydraulic or mechanical 
    tensioning tools that stretch bolts before tightening nuts — ensuring even load 
    distribution, reducing the risk of bolt failure, leaks, or joint separation.
  </p>

  {/* Key Factors */}
  <h2 className="font-bold text-xl sm:text-2xl mt-10 mb-4 text-center md:text-left">
    KEY FACTORS
  </h2>

  <ul className="space-y-3 text-start">
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Uniform gasket compression and leak prevention
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      High accuracy and safety in bolt installation
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Reduced maintenance downtime and costs
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Compliance with international standards (ASME, ISO)
    </li>
  </ul>

  
  <h2 className="mt-10 font-bold text-xl sm:text-2xl uppercase mb-3 text-center md:text-left">
    Applications
  </h2>

  <p className="text-start">
    Oil & gas facilities, turbines, pressure vessels, subsea flanges, and heavy industrial joints.
  </p>
</p>

  </div>
</div>

  )
}

export default Bolt