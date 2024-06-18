import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logoo.png";
import euro from "../assets/images/euro.png";

const LiveMatches = (props) => {
  return (
    <section className=" py-10">
      <h1 className="text-center text-4xl font-bold text-green-600 mb-8">
        Today Matches
      </h1>

      <div className="space-y-8">
        <NavLink to="/livematches">
          <div className=" dark:bg-slate-800 flex items-center justify-center transition-transform transform hover:scale-105">
            <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-6 m-5 rounded-xl shadow-xl w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 md:w-1/3">
                  <img
                    src={logo}
                    alt="Team 1 Logo"
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
                  />
                  <span className="text-lg md:text-2xl font-semibold text-white truncate">
                    {props.team1}
                  </span>
                </div>
                <div className="text-center mt-4 md:mt-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-white mb-2">
                    T20 World Cup
                  </span>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-800 text-sm md:text-base shadow-md">
                    Matches
                  </button>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
                  <span className="text-lg md:text-2xl font-semibold text-white truncate">
                    {props.team2}
                  </span>
                  <img
                    src={logo}
                    alt="Team 2 Logo"
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/euro">
          <div className=" dark:bg-slate-800 flex items-center justify-center transition-transform transform hover:scale-105">
            <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 m-5 rounded-xl shadow-xl w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 md:w-1/3">
                  <img
                    src={euro}
                    alt="Team 1 Logo"
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
                  />
                  <span className="text-lg md:text-2xl font-semibold text-gray-900 truncate">
                    {props.team1}
                  </span>
                </div>
                <div className="text-center mt-4 md:mt-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900 mb-2">
                    Euro Cup 2024
                  </span>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-800 text-sm md:text-base shadow-md">
                    Matches
                  </button>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
                  <span className="text-lg md:text-2xl font-semibold text-gray-900 truncate">
                    {props.team2}
                  </span>
                  <img
                    src={euro}
                    alt="Team 2 Logo"
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default LiveMatches;
