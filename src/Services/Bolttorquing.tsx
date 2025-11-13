// import React from 'react'
import '../Styles/Header.css'

const Bolttorquing = () => {
  return (
   <div className="pb-10">
  {/* ✅ Image Section */}
  <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src="/src/img/serv7.webp"
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

  {/* Heading */}
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6">
    BOLT TORQUING & TENSIONING
  </h1>

  {/* Description */}
  <p className="text-start mb-8">
    Our <span className="font-semibold">Bolt Torquing & Tensioning</span> service ensures the precise tightening 
    and tensioning of bolts to maintain structural integrity and operational safety. 
    Using advanced hydraulic and electronic tools, we provide accurate load application, reducing the risk of 
    over-tightening or under-tightening. This service is essential for critical infrastructure in industries such 
    as oil & gas, petrochemicals, and heavy manufacturing.
  </p> 

  {/* Key Factors */}
  <h2 className="font-bold text-xl sm:text-2xl mt-10 mb-4 text-center md:text-left">
    KEY FEATURES
  </h2>

  <ul className="space-y-3 text-start">
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Precision torque and tension control for maximum safety
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Advanced hydraulic and electronic tooling
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Minimizes downtime during maintenance and installation
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Compliance with industry standards and manufacturer specifications
    </li>
  </ul>

  {/* Applications */}
  <h2 className="mt-10 font-bold text-xl sm:text-2xl uppercase mb-3 text-center md:text-left">
    APPLICATIONS
  </h2>

  <p className="text-start">
    Offshore platforms, refineries, pipelines, petrochemical plants, and heavy industrial equipment.
  </p>

</p>


  </div>
</div>

  )
}

export default Bolttorquing