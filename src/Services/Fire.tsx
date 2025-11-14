// import React from 'react'
import '../Styles/Header.css'
import serv6 from '../img/serv6.webp'
 
const Fire = () => {
  return (
   <div className="pb-10">
  
  <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src={serv6}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    FIRE AND GAS ALARM SYSTEM
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
    FIRE & GAS ALARM SYSTEM
  </h1>

 
  <p className="text-start mb-8">
    Our <span className="font-semibold">Fire & Gas Alarm System</span> ensures early detection and rapid response to 
    potential fire and gas hazards, protecting personnel, assets, and operations. 
    The system integrates advanced sensors, alarms, and monitoring technology to provide continuous surveillance, 
    enabling your team to act promptly in emergencies. This service is critical for facilities where safety and 
    uninterrupted operations are paramount, including offshore platforms, refineries, and industrial plants.
  </p>
  
  <h2 className="font-bold text-xl sm:text-2xl mt-10 mb-4 text-center md:text-left">
    KEY FEATURES
  </h2>

  <ul className="space-y-3 text-start">
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Early fire and gas detection to prevent incidents
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Continuous monitoring with real-time alerts
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Integrates with emergency shutdown and safety systems
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
      Fully compliant with international safety and industrial standards
    </li>
  </ul>

 
  <h2 className="mt-10 font-bold text-xl sm:text-2xl uppercase mb-3 text-center md:text-left">
    APPLICATIONS
  </h2>

  <p className="text-start">
    Offshore platforms, refineries, gas plants, FPSOs, chemical and petrochemical facilities.
  </p>

</p>


  </div>
</div>

  )
}

export default Fire