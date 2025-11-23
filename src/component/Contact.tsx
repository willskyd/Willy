// import React from 'react'
import contact1 from '../img/contact1.webp'

const Contact = () => {
  return (
    <div>

         <section
  className=" relative md:w-[100vw] w-screen h-[50vh] overflow-hidden -mt-10 md:left-1/2 md:-translate-x-1/2 -ml-[8vw] md:ml-0 "
>
  <img
  src={contact1}
    alt="Service"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
</section>
       {/* Wrapper that centers the card on ALL screens */}
<div className="w-full flex justify-center mt-36 px-4 xl:pb-[6vh] ">

  <div className="w-full md:w-[60vw] lg:w-[45vw] xl:w-[40vw] 
                  bg-gray-50 shadow-2xl rounded-xl p-6 
                  border border-gray-200 z-50 fadeIn animate-fadeIn">

    <h3 className="text-lg font-semibold text-black">Let’s Talk About Your Project</h3>
    <p className="text-sm text-gray-600 mb-4">
      After we get some information from you, we’ll set up a time to discuss your project in further detail.
    </p>

    <form className="space-y-3 text-gray-600">

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-full px-3 py-2 text-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          minLength={5}
          maxLength={500}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        ></textarea>
      </div>

      <button
  type="submit"
  className=" w-full sm:w-[60vw] md:w-[35vw] lg:w-[20vw] xl:w-[15vw] bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700
   transition-all">
  Send Message
</button>


    </form>

    <p className="text-xs text-gray-500 mt-3">
      If you’ve got questions or ideas you’d like to share, send a message.
    </p>

  </div>

</div>
    </div>
  )
}

export default Contact