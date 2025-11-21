import serv1 from '../img/serv1.webp'
import serv2 from '../img/serv2.webp'
import serv3 from '../img/serv3.webp'
import serv5 from '../img/serv5.webp'
import Serv6 from '../img/serv6.webp'
import serv7 from '../img/serv7.webp'
import serv8 from '../img/serv8.webp'




const Cards = () => {
  const data = [
    {
      img: serv1,
      title: "BOLT TENSIONING",
      description:
        "Provision of Equipment & Personnel for Hydraulic Bolt Torquing Services at MFEM PP",
      client: "EATECH/MPNU.",
      link: "/Bolt_Tensioning_Job",
    },
    {
      img: serv2,
      title: "COLD CUTTING",
      description:
        "Provision of Certified Personnel & Tools for Bolt Tensioning Projects.",
      client: "TOTAL ENERGIES.",
      link: "/Cold_Cutting_Job",
    },
    {
      img: serv3,
      title: "HABITAT PREPARATION",
      description:
        "Provision of Certified Personnel & Tools for Bolt Tensioning Projects.",
      client: "TOTAL ENERGIES.",
      link: "/Habitat_Preparation_Job",
    },
    {
      img: serv5,
      title: "HABITAT SERVICE",
      description:
        "Provision of Certified Personnel & Tools for Bolt Tensioning Projects.",
      client: "TOTAL ENERGIES.",
      link: "/Habitat_Service_Job",
    },
    {
      img: Serv6,
      title: "FIRE AND GAS ALARM SYSTEM",
      description:
        "Provision of Certified Personnel & Tools for Bolt Tensioning Projects.",
      client: "TOTAL ENERGIES.",
      link: "/Fire_&_Gas_Alarm_System_Job",
    },
    {
      img: serv7,
      title: "BOLT TORQUING AND TENSIONING",
      description:
        "Provision of Certified Personnel & Tools for Bolt Tensioning Projects.",
      client: "TOTAL ENERGIES.",
      link: "/Bolt_Torquing_&_Tentioning_Job",
    },
     {
      img: serv8,
      title: "WELL-HEAD SURVEILLANCE",
      description:
        "Provision of Certified Personnel & Tools for Bolt Tensioning Projects.",
      client: "TOTAL ENERGIES.",
      link: "/Well-Head_Surveillance_Job",
    },
  ];

  return (
   <div className="w-full px-4 pb-2 -mt-[40vh]  ">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {data.map((item, index) => (
      <a
        key={index}
        href={item.link}
        className="block relative bg-gray-50 rounded-xl shadow-md p-6 border 
                   flex-col sm:flex-row sm:items-start gap-4
                   shadow-gray-500 hover:shadow-xl transition cursor-pointer z-0"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-full pointer-events-none"
        />

        <div className="flex-1 pointer-events-none md:-mt-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {item.title}
          </h2>

          <p className="text-gray-600 text-sm mb-3">
            {item.description}
          </p>
        </div>
      </a>
    ))}
  </div>
</div>

  );
};

export default Cards;
