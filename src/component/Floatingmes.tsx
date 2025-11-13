import { useState } from "react";
import { MessageCircle } from "lucide-react"; // nice message icon
import "../Styles/Header.css"

const Floatingmes = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all 
        duration-300 z-50 "
        aria-label="Contact Us"
      >
        <MessageCircle size={24} />
      </button>

      {/* Popup Form */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[90vw] sm:w-[22rem] bg-white shadow-2xl rounded-xl p-6 border border-gray-200 z-50 fadeIn animate-fadeIn">
          <h3 className="text-lg font-semibold text-black ">Let’s Talk About Your Project</h3>
          <p className="text-sm text-gray-600 mb-4">
            After we get some information from you, we’ll set up a time to discuss your project in further detail.
          </p>

          <form className="space-y-3 text-gray-600">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                minLength={5}
                maxLength={500}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                // rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            If you’ve got questions or ideas you’d like to share, send a message.
          </p>
        </div>
      )}
    </>
  );
}
export default Floatingmes;