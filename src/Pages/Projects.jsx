import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../assets/images/1.png";
import b from "../assets/images/2.png";
import c from "../assets/images/3.png";
import d from "../assets/images/4.png";
import e from "../assets/images/5.png";
import f from "../assets/images/6.png";
import g from "../assets/images/7.png";
import ma from "../assets/images/ma.png";
import mb from "../assets/images/mb.png";
import mc from "../assets/images/mc.png";
import md from "../assets/images/md.png";
import me from "../assets/images/me.png";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import a4 from "../assets/images/a4.png";
import a5 from "../assets/images/a5.png";
import first from "../assets/images/a.png";
import second from "../assets/images/b.png";
import third from "../assets/images/cc.png";
import fourth from "../assets/images/d.png";
import fifth from "../assets/images/e.png";
import sixth from "../assets/images/f.png";
import seventh from "../assets/images/g.png";
import v1 from "../assets/images/v1.png";
import v2 from "../assets/images/v2.png";
import v3 from "../assets/images/v3.png";
import v4 from "../assets/images/v4.png";
import v5 from "../assets/images/v5.png";
import v6 from "../assets/images/v6.png";
import v7 from "../assets/images/v7.png";
import v8 from "../assets/images/v8.png";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>
  );
};

const Projects = ({ title, setProgress }) => {
  useEffect(() => {
    if (setProgress) {
      setProgress(40);
      setTimeout(() => {
        setProgress(100);
      }, 500);
    }
  }, [setProgress]);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const projects = [
    {
      name: "HamroMart",
      link: "https://hamromart.vercel.app/",
      images: [v1, v2, v3, v4, v5, v6, v7, v8],
    },
    {
      name: "ZapMovies",
      link: "https://zapmovies.vercel.app/",
      images: [first, second, third, fourth, fifth, sixth, seventh],
    },
    {
      name: "SajiloYatra",
      link: "",
      images: [a, b, c, d, e, f, g],
    },
    {
      name: "Portfolio Website",
      link: "https://eanish.vercel.app/",
      images: [a1, a2, a3, a4, a5],
    },
    {
      name: "MovieMadHouse",
      link: "https://moviemadhouse.netlify.app/",
      images: [ma, mb, mc, md, me],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <section className="my-4">
      <h2 className="text-2xl md:text-4xl text-[#35d16e] text-center font-bold mb-10">
        {title}
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-xl text-green-400 text-center font-semibold mr-4">
              {project.name}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Live demo
            </a>
          </div>
          <Slider {...settings}>
            {project.images.map((image, imgIndex) => (
              <div key={imgIndex} className="p-2" data-aos="fade-up">
                <img
                  src={image}
                  alt={`slide-${imgIndex}`}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </section>
  );
};

export default Projects;
