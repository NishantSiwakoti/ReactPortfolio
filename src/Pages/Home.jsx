import { TypeAnimation } from "react-type-animation";
import Button from "../Components/Button/Button";
import profile from "../assets/images/Rectangle.png";
import profile1 from "../assets/images/ps.png";
import Card from "../Components/Card";
import react from "../assets/images/react.png";
import django from "../assets/images/django.png";
import tailwind from "../assets/images/20.png";
import php from "../assets/images/php.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = ({ title, setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  useEffect(() => {
    document.title = `${title}`;
  });

  return (
    <>
      <button
        className="fixed bottom-8 right-8 bg-green-400 text-white px-4 py-2 rounded-full shadow-md transition duration-300 hover:bg-green-500 focus:outline-none"
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      {/* Hero Section */}
      <section className="md:flex items-center min-h-[40vh]">
        <div className="flex-1 pl-5">
          <h1 className="text-[#35d16e] text-3xl text-center md:text-left md:ml-[100px] ">
            Hi,
          </h1>
          <div className="flex flex-col md:ml-[100px]">
            <div className="mt-2 text-center md:text-left">
              <TypeAnimation
                sequence={["I'm Web Dev", 1000, "I'm Frontend Dev", 1000]}
                className="text-[#35d16e] font-bold text-[30px] md:text-5xl"
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
              <div className="mt-4">
                <NavLink to="/contact">
                  <Button name="Hire Me" />
                </NavLink>
              </div>
              <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a
                  href="https://www.facebook.com/nishant.siwakoti.1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-[#35d16e] text-2xl hover:text-[#2dbe77]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishant-siwakoti-470a06231/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-[#35d16e] text-2xl hover:text-[#2dbe77]" />
                </a>
                <a
                  href="https://github.com/NishantSiwakoti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-[#35d16e] text-2xl hover:text-[#2dbe77]" />
                </a>
                <a
                  href="https://www.instagram.com/nishant.siwakotii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[#35d16e] text-2xl hover:text-[#2dbe77]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={profile1}
            alt="Profile"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>
      {/* About me Section*/}
      <section className="min-h-[60vh] relative">
        <h2
          data-aos="fade-down"
          className="font-bold text-2xl md:text-4xl text-[#35d16e] text-center pt-2"
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center mt-5">
            <img
              src={profile}
              alt="profile"
              data-aos="fade-up"
              className="w-full rounded-full md:ml-[50px] lg:ml-[px] max-w-[200px] md:max-w-[300px]"
              style={{ height: "auto" }}
            />
          </div>
          <div className="flex-1">
            <p
              className="dark:text-white leading-relaxed m-2 md:ml-[100px] md:mt-[50px] text-center md:text-justify lg:mr-[100px] bg-opacity-75"
              data-aos="fade-left"
            >
              Hi, I'm a professional front-end developer with over two years of
              experience. Specializing in creating visually appealing and
              responsive websites using the latest web technologies like{" "}
              <span className="text-[#35d16e] font-bold">HTML</span>,
              <span className="text-[#35d16e] font-bold"> CSS</span>,
              <span className="text-[#35d16e] font-bold"> JS</span>,
              <span className="text-[#35d16e] font-bold"> React</span>,
              <span className="text-[#35d16e] font-bold"> Tailwind</span>,
              <span className="text-[#35d16e] font-bold"> Next.js</span>,
              <span className="text-[#35d16e] font-bold"> Git</span>.
              <span className="text-[#35d16e] font-bold"> Github</span>.
              Proficient in various front-end development tools. Committed to
              delivering high-quality projects on time Let's bring your project
              to life together Prices are negotiable and totally depend on type
              of work!
            </p>
            <div
              className="flex justify-center items-center md:ml-[100px] md:flex md:justify-start"
              data-aos="fade-left"
            >
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

      {/* Skills Section */}
      <section className="min-h-[70vh]">
        <h1
          data-aos="fade-down"
          className="text-[#35d16e] md:text-4xl text-3xl font-bold text-center mb-8"
        >
          Skills
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          <div data-aos="fade-up-right">
            <Card img={react} title="React" />
          </div>
          <div data-aos="fade-up-left">
            {" "}
            <Card img={django} title="Django" />
          </div>
          <div data-aos="fade-up-right">
            {" "}
            <Card img={tailwind} title="Tailwind CSS" />
          </div>
          <div data-aos="fade-up-left">
            {" "}
            <Card img={php} title="PHP" />
          </div>
        </div>
        <div className="flex justify-center">
          <NavLink to="/skills">
            <Button name="See More" />
          </NavLink>
        </div>
      </section>
      {/* Projects Section */}
      <h1 className="text-xl md:text-4xl font-bold text-center text-[#21c45d]">
        Projects
      </h1>
      <Projects />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Home;
