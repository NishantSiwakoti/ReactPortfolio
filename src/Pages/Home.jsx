import { TypeAnimation } from "react-type-animation";
import photo from "../assets/images/animation.png";

const Home = () => {
  return (
    <section className="md:flex items-center">
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
              <button
                type="button"
                className="text-white bg-gradient-to-r mt-10 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Hire me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img
          className="md:pt-[]"
          src={photo}
          alt="Your Image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Home;
