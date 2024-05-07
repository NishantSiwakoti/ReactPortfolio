import React from "react";
import Slider from "../Components/Slider";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Projects = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Nishant`;
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section>
      <div data-aos="fade-down">
        <h1 className="text-2xl md:text-3xl text-orange-400 text-center font-bold mb-5 ">
          Projects
        </h1>
        <h1 className="text-2xl md:text-2xl text-orange-400 text-center font-bold mb-5 ">
          1. Sajilo Yatra- A Vehicle Rental System
        </h1>
        <Slider />
      </div>
    </section>
  );
};

export default Projects;
