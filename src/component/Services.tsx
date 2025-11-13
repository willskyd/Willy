import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Header.css";


const Slide = () => {
  const [isClient, setIsClient] = useState(false); 
  const [isLargeScreen, setIsLargeScreen] = useState(false); 

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) return null; 

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    centerMode: isLargeScreen, 
    centerPadding: isLargeScreen ? "180px" : "0px",
  };

  const slides = [
    {
      href: "/Bolt_Tensioning",
      img: "/src/img/serv1.webp",
      title: "BOLT TENSIONING",
      desc: "Bolt tensioning is a method used to apply a precise and controlled",
    },
    {
      href: "/Cold_Cutting",
      img: "/src/img/serv2.webp",
      title: "COLD CUTTING",
      desc: "Cold cutting is a precise and efficient method of cutting metal and other ",
    },
    {
      href: "/Habitat_Preparation",
      img: "/src/img/serv3.webp",
      title: "HABITAT PREPARATION",
      desc: "Habitat preparation involves creating a controlled and safe environment for",
    },
     {
      href: "/Habitat_Service",
      img: "/src/img/serv5.webp",
      title: "HABITAT SERVICE",
      desc: "Our Habitat Service allows you to carry out hot work and maintenance",
    },
     {
      href: "/Fire_&_Gas_Alarm_System",
      img: "/src/img/serv6.webp",
      title: "FIRE AND GAS ALARM SYSTEM",
      desc: "  Our Fire & Gas Alarm System ensures early detection and rapid response",
    },
     {
      href: "/Bolt_Torquing_&_Tentioning",
      img: "/src/img/serv7.webp",
      title: "BOLT TORQUING AND TENSIONING",
      desc: "Our Bolt Torquing & Tensioning service ensures the precise tightening ",
    },
     {
      href: "/Well-Head_Surveillance",
      img: "/src/img/serv8.webp",
      title: "WELL-HEAD SURVEILLANCE",
      desc: "Our Well-Head Surveillance service provides real-time monitoring and analysis",
    },
  ];

  return (
    <div className="">
  <section
  className=" relative md:w-[100vw] w-screen h-[100vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
    src="/src/img/serv9.webp"
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
</section>

{/* <section className="relative -left-16 right-0 w-screen h-[100vh] overflow-hidden">
  <img
    src="/src/img/serv4.webp"
    alt="Service"
    className="w-full h-full object-cover object-center"
  />
</section> */}






    <section className="body-font py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 ">
        
        <Slider {...settings} key={isLargeScreen ? "lg" : "sm"}>
          {slides.map((slide, i) => (
            <a
              href={slide.href}
              key={i}
              className="px-3 sm:px-4 md:px-5 lg:px-6 block"
            >
              <div className="slide-card relative transition-all duration-500 ease-in-out">
                <div className="h-auto bg-gray-100 rounded flex flex-col justify-between mt-4 shadow-lg overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px] object-cover rounded-t-sm"
                  />
                  <div className="p-4 sm:p-6">
                    <p className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900">
                      {slide.title}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-3 leading-relaxed">
                      {slide.desc}&nbsp;
                      <a
                        href={slide.href}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>

      <style>{`
        /* 🟢 Large screens only: blur effect */
        @media (min-width: 1280px) {
          .slick-slide {
            opacity: 0.5;
            transform: scale(0.9);
            filter: blur(2px);
            transition: all 0.5s ease-in-out;
          }
          .slick-center {
            opacity: 1 !important;
            transform: scale(1.05);
            filter: blur(0);
          }
        }

        /* 🟢 Small & medium: normal clean view */
        @media (max-width: 1279px) {
          .slick-slide {
            opacity: 1 !important;
            transform: scale(1);
            filter: none !important;
          }
        }

        .slick-prev:before,
        .slick-next:before {
          color: white;
          font-size: 22px;
        }

        .slick-prev,
        .slick-next {
          background: rgba(240, 240, 240, 0.9); /* light gray */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          z-index: 10;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .slick-prev:hover,
        .slick-next:hover {
          background: rgba(211, 211, 211, 1);
        }

        .slick-list {
          overflow: visible !important;
        }

        .slick-track {
          display: flex !important;
          align-items: center;
        }

        @media (max-width: 1024px) {
            .slick-prev, .slick-next {
              width: 32px;
              height: 32px;
            }
            .slick-prev {
              left: 10px !important;   /* ✅ Closer to screen edge */
              z-index: 20;
            }
            .slick-next {
              right: 10px !important;  /* ✅ Closer to screen edge */
              z-index: 20;
            }
          }

          /* 🟢 Extra small devices (mobile phones) */
          @media (max-width: 640px) {
            .slick-prev, .slick-next {
              width: 28px;
              height: 28px;
            }
            .slick-prev:before,
            .slick-next:before {
              font-size: 18px; /* ✅ Smaller icons */
            }
            .slick-prev {
              left: 6px !important;  /* ✅ Tight edge alignment */
            }
            .slick-next {
              right: 6px !important; /* ✅ Tight edge alignment */
            }
          }
      `}</style>

    </section>
     </div>
  );
};

export default Slide;
