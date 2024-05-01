import React from "react";
import Card from "../Components/Card";
import react from "../assets/images/react.png";
import html from "../assets/images/h.png";
import tailwind from "../assets/images/20.png";
import php from "../assets/images/php.png";
import python from "../assets/images/python.png";
import django from "../assets/images/django.png";
import c from "../assets/images/c.png";
import Button from "../Components/Button/Button";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="">
      <h1 className="text-center font-bold text-orange-400 text-4xl p-5">
        Skills
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <div data-aos="fade-right">
          {" "}
          <Card img={react} title="React" />
        </div>
        <div data-aos="fade-left">
          {" "}
          <Card img={html} title="HTML,CSS,JS" />
        </div>
        <div data-aos="fade-right">
          {" "}
          <Card img={tailwind} title="Tailwind CSS" />
        </div>
        <div data-aos="fade-left">
          {" "}
          <Card img={php} title="PHP" />
        </div>
        <div data-aos="fade-right">
          {" "}
          <Card img={python} title="Python" />
        </div>
        <div data-aos="fade-left">
          {" "}
          <Card img={django} title="Django" />
        </div>
        <div data-aos="fade-right">
          {" "}
          <Card img={c} title="C, C++, C#" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <NavLink to="/contact">
          <Button name="Contact me" />
        </NavLink>
      </div>
    </section>
  );
};

export default Skills;
