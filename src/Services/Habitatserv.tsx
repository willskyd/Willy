// import React from 'react'
import '../Styles/Header.css'
import serv5 from '../img/serv5.webp'

const Habitatserv = () => {
  return (
   <div className="pb-10">
 
  <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src={serv5}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
     Habitat Service
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
    Habitat Service
  </h1>

 
  <p className="text-start mb-8">
  Our <span className="font-semibold">Habitat Service</span> allows you to carry out hot work and maintenance safely 
  on live systems without shutting down production.  We create a controlled, pressurized environment that keeps your
   operations running while our team performs welding, cutting, or inspection.  This service ensures safety, prevents 
   gas ingress, and minimizes costly downtime — keeping your facility productive and compliant at all times.
   </p>

  {/* Key Factors */}
  <h2 className="font-bold text-xl sm:text-2xl mt-10 mb-4 text-center md:text-left">
    KEY FACTORS
  </h2>

  <ul className="space-y-3 text-start">
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
         Enables hot work on live systems without shutdown     
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Ensures safe containment with continuous gas monitoring
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
       Designed to comply with international safety standards
    </li>
    
  </ul>

  
  <h2 className="mt-10 font-bold text-xl sm:text-2xl uppercase mb-3 text-center md:text-left">
    Applications
  </h2>

  <p className="text-start">
    Offshore platforms, refineries, gas plants, FPSOs, and petrochemical facilities.
  </p>
</p>

  </div>
</div>

  )
}

export default Habitatserv