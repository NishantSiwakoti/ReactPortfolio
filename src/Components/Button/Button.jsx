const Button = (props) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r mt-10 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2"
    >
      {props.name}
    </button>
  );
};

export default Button;
