import React, { useState } from "react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden shadow-lg">
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Start Your Journey</p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let’s build a future together
          </p>

          {!showForm && (
            <button
              className="mt-10 cursor-pointer px-6 py-2 bg-yellow-300 text-black rounded-lg"
              onClick={() => setShowForm(true)}
            >
              Contact Us
            </button>
          )}

          {showForm && (
            <form
              action="https://formspree.io/f/xrbpkynp"
              method="POST"
              className="mt-10 w-full max-w-md space-y-4 text-black bg-white p-6 rounded-lg shadow-md"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full py-2 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
