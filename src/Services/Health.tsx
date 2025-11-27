// import React from "react";
import health from '../img/health.webp' 

const Health = () => {
  return (
    <div className='relative -bottom-[10.5vh] '>
     
      <section
        className="relative md:w-[100vw] w-screen h-[80vh] overflow-hidden -mt-[20vh] 
        md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0"
      >
        <img
          src={health}
          alt="Health"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute uppercase text-white/90 text-6xl font-black 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          HEALTH
        </div>
      </section>

      <section
        className="bg-black/20 relative md:w-[100vw] w-screen h-auto overflow-hidden 
        -mt-0 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 px-2">
        
        <div className="px-4 sm:px-8 md:px-16 py-10 text-justify 
        leading-relaxed text-base sm:text-lg md:text-xl">
          
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl 
          text-center md:text-left mb-6 uppercase">
            Health Commitment
          </h1>

          <p className="text-start mb-8">
            At TorqTek, we believe that a healthy workforce is critical to delivering 
            excellence. We prioritize the physical and mental well-being of our teams, 
            empowering them to perform at their best in every environment and operation.
          </p>

          <p className="text-start mb-8">
            Our health programs ensure proactive prevention, hazard recognition, 
            wellness support, and continuous medical readiness on all project sites. 
            Each employee is equipped with the knowledge and resources needed to remain 
            fit for duty and prepared for any operational challenge.
          </p>

          <div className="bg-gray-50 border-l-4 border-gray-600 p-5 rounded-md">
            <h2 className="text-xl font-semibold text-black mb-3">
              Our Health Assurance Measures
            </h2>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Comprehensive occupational health training</li>
              <li>Routine health assessments and medical screening</li>
              <li>Workplace hygiene and environmental control</li>
              <li>Physical and mental wellness support systems</li>
              <li>Compliance with global occupational health standards</li>
            </ul>
          </div>

          <p className="text-black text-base md:text-lg leading-relaxed mt-6 pb-10">
            We are dedicated to ensuring every individual stays healthy, empowered, 
            and protected — throughout every project lifecycle.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Health;
