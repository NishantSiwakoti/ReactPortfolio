const Button = (props) => {
  return (
    <button
      type="button"
      className="text-white mt-5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {props.name}
    </button>
  );
};

export default Button;
