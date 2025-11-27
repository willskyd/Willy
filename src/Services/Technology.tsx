// import React from "react";
import technology from '../img/technology.webp' // Replace with a tech-related image when available

const Technology = () => {
  return (
    <div className='relative -bottom-[10.5vh] '>

      {/* Hero Section */}
      <section
        className="relative md:w-[100vw] w-screen h-[80vh] overflow-hidden 
        -mt-[20vh] md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0"
      >
        <img
          src={technology}
          alt="Technology"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute uppercase text-white/90 text-5xl sm:text-6xl 
        font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          TECHNOLOGY
        </div>
      </section>


      {/* Main Section */}
      <section
        className="bg-black/20 relative md:w-[100vw] w-screen h-auto overflow-hidden 
        -mt-0 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 px-2"
      >
        <div className="px-4 sm:px-8 md:px-16 py-10 text-justify 
        leading-relaxed text-base sm:text-lg md:text-xl">
          
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl 
          text-center md:text-left mb-6 uppercase">
            Advancing Innovative Technology
          </h1>

          <p className="text-start mb-8">
            At TorqTek, technology drives excellence. We leverage advanced tools, 
            intelligent systems, and data-driven solutions to optimize operational 
            performance and support industry-leading engineering outcomes.
          </p>

          <p className="text-start mb-8">
            From digital engineering and automation to real-time monitoring 
            and predictive analytics, our technology adoption ensures higher 
            accuracy, reduced downtime, and safer operations across all 
            energy and industrial sectors.
          </p>

          {/* Highlight Block */}
          <div className="bg-gray-50 border-l-4 border-gray-600 p-5 rounded-md">
            <h2 className="text-xl font-semibold text-black mb-3">
              Our Technology Capabilities
            </h2>

            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Advanced inspection & diagnostic solutions</li>
              <li>Software-driven precision engineering</li>
              <li>Smart monitoring and automation systems</li>
              <li>3D design and digital project simulations</li>
              <li>Remote support with cutting-edge connectivity</li>
            </ul>
          </div>

          <p className="text-black text-base md:text-lg leading-relaxed mt-6 pb-10">
            We constantly innovate to meet evolving challenges — delivering 
            efficient, intelligent, and future-ready solutions for every client.
          </p>

        </div>
      </section>
    </div>
  );
};

export default Technology;
