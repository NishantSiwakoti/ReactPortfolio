import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow dark:bg-gray-900 p-3">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <NavLink
            to="https://www.nishantshiwakoti.com.np/"
            className="hover:underline text-[#35d16e]"
          >
            Nishant Siwakoti
          </NavLink>
          . | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
