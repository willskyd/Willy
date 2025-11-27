// import React from 'react'
import '../Styles/Header.css'
import serv3 from '../img/serv3.webp' 

const Habitat = () => {
  return (
   <div className="relative -bottom-[10.5vh]">
 
  <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-[20vh] md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src={serv3}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
     Habitat Preparation
  </div>
</section>

  
  <div
    className="
      bg-black/20 
     relative md:w-[100vw] w-screen h-auto overflow-hidden -mt-0 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 px-2
    "
  >
   <p className="px-4 sm:px-8 md:px-16 py-10 text-justify leading-relaxed text-base sm:text-lg md:text-xl">
 
  <h1 className="font-bold uppercase text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6">
    Habitat Preparation
  </h1>

   

  <p className="text-start mb-8">
    Habitat preparation involves creating a controlled and safe environment for
    performing hot work activities such as welding, cutting, and grinding. This process
    is essential to prevent fire hazards and ensure the safety of personnel and equipment.
    Habitat preparation includes the installation of fire-resistant barriers, proper
    ventilation systems, and the removal of flammable materials from the work area.
    Additionally, it involves setting up fire watch personnel and ensuring that all safety
    protocols are in place before commencing hot work operations.
  </p>

  {/* Key Factors */}
  <h2 className="font-bold text-xl sm:text-2xl mt-10 mb-4 text-center md:text-left">
    KEY FACTORS
  </h2>

  <ul className="space-y-3 text-start">
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
        Creation of fire-resistant and ventilated work environments
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
        Removal of flammable materials and hazards from the area
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
        Implementation of fire watch and safety protocols
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span> 
        Compliance with safety regulations and industry standards
    </li>
  </ul>

  
  <h2 className="mt-10 font-bold text-xl sm:text-2xl uppercase mb-3 text-center md:text-left">
    Applications
  </h2>

  <p className="text-start">
    Oil and gas facilities, construction sites, shipyards, and industrial maintenance projects.
  </p>
</p>

  </div>
</div>

  )
}

export default Habitat