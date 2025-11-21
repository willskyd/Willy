import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import serv1 from '../img/serv1.webp'
import serv2 from '../img/serv2.webp'
import serv3 from '../img/serv3.webp'
import serv5 from '../img/serv5.webp'


const Slide = () => {
  const [isClient, setIsClient] = useState(false); // 🟢 fix: only render slider after mount
  const [isLargeScreen, setIsLargeScreen] = useState(false); // 🟢 for screen size detection

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) return null; // 🟢 prevents slick from initializing on SSR before DOM is ready

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    centerMode: isLargeScreen, // 🟢 only active on large screens
    centerPadding: isLargeScreen ? "180px" : "0px",
  };

  const slides = [
    {
      href: "/Bolt_Tensioning",
      img: serv1,
      title: "BOLT TENSIONING",
      desc: "Tightening and loosening bolts of all sizes on flanges and clamps.",
    },
    {
      href: "/Cold_Cutting",
      img: serv2,
      title: "COLD CUTTING",
      desc: "Precision cold cutting using industry-standard machines and expert beveling.",
    },
    {
      href: "/Habitat_Preparation",
      img: serv3,
      title: "HABITAT PREPARATION",
      desc: "Professional setup of safe work habitats for hot work areas.",
    },
    {
      href: "/Habitat_Service",
      img: serv5,
      title: "HABITAT SERVICE",
      desc: "Our Habitat Service allows you to carry out hot work and maintenance",
    },
  ];

  return (
    <section className="body-font py-12 ">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* 🟢 Add key to force proper recalculation on resize */}
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
      `}</style>

      {/* Blur + focus effect
      <style>{`
        .slick-slide {
          opacity: 0.4;
          transform: scale(0.9);
          filter: blur(2px);
          transition: all 0.5s ease-in-out;
        }
        .slick-center {
          opacity: 1 !important;
          transform: scale(1.05);
          filter: blur(0);
        }
        .slick-prev:before,
        .slick-next:before {
          color: white;
          font-size: 22px;
        }
        .slick-prev,
        .slick-next {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          z-index: 10;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
        .slick-prev:hover,
        .slick-next:hover {
          background: rgba(211, 211, 211, 0.8);
        }
      `}</style> */}
    </section>
  );
};

export default Slide;
