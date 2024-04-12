import React from "react";
import Card from "../Components/Card";
import react from "../assets/images/react.png";
import html from "../assets/images/h.png";
import tailwind from "../assets/images/20.png";
import php from "../assets/images/php.png";
import python from "../assets/images/python.png";
import django from "../assets/images/django.png";
import c from "../assets/images/c.png";
import Button from "../Components/Button";
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
      <h1 className="text-center  font-bold text-orange-400 text-4xl p-5">
        Skills
      </h1>
      <div
        className="flex justify-center items-center flex-wrap"
        data-aos="flip-right"
      >
        <Card img={react} title="React" />
        <Card img={html} title="HTML,CSS,JS" />
        <Card img={tailwind} title="Tailwind CSS" />
        <Card img={php} title="PHP" />
        <Card img={python} title="Python" />
        <Card img={django} title="Django" />
        <Card img={c} title="C, C++, C#" />
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
