import Button from "../Components/Button/Button";
import profile from "../assets/images/Rectangle.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const About = ({ title, setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  useEffect(() => {
    document.title = `${title}`;
  });
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
            Hi, I'm a professional front-end developer with over two years of
            experience. Specializing in creating visually appealing and
            responsive websites using the latest web technologies like{" "}
            <span className="text-[#35d16e] font-bold">HTML</span>,
            <span className="text-[#35d16e] font-bold"> CSS</span>,
            <span className="text-[#35d16e] font-bold"> JS</span>,
            <span className="text-[#35d16e] font-bold"> React</span>,
            <span className="text-[#35d16e] font-bold"> Next.js</span>,
            <span className="text-[#35d16e] font-bold"> Tailwind</span>,
            <span className="text-[#35d16e] font-bold"> Git</span>,
            <span className="text-[#35d16e] font-bold"> Github</span>.
            Proficient in various front-end development tools. Committed to
            delivering high-quality projects on time Let's bring your project to
            life together Prices are negotiable and totally depend on type of
            work!
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
    </section>
  );
};

export default About;
