import { useState } from "react";
import serv3 from '../img/serv3.webp'


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
  img: serv3,
  desc: "Design, construction, and deployment of welding habitats for safe hot-work operations.",
  client: "CHEVRON",
  date: "2024",
},
{
  title: "Positive-Pressure Habitat Installation",
  img: serv3,
  desc: "Installation of positive-pressure habitat enclosures to maintain safe work environments in classified zones.",
  client: "TOTALENERGIES",
  date: "2024",
},
{
  title: "Habitat Monitoring & Gas Detection",
  img: serv3,
  desc: "Continuous atmospheric monitoring, gas detection, and habitat integrity verification during hot-work.",
  client: "SHELL",
  date: "2023",
},
{
  title: "Habitat Maintenance & Support Services",
  img: serv3,
  desc: "Routine maintenance, integrity checks, and operational support for on-site habitat systems.",
  client: "NLNG",
  date: "2024",
},
{
  title: "Temporary Habitat Fabrication",
  img: serv3,
  desc: "Fabrication and deployment of custom temporary habitats for confined space and restricted-area operations.",
  client: "AGIP",
  date: "2024",
},
{
  title: "Hot-Work Habitat Safety Management",
  img: serv3,
  desc: "Comprehensive safety supervision, barrier management, and habitat operational control for hot-work tasks.",
  client: "EATECH/MPNU",
  date: "2025",
},

];


const ServiceCard = ({
  title,
  img,
  desc,
  client,
  date,
}: Service) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-gray-50 rounded-lg shadow-md border border-gray-200 flex flex-col overflow-hidden 
    hover:shadow-lg transition-shadow duration-300 max-w-xs md:ml-0 ml-[6vw]">
 
  <div className="h-28 w-full overflow-hidden">
    <img src={img} alt={title}
    loading="lazy"
      decoding="async"
      width={80}
      height={80}
     className="w-[4rem] h-[4rem] p-1.5 object-cover rounded-full pointer-events-none" />
  </div>

  
  <div className="p-3 flex flex-col flex-grow -mt-[6vh] ">
    <h2 className="font-bold text-base text-gray-800 mb-1 mt-3">{title}</h2>

   
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


const Habprep = () => {
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

export default Habprep;
