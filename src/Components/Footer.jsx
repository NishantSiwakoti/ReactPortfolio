import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 p-3">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <NavLink
            to="https://www.nishantshiwakoti.com.np/"
            className="hover:underline text-[#35d16e]"
          >
            Nishant Siwakoti
          </NavLink>
          . | All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="" className="hover:underline me-4 md:me-6">
              LinkedIn
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="hover:underline me-4 md:me-6">
              Github
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="hover:underline me-4 md:me-6">
              Twitter
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="hover:underline">
              Instagram
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
