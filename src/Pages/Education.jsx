import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bscImage from "../assets/images/tu.png";
import higherSecondaryImage from "../assets/images/bhanu.png";
import secondaryImage from "../assets/images/bhanu.png";

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const educationData = [
    {
      degree:
        "Bachelor of Science in Computer Science and Information Technology (B.Sc CSIT)",
      institution: "Mahendra Morang Adarsha Multiple Campus",
      year: "2019 - 2024",
      description:
        "Specialized in software engineering, full-stack web development, and artificial intelligence.",
      logo: bscImage,
    },
    {
      degree: "Higher Secondary Education in Science",
      institution: "Bhanu Memorial Higher Secondary School",
      year: "2016 - 2019",
      description:
        "Completed coursework in advanced mathematics and computer science, achieving top grades.",
      logo: higherSecondaryImage,
    },
    {
      degree: "Secondary Education",
      institution: "Pathibhara English School",
      year: "2016",
      description: "Foundation education",
      logo: secondaryImage,
    },
  ];

  return (
    <section className="py-4" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-start"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={edu.logo}
                alt="Education Logo"
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-2">
                  {edu.institution}
                </h4>
                <span className="text-gray-500 dark:text-gray-400 block mb-4">
                  {edu.year}
                </span>
                <p className="text-gray-700 text-base dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
