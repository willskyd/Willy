// import React from 'react'
import jobs from '../img/jobs.webp'
import Cards from '../Services/Cards'


const Jobs = () => {
  return (
    <div>
         <section
  className=" relative md:w-[100vw] w-screen h-[100vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
  src={jobs}
    alt="Service"
    className="absolute inset-0 w-full h-[60vh] object-cover object-center"
  />
</section>
  <div
  className="absolute left-3 right-3 md:left-3 md:w-[45vw]  top-[19vh] md:top-[15vh] bg-white/75 rounded-lg px-4 py-4 md:py-6 flex 
    items-center">
  <p
    className="text-black/75 font-semibold text-sm sm:text-base leading-relaxed break-words">
   
 At TorqTek, we specialize in delivering reliable engineering, 
    procurement, installation, and maintenance solutions for industrial 
    and technical operations. From equipment sourcing and system upgrades 
    to on-site support and project supervision, we ensure every service 
    is executed with precision, safety, and consistent performance. Our 
    goal is to provide dependable, long-term technical support that keeps 
    your operations running seamlessly.
  </p>
</div>

 <div className="absolute font-bold text-white top-[13vh] md:top-[25vh] md:left-[30rem] uppercase left-0 right-0 text-center text-3xl md:text-5xl drop-shadow-lg">
      Our Jobs
     </div>

   <Cards />

    </div>
  )
}

export default Jobs