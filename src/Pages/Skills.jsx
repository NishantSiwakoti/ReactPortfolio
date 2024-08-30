import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiLaravel } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Components/Button/Button";

const Skills = ({ title, setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  const skills = [
    { icon: <FaReact className="text-blue-500" />, title: "React" },
    { icon: <SiLaravel className="text-red-600" />, title: "Laravel" },
    { icon: <FaCss3Alt className="text-blue-600" />, title: "CSS" },
    { icon: <FaJs className="text-yellow-500" />, title: "JavaScript" },
    {
      icon: <SiTailwindcss className="text-teal-400" />,
      title: "Tailwind CSS",
    },
    { icon: <FaHtml5 className="text-orange-600" />, title: "HTML" },
    { icon: <FaPhp className="text-purple-600" />, title: "PHP" },
    { icon: <FaPython className="text-blue-600" />, title: "Python" },
  ];

  return (
    <section className="py-4">
      <h1 className="text-center font-bold text-4xl p-5 text-[#35d16e]">
        Skills
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-8 p-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-5 w-40 h-40 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-6xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <NavLink to="/contact">
          <Button name="Contact me" />
        </NavLink>
      </div>
    </section>
  );
};

export default Skills;
