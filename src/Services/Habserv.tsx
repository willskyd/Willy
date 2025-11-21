import { useState } from "react";
import serv5 from '../img/serv5.webp'


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
  img: serv5,
  desc: "Design and installation of welding habitats to enable safe hot-work in hazardous areas.",
  client: "CHEVRON",
  date: "2024",
},
{
  title: "Positive-Pressure Habitat Deployment",
  img: serv5,
  desc: "Deployment of positive-pressure habitats to maintain safe working conditions in classified zones.",
  client: "TOTALENERGIES",
  date: "2025",
},
{
  title: "Hot-Work Habitat Monitoring",
  img: serv5,
  desc: "Continuous atmospheric monitoring and safety supervision during habitat-supported hot-work.",
  client: "SHELL",
  date: "2024",
},
{
  title: "Habitat Maintenance & Support",
  img: serv5,
  desc: "Operational support, equipment servicing, and integrity checks for installed habitat systems.",
  client: "NLNG",
  date: "2023",
},
{
  title: "Custom Habitat Fabrication",
  img: serv5,
  desc: "Fabrication and deployment of customized habitat structures for confined and restricted spaces.",
  client: "AGIP",
  date: "2024",
},
{
  title: "Habitat Safety Management",
  img: serv5,
  desc: "End-to-end safety management for habitat operations including gas testing and barrier control.",
  client: "EATECH/MPNU",
  date: "2024",
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


const Habserv = () => {
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

export default Habserv;
