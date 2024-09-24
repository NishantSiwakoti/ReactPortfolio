import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaMedal, FaTrophy } from "react-icons/fa"; // Import grade icons
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
        "Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)",
      institution: "Mahendra Morang Adarsha Multiple Campus",
      year: "2019 - 2024",
      description:
        "Specialized in software engineering, full-stack web development, and artificial intelligence.",
      logo: bscImage,
      grade: "Overall: 76%",
      icon: <FaTrophy className="text-yellow-500" />,
    },
    {
      degree: "Higher Secondary Education in Science",
      institution: "Bhanu Memorial Higher Secondary School",
      year: "2016 - 2019",
      description:
        "Completed coursework in advanced mathematics and computer science, achieving top grades.",
      logo: higherSecondaryImage,
      grade: "B+",
      icon: <FaMedal className="text-yellow-500" />,
    },
    {
      degree: "Secondary Education",
      institution: "Pathibhara English School",
      year: "2016",
      description: "Foundation education",
      logo: secondaryImage,
      grade: "A",
      icon: <FaMedal className="text-yellow-500" />,
    },
  ];

  return (
    <section className="py-4" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex items-start"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={edu.logo}
                alt="Education Logo"
                className="md:w-20 md:h-20 w-14 h-14 rounded-full object-cover mr-6"
              />
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {edu.institution}
                </h4>
                <span className="text-gray-500 dark:text-gray-400 text-xs md:text-base block mb-4">
                  {edu.year}
                </span>
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-2">{edu.icon}</div>
                  <div className="text-yellow-500 text-sm md:text-base bg-yellow-100 dark:bg-yellow-600 dark:text-yellow-200 px-4 py-1 rounded-lg font-semibold">
                    Grade: {edu.grade}
                  </div>
                </div>
                {/* <p className="text-gray-700 dark:text-gray-300">
                  {edu.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
