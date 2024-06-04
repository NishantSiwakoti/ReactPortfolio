import React from "react";
import page from "../assets/images/page.png";
import Button from "../Components/Button/Button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center  h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">
        Oops! <span className="text-orange-400">Page Not Found</span>
      </h1>
      <p className="text-lg mb-4 dark:text-white">
        Sorry, the page you are looking for does not exist.
      </p>
      <img
        src={page}
        alt="Page Not Found"
        className="max-w-48 md:max-w-96 h-auto mt-4 rounded-lg"
      />
      <NavLink to="/">
        <Button name="Back to Home" />
      </NavLink>
    </div>
  );
};

export default NotFound;
