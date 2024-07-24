import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Components/Button/Button";

const Contact = ({ title, setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section>
      <h1
        data-aos="zoom-in"
        className="text-[#35d16e] font-bold text-3xl md:text-4xl text-center mb-5"
      >
        Contact Me
      </h1>
      <div className="flex flex-wrap justify-between pt-8">
        {/* Contact Info */}
        <div></div>
        <div className="w-full md:w-1/3 pr-4 ml-10" data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-5 text-gray-600 dark:text-white">
            Contact Information
          </h2>
          <p className="mb-4 text-md md:text-xl text-[#35d16e] dark:text-[#35d16e]">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Nishant Siwakoti
          </p>
          <p className="mb-4 text-md md:text-xl text-[#35d16e] dark:text-[#35d16e]">
            <FontAwesomeIcon icon={faLocation} className="mr-2" />
            Kathmandu, Nepal
          </p>
          <p className="mb-4 text-md md:text-xl text-[#35d16e] dark:text-[#35d16e]">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            nishantsiwakoti1@gmail.com
          </p>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-1/2 md:pl-4" data-aos="fade-left">
          <h1 className="text-2xl mb-4 dark:text-[#35d16e] text-center md:text-left font-bold text-gray-600">
            Get in Touch
          </h1>
          <form
            action="https://formspree.io/f/xnnajobo"
            method="POST"
            className="bg-green-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
                name="email"
                required
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                name="message"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <Button name="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
