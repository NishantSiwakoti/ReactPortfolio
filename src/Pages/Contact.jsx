import React, { useState } from "react";
import Button from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section>
      <h1 className="text-orange-400 font-bold text-3xl md:text-4xl text-center mb-5">
        Contact Me
      </h1>
      <div className="flex flex-wrap justify-between pt-8">
        {/* Contact Info */}
        <div></div>
        <div className="w-full md:w-1/3 pr-4 ml-10" data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-5 text-gray-600 dark:text-white">
            Contact Information
          </h2>
          <p className="mb-4 text-md md:text-xl text-orange-600 dark:text-white">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Nishant Siwakoti
          </p>
          <p className="mb-4 text-md md:text-xl text-orange-600 dark:text-white">
            <FontAwesomeIcon icon={faLocation} className="mr-2" />
            Kathmandu, Nepal
          </p>

          <p className="mb-4 text-md md:text-xl text-orange-600 dark:text-white">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email: nishantsiwakoti5@gmail.com
          </p>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-1/2 md:pl-4" data-aos="fade-left">
          <h1 className="text-2xl mb-4 dark:text-white font-bold text-gray-600">
            Get in Touch
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
