import { TypeAnimation } from "react-type-animation";
import Button from "../Components/Button/Button";
import profile from "../assets/images/Rectangle.png";
import profile1 from "../assets/images/ps.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
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
        className="fixed bottom-8 right-8 bg-green-400 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 hover:bg-green-500 focus:outline-none"
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      {/* Hero Section */}
      <section className="md:flex items-center min-h-[60vh] p-5 md:p-10  text-white">
        <div className="flex-1 pl-5">
          <h1 className="text-[#35d16e] text-3xl text-center md:text-left md:ml-[100px] font-semibold">
            Hi,
          </h1>
          <div className="flex flex-col md:ml-[100px]">
            <div className="mt-2 text-center md:text-left">
              <TypeAnimation
                sequence={[
                  "I'm a Web Developer",
                  1000,
                  "I'm a Full Stack Developer",
                  1000,
                ]}
                className="text-[#35d16e] font-extrabold text-[30px] md:text-5xl"
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
                  <FaFacebook className="text-[#35d16e] text-3xl hover:text-[#2dbe77] transition duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishant-siwakoti-470a06231/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-[#35d16e] text-3xl hover:text-[#2dbe77] transition duration-300" />
                </a>
                <a
                  href="https://github.com/NishantSiwakoti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-[#35d16e] text-3xl hover:text-[#2dbe77] transition duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/nishant.siwakotii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[#35d16e] text-3xl hover:text-[#2dbe77] transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0 md:flex md:justify-center">
          <img
            src={profile1}
            alt="Nishant Profile"
            className=" transition-transform duration-500 hover:scale-105"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* About me Section */}
      <section className="min-h-[70vh] p-5 md:p-10  text-gray-800 relative">
        <h2
          data-aos="fade-down"
          className="font-extrabold text-2xl md:text-4xl text-[#35d16e] text-center pt-2"
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row mt-10">
          <div className="flex justify-center items-center mb-10 md:mb-0">
            <img
              src={profile}
              alt="Nishant ProfilePic"
              data-aos="fade-up"
              className="w-full rounded-full md:ml-[50px] lg:ml-[px] max-w-[250px] md:max-w-[300px] border-4 border-[#35d16e] shadow-lg"
              style={{ height: "auto" }}
            />
          </div>
          <div className="flex-1">
            <p
              className="leading-relaxed m-2 md:ml-[100px] md:mt-[20px] text-center md:text-justify lg:mr-[100px] bg-opacity-75 dark:text-white"
              data-aos="fade-left"
            >
              Hi, I'm a professional full-stack developer with over two years of
              experience. I specialize in creating visually appealing and
              responsive websites using the latest web technologies. On the
              front-end, I work with{" "}
              <span className="text-[#35d16e] font-bold">ReactJs</span>,{" "}
              <span className="text-[#35d16e] font-bold">NextJs</span>,{" "}
              <span className="text-[#35d16e] font-bold">JavaScript</span>,{" "}
              <span className="text-[#35d16e] font-bold">Html</span>,{" "}
              <span className="text-[#35d16e] font-bold">Css</span>, and{" "}
              <span className="text-[#35d16e] font-bold">Tailwind CSS</span>. On
              the back-end, I'm proficient in{" "}
              <span className="text-[#35d16e] font-bold">Laravel</span> and have
              experience working with{" "}
              <span className="text-[#35d16e] font-bold">Git</span> and{" "}
              <span className="text-[#35d16e] font-bold">GitHub</span> for
              version control. I am committed to delivering high-quality
              projects on time. Prices are negotiable and depend on the type of
              work!
            </p>
            <div
              className="flex justify-center items-center md:ml-[100px] md:flex md:justify-start mt-5"
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

      {/* Projects Section */}
      <section className=" text-white py-10 px-5 md:px-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center text-[#35d16e] mb-10">
          Projects
        </h1>
        <Projects />
      </section>
    </>
  );
};

export default Home;
