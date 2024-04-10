import { TypeAnimation } from "react-type-animation";
import photo from "../assets/images/animation.png";
import Button from "../Components/Button";
import profile from "../assets/images/ProfilePic.png";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="md:flex items-center ">
        <div className="flex-1 pl-5">
          <h1 className="text-orange-400 text-3xl text-center md:text-left md:ml-[100px] ">
            Hi,
          </h1>
          <div className="flex flex-col md:ml-[100px]">
            <div className="mt-2 text-center md:text-left">
              <TypeAnimation
                sequence={[
                  "I'm Nishant",
                  1000,
                  "I'm Web Dev",
                  1000,
                  "I'm Frontend Dev",
                  1000,
                  "I'm Backend Dev",
                  1000,
                ]}
                className="text-orange-500 font-bold text-[30px] md:text-5xl"
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
              <div>
                <Button name="Hire Me" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img
            className="md:pt-[]"
            src={photo}
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>
      {/* About me Section*/}
      <section>
        <h2 className="font-bold text-2xl md:text-4xl text-orange-400 text-center pt-2">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center mt-5">
            <img
              src={profile}
              alt="Profile Pic"
              className="w-full md:ml-[50px] lg:ml-[px] max-w-[200px] md:max-w-[300px]"
              style={{ height: "auto" }}
            />
          </div>
          <div className="flex-1 ">
            <p className="dark:text-white leading-relaxed m-2 md:ml-[100px] md:mt-[50px] text-center md:text-justify lg:mr-[100px]">
              Hi, I'm a professional front-end developer with over two years of
              experience. Specializing in creating visually appealing and
              responsive websites using the latest web technologies like{" "}
              <span className="text-orange-400 font-bold">HTML</span>,
              <span className="text-orange-400 font-bold"> CSS</span>,
              <span className="text-orange-400 font-bold"> JS</span>,
              <span className="text-orange-400 font-bold"> React Js</span>,
              <span className="text-orange-400 font-bold"> Tailwind</span>,
              <span className="text-orange-400 font-bold"> Material UI</span>,
              <span className="text-orange-400 font-bold"> Ant Design</span>.
              Proficient in various front-end development tools. Committed to
              delivering high-quality projects on time Let's bring your project
              to life together Prices are negotiable and totally depend on type
              of work!
            </p>
            <div className="flex justify-center items-center md:ml-[100px] md:flex md:justify-start">
              <Button name="Download CV" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
