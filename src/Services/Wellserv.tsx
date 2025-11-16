import { useState } from "react";
import serv8 from '../img/serv8.webp'


type Service = {
  title: string;
  img: string;
  desc: string;
  client: string;
  date: string;
};


const services: Service[] = [
  {
  title: "Habitat Construction & Setup",
  img: serv8,
  desc: "Design and deployment of safe hot-work habitats for live production and maintenance operations.",
  client: "EATECH/MPNU",
  date: "2024",
},
{
  title: "Pipeline Habitat Preparation",
  img: serv8,
  desc: "Provision of habitat enclosures and isolation systems to support pipeline inspection and repair activities.",
  client: "CHEVRON",
  date: "2024",
},
{
  title: "Hot-Work Habitat Installation",
  img: serv8,
  desc: "Installation of controlled-environment habitats to enable safe hot-bolting and hot-work in hazardous zones.",
  client: "TOTALENERGIES",
  date: "2025",
},
{
  title: "Habitat Safety Monitoring & Integrity Checks",
  img: serv8,
  desc: "Continuous atmospheric monitoring, gas detection, and habitat integrity verification during operations.",
  client: "SHELL",
  date: "2024",
},
{
  title: "Chemical Operations Habitat Support",
  img: serv8,
  desc: "Deployment of specialized habitat systems to support chemical cleaning and sensitive process activities.",
  client: "NLNG",
  date: "2023",
},
{
  title: "Custom Habitat Fabrication & Deployment",
  img: serv8,
  desc: "Fabrication, mobilization, and installation of custom-designed habitat structures for critical maintenance work.",
  client: "AGIP",
  date: "2024",
},

];
// changes made

const ServiceCard = ({
  title,
  img,
  desc,
  client,
  date,
}: Service) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col overflow-hidden 
    hover:shadow-lg transition-shadow duration-300 max-w-xs md:ml-0 ml-[6vw]">
 
  <div className="h-28 w-full overflow-hidden">
    <img src={img} alt={title}
     className="w-20 h-20 object-cover rounded-full pointer-events-none" />
  </div>

  
  <div className="p-3 flex flex-col flex-grow -mt-[6vh] ">
    <h2 className="font-bold text-base text-gray-800 mb-1">{title}</h2>

   
    <button
      className="text-blue-600 font-semibold text-xs flex items-center gap-1 focus:outline-none"
      onClick={() => setOpen(!open)}
    >
      Details
      <span
        className={`ml-1 transition-transform duration-300 ${
          open ? "rotate-180" : "rotate-0"
        }`}
      >
        ▼
      </span>
    </button>

   
    {open && (
      <div className="mt-2 text-xs text-gray-700 border-t pt-2">
        <p className="mb-1">{desc}</p>
        <p className="font-semibold mb-1">
          Client: <span className="font-normal">{client}</span>
        </p>
      </div>
    )}

   
    <div className="mt-auto pt-2 text-xs text-gray-500 border-t">Date: {date}</div>
  </div>
</article>

  );
};


const Wellserv = () => {
  return (
    <section className="w-full py-10 px-4 md:px-12 -mt-[50vh]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((svc, index) => (
          <ServiceCard key={index} {...svc} />
        ))}
      </div>
    </section>
  );
};

export default Wellserv;
