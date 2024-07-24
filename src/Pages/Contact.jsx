import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import gifSrc from "../assets/images/contact.gif";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnnajobo");
  const [showConfetti, setShowConfetti] = useState(false);

  const { innerWidth: width, innerHeight: height } = window;

  useEffect(() => {
    if (state.succeeded) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="relative flex justify-center items-center min-h-screen p-6  dark:bg-gray-800 overflow-hidden">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      {state.succeeded ? (
        <div className="text-center z-10">
          <p className="text-green-500 text-2xl md:text-4xl font-semibold mb-4">
            Thanks for your message! Will contact you shortly!
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-green-700 text-white rounded-md shadow-md hover:bg-green-800 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center min-h-screen p-6">
          <h1 className="text-3xl font-bold mb-8 text-green-600 text-center">
            Contact Us
          </h1>
          <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
            {/* Contact Information Section */}
            <div className="md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Discuss something great together.
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col space-y-1 text-green-600 font-semibold">
                  <div className="flex items-center space-x-1">
                    <span className="material-icons">Email :</span>
                    <span>nishantsiwakoti5@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons">Phone :</span>
                    <span>+977 9817913039</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons">Address :</span>
                    <span>Kathmandu, Nepal</span>
                  </div>
                  {/* GIF for md and lg devices */}
                  <div className="hidden md:block lg:block mt-4">
                    <img
                      src={gifSrc}
                      alt="Contact GIF"
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:w-1/2 p-6 dark:bg-gray-900 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white text-sm font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-base"
                    placeholder="Nishant Siwakoti"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-base"
                    placeholder="nishant@gmail.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white text-sm font-medium">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-base"
                    placeholder="Your message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-700 text-white rounded-md shadow-md hover:bg-green-800 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
