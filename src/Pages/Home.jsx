import { TypeAnimation } from "react-type-animation";
import photo from "../assets/images/animation.png";
import Button from "../Components/Button/Button";
import profile from "../assets/images/ProfilePic.png";
import Card from "../Components/Card";
import react from "../assets/images/react.png";
import django from "../assets/images/django.png";
import tailwind from "../assets/images/20.png";
import php from "../assets/images/php.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "../Components/Slider";
import Divss from "../Components/Divss";
import kkr from "../assets/KKR.png";
import dc from "../assets/DC.png";
import srh from "../assets/SRH.png";
import mi from "../assets/MI.png";
import csk from "../assets/CSK.png";
import gt from "../assets/GT.png";
import rr from "../assets/RR.png";
import lsg from "../assets/LSG.png";
import rcb from "../assets/RCB.png";
import pbks from "../assets/PBKS.png";

const Home = ({ title, setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  useEffect(() => {
    document.title = `${title} | Nishant`;
  });
  const formatDate = (dateStr) => {
    const matchDate = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (matchDate.toDateString() === today.toDateString()) {
      const currentTime = today.getHours() * 60 + today.getMinutes();
      const startLiveTime = 19 * 60; // 7:00 PM in minutes
      const endLiveTime = 24 * 60; // 12:00 AM in minutes

      if (currentTime >= startLiveTime && currentTime < endLiveTime) {
        return "Live";
      } else if (currentTime >= endLiveTime || today.getHours() < 7) {
        return "Ended";
      } else {
        return "Today";
      }
    } else if (matchDate.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else if (matchDate.toDateString() === yesterday.toDateString()) {
      return "Ended";
    } else {
      return dateStr;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="md:flex items-center min-h-[40vh]">
        <div className="flex-1 pl-5">
          <h1 className="text-orange-400 text-3xl text-center md:text-left md:ml-[100px] ">
            Hi,
          </h1>
          <div className="flex flex-col md:ml-[100px]">
            <div className="mt-2 text-center md:text-left">
              <TypeAnimation
                sequence={["I'm Web Dev", 1000, "I'm Frontend Dev", 1000]}
                className="text-orange-500 font-bold text-[30px] md:text-5xl"
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
              <div>
                <NavLink to="/contact">
                  <Button name="Hire Me" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img
            className=""
            data-aos=""
            src={photo}
            alt="Nishant Siwakoti"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* About me Section*/}
      <section className="min-h-[60vh] relative">
        <h2
          data-aos="fade-down"
          className="font-bold text-2xl md:text-4xl text-orange-400 text-center pt-2"
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center mt-5">
            <img
              src={profile}
              alt="Nishant Siwakoti"
              data-aos="fade-up"
              className="w-full md:ml-[50px] lg:ml-[px] max-w-[200px] md:max-w-[300px]"
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
              <span className="text-orange-400 font-bold">HTML</span>,
              <span className="text-orange-400 font-bold"> CSS</span>,
              <span className="text-orange-400 font-bold"> JS</span>,
              <span className="text-orange-400 font-bold"> React</span>,
              <span className="text-orange-400 font-bold"> Tailwind</span>,
              <span className="text-orange-400 font-bold"> Next.js</span>,
              <span className="text-orange-400 font-bold"> Git</span>.
              <span className="text-orange-400 font-bold"> Github</span>.
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
                to="https://drive.google.com/file/d/1yChxB7aflRTZxZo0Cj26b71WLoYsKa9I/view?usp=sharing"
                target="_blank"
              >
                <Button name="Download CV" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* Live Section */}
      <section className="dark:bg-slate-800">
        <h2 className="font-bold text-2xl md:text-4xl text-orange-400 text-center pt-2">
          Matches
        </h2>
        <Divss
          photo1={dc}
          team1="DC"
          photo2={lsg}
          team2="LSG"
          status={formatDate("May 14, 2024")}
        />
        <Divss
          photo1={rr}
          team1="RR"
          photo2={pbks}
          team2="PBKS"
          status={formatDate("May 15, 2024")}
        />
        <Divss
          photo1={srh}
          team1="SRH"
          photo2={gt}
          team2="GT"
          status={formatDate("May 16, 2024")}
        />
        <Divss
          photo1={mi}
          team1="MI"
          photo2={lsg}
          team2="LSG"
          status={formatDate("May 17, 2024")}
        />
        <Divss
          photo1={rcb}
          team1="RCB"
          photo2={csk}
          team2="CSK"
          status={formatDate("May 18, 2024")}
        />
      </section>

      {/* Skills Section */}
      <section className="min-h-[70vh]">
        <h1
          data-aos="fade-down"
          className="text-orange-400 md:text-4xl text-3xl font-bold text-center mb-8"
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
      <section className="min-h-[40vh]">
        <h1
          className="text-orange-400 md:text-4xl text-3xl font-bold text-center mb-8"
          data-aos="fade-left"
        >
          Projects
        </h1>
        <div data-aos="fade-down">
          <h1 className="text-2xl md:text-3xl text-orange-400 text-center font-bold mb-5 ">
            1. Sajilo Yatra - A Vehicle Rental Platform
          </h1>
        </div>
        <div data-aos="fade-left">
          <Slider type="home" />
        </div>
        <div className="flex justify-center" data-aos="fade-left">
          <NavLink to="/projects">
            <Button name="More Projects" />
          </NavLink>
        </div>
      </section>
      {/* Contact Section */}
      <section>
        <h1
          data-aos="zoom-in"
          className="text-orange-400 font-bold text-3xl md:text-4xl text-center mb-5"
        >
          Contact Me
        </h1>
        <div className="flex flex-wrap justify-between pt-8">
          {/* Contact Info */}
          <div></div>
          <div className="w-full md:w-1/3 pr-4 ml-10" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-5 text-gray-600 dark:text-white">
              Contact Information
            </h2>
            <p className="mb-4 text-md md:text-xl text-orange-600 dark:text-white">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Nishant Siwakoti
            </p>
            <p className="mb-4 text-md md:text-xl text-orange-600 dark:text-white">
              <FontAwesomeIcon icon={faLocation} className="mr-2" />
              Kathmandu, Nepal
            </p>

            <p className="mb-4 text-md md:text-xl text-orange-600 dark:text-white">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              nishantsiwakoti5@gmail.com
            </p>
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 md:pl-4" data-aos="fade-left">
            <h1 className="text-2xl mb-4 dark:text-white text-center md:text-left font-bold text-gray-600">
              Get in Touch
            </h1>
            <form className="bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  name="email"
                  required
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message"
                  name="message"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <Button name="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
