// import React from 'react'
import serv2 from '../img/serv2.webp'
import Cutservice from './Cutservice'

const Ccutting = () => {
  return (
    <div className="">

         <section
  className=" relative md:w-[100vw] w-screen h-[100vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
  src={serv2}
    alt="Service"
    className="absolute inset-0 w-full h-[50vh] object-cover object-center"
  />
</section>  
<div className="absolute text-white text-3xl px-2 md:text-5xl font-extrabold uppercase  inset-0 flex items-center justify-center h-[50vh]">
   Cold Cutting Service
  </div>

     <Cutservice />
   
    </div>
  )
}

export default Ccutting