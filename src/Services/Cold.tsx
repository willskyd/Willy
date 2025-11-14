// import React from 'react'
import '../Styles/Header.css'
import serv2 from '../img/serv2.webp'

const Cold = () => {
  return (
   <div className="pb-10">
  {/* ✅ Image Section */}
  <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src={serv2}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    COLD CUTTING
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
   COLD CUTTING
  </h1>

 
  <p className="text-start mb-8">
    Cold cutting is a precise and efficient method of cutting metal and other materials
    without generating heat. This technique is commonly used in industries such as oil
    and gas, construction, and manufacturing, where maintaining the integrity of the  
    material is crucial. Cold cutting employs specialized tools such as hydraulic cutters,
    plasma cutters, and abrasive saws to achieve clean and accurate cuts. The absence of
    heat minimizes the risk of warping, distortion, or thermal damage to the surrounding
    material, making cold cutting an ideal choice for applications that require high 
    precision and quality.
  </p>

  {/* Key Factors */}
  <h2 className="font-bold text-xl sm:text-2xl mt-10 mb-4 text-center md:text-left">
    KEY FACTORS
  </h2>

  <ul className="space-y-3 text-start">
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
        Clean cuts with minimal thermal impact
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
        High precision and accuracy in cutting
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span>
        Reduced risk of material distortion or damage
    </li>
    <li className="flex items-start">
      <span className="font-bold text-2xl pr-2">•</span> 
        Versatile applications across various industries
    </li>
  </ul>

  
  <h2 className="mt-10 font-bold text-xl sm:text-2xl uppercase mb-3 text-center md:text-left">
    Applications
  </h2>

  <p className="text-start">
    Pipeline maintenance, structural steel fabrication, shipbuilding, and heavy equipment repair.
  </p>
</p>

  </div>
</div>

  )
}

export default Cold