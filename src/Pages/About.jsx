import profile from "../assets/images/ProfilePic.png";

const About = () => {
  return (
    <section className="">
      <h2 className="text-3xl font-bold  text-center mb-2 text-orange-400 mt-5">
        About Me
      </h2>
      <div className="flex flex-col  md:flex-row items-center">
        <div className="flex-1">
          <img
            src={profile}
            alt="Profile Pic"
            className="w-full md:ml-[150px] lg:ml-[250px]"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
        <div className="flex-1 ">
          <p className="dark:text-white leading-relaxed m-2  text-center md:text-justify lg:mr-[50px]">
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
            delivering high-quality projects on time Let's bring your project to
            life together Prices are negotiable and totally depend on type of
            work!
          </p>
          <div className="flex justify-center items-center md:flex md:justify-start">
            <button
              type="button"
              className="text-white mt-5 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
