import React from "react";
import Slider from "../Components/Slider";
import { useEffect } from "react";

const Projects = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Nishant`;
  });
  return (
    <section>
      <h1 className="text-2xl md:text-3xl text-orange-400 text-center font-bold mb-5 ">
        Projects
      </h1>
      <h1 className="text-2xl md:text-2xl text-orange-400 text-center font-bold mb-5 ">
        1. Sajilo Yatra- A Vehicle Rental System
      </h1>
      <Slider />
    </section>
  );
};

export default Projects;
