import photo from "../assets/images/nishant.png";
const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="my-5">
        <h1 className="text-5xl font-bold">Hi, I'm Nishant</h1>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Pink to Orange
        </button>
      </div>
      <div className="my-5 md:max-w-xl">
        <img className="rounded-lg max-h-full" src={photo} />
      </div>
    </section>
  );
};

export default Home;
