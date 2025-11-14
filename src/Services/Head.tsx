// import React from 'react'
import '../Styles/Header.css'
import serv8 from '../img/serv8.webp'

const Head = () => {
  return (
   <div className="pb-10">
 
  <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src={serv8}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    WELL-HEAD SURVEILLANCE
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
    WELL-HEAD SURVEILLANCE
  </h1>

  {/* Description */}
  <p className="text-start mb-8">
    Our <span className="font-semibold">Well-Head Surveillance</span> service provides real-time monitoring and 
    analysis of wellhead operations to ensure production integrity, equipment reliability, and operational safety. 
    Using advanced sensor technology and data acquisition systems, we continuously track pressure, temperature, 
    and flow parameters to detect abnormalities early and prevent costly failures. This service supports optimal 
    field performance and reduces downtime in oil and gas production environments.
  </p>
  {/* Key Factors */}
  <h2 className="font-bold text-xl sm:text-2xl mt-10 mb-4 text-center md:text-left">
    KEY FEATURES
  </h2>

  <ul className="space-y-3 text-start">
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Continuous monitoring of wellhead parameters in real-time
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Early detection of leaks, pressure anomalies, and mechanical issues
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Integration with SCADA and remote data systems for full visibility
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Enhances safety, reliability, and production efficiency
    </li>
  </ul>

  {/* Applications */}
  <h2 className="mt-10 font-bold text-xl sm:text-2xl uppercase mb-3 text-center md:text-left">
    APPLICATIONS
  </h2>

  <p className="text-start">
    Onshore and offshore wellheads, production platforms, gas lift systems, and subsea installations.
  </p>

</p>


  </div>
</div>

  )
}

export default Head