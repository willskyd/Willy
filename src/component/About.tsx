// import React from 'react'
import about from '../img/about.webp'
import slide2 from '../img/slide2.webp'
import  '../Styles/Header.css'

const About = () => {
  return (
    <div className=" relative -bottom-[10.5vh] ">

        <section
  className=" relative md:w-[100vw] w-screen h-[70vh] overflow-hidden -mt-[16vh] md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src={slide2}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
</section>
    
     <div className="absolute uppercase text-white/90 text-6xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    ABOUT US
  </div>
    <div
    className="
      bg-black/20 
     relative md:w-[100vw] w-screen h-auto overflow-hidden -mt-0 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 px-2
    "
  >
   <p className="px-4 sm:px-8 md:px-16 py-10 text-justify leading-relaxed text-base sm:text-lg md:text-xl">
 
    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6 lg:ml-[11rem] md:ml-[7rem]">
    TORQTECH OFFSHORE SERVICES LIMITED.
  </h1>

  <p className="text-start mb-8 text-lg md:px-[6rem]">
   is a company incorporated in Nigeria to render Engineering Maintenance, i.e. Technical services, 
   procurement, Mechanical, Electrical Works, instrumentation, Welding, Fire and Gas Alarm services etc. 
   It was primarily on a desire to effectively provide the needs of oil companies. Our objective is to be the 
   world’s leading provider of bolting solution i.e. Bolt Torquing, Tensioning tools and cold cutting services. 
   Our activities are predicated on an untiring resolve to offer its very best in the Bolt Torquing, Tensioning,
   Welding of Well Head and Precision Cold Cutting Solution etc. Perhaps this is what is responsible for the 
   appreciable level of engineering pedigree that the company has attained. We provide the highest quality and 
   most comprehensive technician who are capable in the usage of our various range of product i.e. hydraulic 
   pneumatic and electric torque wrenches with accessories, hydraulic nuts, Bolt Tensioning, precision cold 
   cutting machine and other high-end bolting and Tube Cleaning Technologies. Nevertheless, we have been operating 
   as an enterprise until 2011 when the company was in cooperated as a limited liability company,
  </p>

  <p className="text-start mb-8 text-lg mt-10 md:px-[6rem]">
    through these years TORQTECH OFFSHORE SERVICES has gained enough knowledge and wisdom to move its staffs and 
    related companies from obscurity to excellence in its tiled of endeavor, we are known by the type of Man-power 
    we keep to inspire and invigorate our services to greatness. In other to achieve this greatness, Torqtech Offshore 
    Services rubs mind with their contractors regularly to make sure excellence is achieved.
  </p>

  <p className="text-start mb-8 text-lg mt-10 md:px-[6rem]">
    TORQTECH OFFSHORE SERVICES is a wholly owned Nigerian indigenous Company carrying on the business of Engineering, 
    Maintenance, Technical-Procurement, Mechanical and Electrical works, Equipment leasing, Labour, Torquing and 
    Tensioning solution, Precision Cold Cutting Of Pipe / Pipe Replacement, Pressure Testing / Hydro Testing, Heat 
    Exchanger Tube Cleaning Services, Welding Of Well Head i.e. Well Head Installation; Fire & Gas Alarm System in 
    Oil and Gas industries, Supply Of Oil Tools and Logistics Services. TORQTECH’S management System works to ISO 
    9000/14001 standards. This systems, allows us to address problem and advice clients accordingly. This in turn 
    has often led us from Non performance pitfalls. Our projects site is as a matter of policy being managed by 
    qualified managers, we adhere closely to current government regulations.
  </p>
  
</p>
    <section className="relative w-full h-auto overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-10 bg-black/40 media_about">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-black">
        PROFICIENCY
      </h2>

      <p className="text-base sm:text-lg leading-relaxed text-black md:pb-10">
        As a full solution provider of international best practice, we are capable of
        taking on entire projects with extensive technical and administrative capabilities.
        Our Engineers in the technical areas can supervise and manage every critical phase
        of the project from conceptual design, material specification and procurement,
        to the final commissioning phase. Testing, measurement, and trial runs
        demonstrate our company’s performance commitment. Our professionals are dedicated
        to the complete integration of your project installations and management.
      </p>

      <hr className="mt-6 border-black w-3/4 mx-auto md:mx-0" />
    </div>

    {/* Image */}
    <div className="md:w-1/2">
      <img
        src={about}
        alt="Proficiency section image"
        className="w-full h-auto rounded-lg shadow-md object-cover"
      />
    </div>

  </div>

</section>



  </div>
      
    </div>
  )
}


export default About