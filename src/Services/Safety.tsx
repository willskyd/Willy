// import React from "react";
import safety from '../img/safety.webp'

const Safety = () => {
  return (
    <div className='relative -bottom-[10.5vh] '>
     
      <section
  className=" relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-[20vh] md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 
  ">
  <img
    src={safety}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    Safety
  </div>
</section>



    <section  className="
      bg-black/20 
     relative md:w-[100vw] w-screen h-auto overflow-hidden -mt-0 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 px-2
    ">
      <div className="px-4 sm:px-8 md:px-16 py-10 text-justify leading-relaxed text-base sm:text-lg md:text-xl">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6 uppercase">
          Safety Commitment
        </h1>

        <p  className="text-start mb-8">
          At TorqTek, safety is not just a guideline—it is a core value that
          defines every action we take. We are committed to creating and
          maintaining work environments where risks are minimized, teams are
          protected, and operations are executed with the highest level of
          responsibility.
        </p>

        <p className="text-start mb-8">
          Our safety strategies extend through planning, field operations, and
          continuous monitoring to ensure compliance with both industry
          standards and regulatory requirements. We believe safety is a shared
          responsibility, and every member of our team plays a role in keeping
          our workplaces incident-free.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-600 p-5 rounded-md">
          <h2 className="text-xl font-semibold text-black mb-3">
            Our Safety Principles
          </h2>
          <ul className="list-disc pl-6 text-black space-y-2">
            <li>Zero-compromise approach to safety practices</li>
            <li>Regular inspections and preventive maintenance</li>
            <li>Certified and fully trained workforce</li>
            <li>Compliance with international safety regulations</li>
            <li>Rapid response and emergency readiness</li>
          </ul>
        </div>

        <p className="text-black text-base md:text-lg leading-relaxed mt-6 pb-10">
          We are committed to making sure every employee, client, and partner
          returns home safely — every day.
        </p>

        {/* <div className="text-center mt-8">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200">
            Learn More About Our Standards
          </button>
        </div> */}
      </div>
    </section>
    </div>
  );
};

export default Safety;
