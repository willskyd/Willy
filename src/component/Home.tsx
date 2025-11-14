import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../Styles/Header.css"
import Slide from "../Services/Slide";
import Floatingmes from "./Floatingmes";
import safety from '../img/safety.webp'
import health from '../img/health.webp'
import slide3 from '../img/slide3.webp'

export default function HeroSlider() {

   const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] md:w-[99.2vw] w-[98.5vw] small_mobile overflow-x-hidden overflow-y-hidden -mt-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-[29rem] md:h-[36rem] "
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex || 0)}

      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full w-full ">
            <img
              src={safety}
              alt="Fast Reliable Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-black/50 flex flex-col items-center justify-center text-center">
               {activeIndex === 0 && (
               <motion.div
                key="slide1"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
               className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center"
  >
    <h2 className="text-white text-4xl md:text-5xl font-black mt-[12rem]">
      SAFETY
    </h2>
    <div className="mt-3 text-white/80 text-sm md:text-lg">
      <p className="font-bold uppercase text-white/100 text-xl">
        safety in working environments
      </p>
      <p className="w-auto h-auto p-3 bg-black/45 mt-[1rem] font-semibold justify-start rounded-xl">
        TorqTech invest in full-time safety coordinator <br />
        to make certain our HSE department is always up to <br /> date on
        customer safety requirements and OSHA <br /> regulations.
        &nbsp; <a href="" className="text-blue-600">Read more</a>
      </p>
       </div>
       </motion.div>
     )}
    </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src={health}
              alt="Fast Reliable Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
             {activeIndex === 1 && (
           <motion.div
             key="slide2"
             initial={{ opacity: 0, x: -40 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 40 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center"
           > 
              <h2 className="text-white text-4xl md:text-5xl font-black mt-[12rem]">
                  HEALTH 
              </h2>
              <p className="mt-3 text-white/80 text-sm md:text-lg">
                <p className="font-bold uppercase text-white/100 md:text-xl text-lg">occupational health & industrial hygiene</p>

                 <p className="w-auto h-auto p-3 bg-black/45 mt-[1rem] font-semibold rounded-xl">A robust and clearly defined occupational 
                  <br />health and industrial hygiene program is critical <br />for the effectiveness of any business and we 
                  &nbsp; <br /> <a href="" className="text-blue-600">Read more</a></p>
              </p>

             </motion.div>
               )}
              </div>
              </div>
              </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
            src={slide3}
              alt="Fast Reliable Service"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            {activeIndex === 2 && (
            <motion.div
              key="slide3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center"
            >

              <h2 className="text-white text-4xl md:text-5xl font-black mt-[12rem]">
                  TECHNOLOGY 
              </h2>
              <p className="mt-3 text-white/80 text-sm md:text-lg">
                <p className="font-bold uppercase text-white/100 text-xl">Technology engineering capabilities</p>

                 <p className="w-auto h-auto p-3 bg-black/45 mt-[1rem] font-semibold rounded-xl">Being a whole system supplier also offers 
                 leading <br /> capabilities in engineering, standard and special <br />fasteners and wide-range bolting tool services.
                  &nbsp; <br /> <a href="" className="text-blue-600">Read more</a></p>
              </p>
              </motion.div> )}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

         <div className="bg-blue-600 w-full h-auto pb-8 p-5 flex-row  items-center justify-center text-white">

      <a href="/">
        <img
          src="/src/img/Iso.webp"
          alt="ISO"
          className="w-[25vw] md:w-[20vw] h-auto mt-6 ml-[35vw] md:ml-[37vw] "
        />
      </a> 

        <div className="text-xl mt-3 md:font-semibold md:text-2xl">
          ISO 9001:2015 (Quality Management System)
          </div> 

          <div>
        <div className="hidden md:block text-xl mt-8 text-left ml-[20rem] pb-10 ">
  At TorqTech Offshore, we're not just part of the offshore technology industry – <br /> we're shaping 
  its future. Since our founding in [year], we've been at the forefront <br /> of developing cutting-edge 
  solutions that optimize offshore operations, enhance <br /> safety, and promote sustainability.
</div>

{/* small screen */}
 <div className="block md:hidden text-xl mt-3  md:text-xl text-left">
  At TorqTech Offshore, we're not just part of the offshore technology industry – we're shaping 
  its future. Since our founding in [year], we've been at the forefront of developing cutting-edge 
  solutions that optimize offshore operations, enhance safety, and promote sustainability.
</div>

    <div>
      <a href="/about">
            <button className="bg-blue-950 text-white px-5 py-3 rounded-full text-2xl font-semibold
             hover:bg-yellow-600 transition-colors -ml-[1rem] uppercase md:mt-0 mt-7">
             More about us
            </button>
          </a>
    </div>
    
          </div>
         </div>

          <div className="bg-blue-800 w-full h-auto pb-8 p-5 flex-row  items-center justify-center text-white">
            <div className="text-2xl md:text-3xl md:mt-5 md:ml-7 mt-5 font-bold text-left uppercase ">services</div>
             <div className="mt-5 text-sm -ml-1 text-left md:text-sm md:ml-6">Aimed at building high, and quality Bolt Torquing</div>
        <div className="mt-2 text-sm -ml-1 text-left md:text-sm md:ml-6 ">TORQTECH’S management System works to ISO 9000/14001 standards.</div>

       <Slide />  
         
          </div>

  
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6724396985414!2d7.035732974019797!3d4.826190540558896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdafeec0d07f%3A0xd550783dc7f12f1a!2sTorqtech%20Offshore%20Services%20Limited!5e0!3m2!1sen!2sng!4v1762429055409!5m2!1sen!2sng" 
  width="100%"
  height="600"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    <Floatingmes />
    </section>
  );
}
