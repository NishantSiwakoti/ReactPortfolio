import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logoo.png";
import euro from "../assets/images/euro.png";

const LiveMatches = (props) => {
  return (
    <section>
      <NavLink to="/livematches">
        <div className="bg-white dark:bg-slate-800 flex items-center justify-center">
          <div className="bg-[#35d16e] p-6 m-5 rounded-lg shadow-2xl w-full max-w-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 md:w-1/3">
                <img
                  src={logo}
                  alt="Team 1 Logo"
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                />
                <span className="text-lg md:text-xl font-semibold text-white truncate">
                  {props.team1}
                </span>
              </div>
              <div className="text-center mt-4 md:mt-0 flex flex-col ">
                <span className="text-xl font-bold text-white">
                  T20 WorldCup
                </span>
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 text-sm md:text-base">
                  Matches
                </button>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0 md:w-1/3 justify-end">
                <span className="text-lg md:text-xl font-semibold text-white truncate">
                  {props.team2}
                </span>
                <img
                  src={logo}
                  alt="Team 2 Logo"
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </NavLink>

      <div className="bg-white dark:bg-slate-800 flex items-center justify-center">
        <div className="bg-[#E8DFCA] p-6 m-5 rounded-lg shadow-2xl w-full max-w-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 md:w-1/3">
              <img
                src={euro}
                alt="Team 1 Logo"
                className="h-12 w-12 md:h-16 md:w-16 rounded-full"
              />
              <span className="text-lg md:text-xl font-semibold text-white truncate">
                {props.team1}
              </span>
            </div>
            <div className="text-center mt-4 md:mt-0 ">
              <span className="text-xl font-bold text-[#1A4D2E] flex flex-col">
                Euro Cup 2024
              </span>
              <button className="mt-2 px-4 py-2 bg-[#4F6F52] text-white rounded-md cursor-not-allowed text-sm md:text-base">
                Coming Soon....
              </button>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0 md:w-1/3 justify-end">
              <span className="text-lg md:text-xl font-semibold text-white truncate">
                {props.team2}
              </span>
              <img
                src={euro}
                alt="Team 2 Logo"
                className="h-12 w-12 md:h-16 md:w-16 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;
