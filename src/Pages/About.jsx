import React, { useEffect } from "react";
import Button from "../Components/Button/Button";
import profile from "../assets/images/Rectangle.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import AdsComponent from "../Components/AdsComponent";

const About = ({ title, setProgress }) => {
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
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section>
      <h2 className="font-bold text-2xl md:text-4xl text-[#35d16e] text-center pt-2">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-center mt-5">
          <img
            src={profile}
            alt="Nishant Siwakoti"
            data-aos="fade-out"
            className="w-full rounded-full md:ml-[50px] lg:ml-[px] max-w-[200px] md:max-w-[300px]"
            style={{ height: "auto" }}
          />
        </div>
        <div className="flex-1" data-aos="fade-out">
          <p className="dark:text-white leading-relaxed m-2 md:ml-[100px] md:mt-[50px] text-center md:text-justify lg:mr-[100px]">
            {/* Your content here */}
          </p>
          <div className="flex justify-center items-center md:ml-[100px] md:flex md:justify-start">
            <NavLink
              to="https://drive.google.com/file/d/1z553qs8LM79sIgteEa92abknSStABv3T/view?usp=sharing"
              target="_blank"
            >
              <Button name="Download CV" />
            </NavLink>
          </div>
        </div>
      </div>
      <h1 className="text-black">Place To show Google AdSense</h1>
      <AdsComponent />
    </section>
  );
};

export default About;
