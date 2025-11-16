// import React from 'react'
import serv9 from '../img/serv9.webp'
import Cards from '../Services/Cards'


const Jobs = () => {
  return (
    <div>
         <section
  className=" relative md:w-[100vw] w-screen h-[100vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
  src={serv9}
    alt="Service"
    className="absolute inset-0 w-full h-[50vh] object-cover object-center"
  />
</section>
    <div className="absolute inset-0 flex items-center px-4  -top-[14rem]">
  <p className="text-white max-w-2xl 
     text-left text-sm sm:text-base md:text-lg 
     leading-relaxed">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
    obcaecati culpa nesciunt in laborum harum excepturi? Dicta quidem quis
    aperiam autem adipisci placeat ut dolor tempora inventore itaque sit
    quia, tempore eos. Neque impedit facere omnis quasi ipsa pariatur.
  </p>
</div>

   <Cards />

    </div>
  )
}

export default Jobs