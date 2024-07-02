import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logoo.png";
import euro from "../assets/images/euro.png";
import copa from "../assets/images/copalogo.png";
import bat from "../assets/images/bat.jpg";
import bowl from "../assets/images/bowl.png";

const LiveMatches = (props) => {
  return (
    <section className=" py-10">
      <h1 className="text-center text-4xl font-bold text-green-600 mb-8">
        Today Matches
      </h1>

      <div className="space-y-8">
        <NavLink to="/Cricketmatches">
          <div className=" dark:bg-slate-800 flex items-center justify-center transition-transform transform hover:scale-105">
            <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-6 m-5 rounded-xl shadow-xl w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 md:w-1/3">
                  <img
                    src={bat}
                    alt=""
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
                  />
                  <span className="text-lg md:text-2xl font-semibold text-white truncate">
                    {props.team1}
                  </span>
                </div>
                <div className="text-center mt-4 md:mt-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-white mb-2">
                    Cricket Matches
                  </span>
                  <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 text-sm md:text-base shadow-md">
                    Matches
                  </button>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
                  <span className="text-lg md:text-2xl font-semibold text-white truncate">
                    {props.team2}
                  </span>
                  <img
                    src={bowl}
                    alt=""
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
                    alt=""
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
                  />
                  <span className="text-lg md:text-2xl font-semibold text-gray-900 truncate">
                    {props.team1}
                  </span>
                </div>
                <div className="text-center mt-4 md:mt-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900 mb-2">
                    Euro Cup
                  </span>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-800 text-sm md:text-base shadow-md">
                    Matches
                  </button>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
                  <span className="text-lg md:text-2xl font-semibold text-gray-900 truncate">
                    {props.team2}
                  </span>
                  <img
                    src={euro}
                    alt=""
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/copa">
          <div className=" dark:bg-slate-800 flex items-center justify-center transition-transform transform hover:scale-105">
            <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-6 m-5 rounded-xl shadow-xl w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 md:w-1/3">
                  <img
                    src={copa}
                    alt=""
                    className="h-16 w-16 md:h-20 md:w-20 rounded-2xl shadow-md"
                  />
                  <span className="text-lg md:text-2xl font-semibold text-gray-900 truncate">
                    {props.team1}
                  </span>
                </div>
                <div className="text-center mt-4 md:mt-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-100 mb-2">
                    Copa America
                  </span>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-800 text-sm md:text-base shadow-md">
                    Matches
                  </button>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
                  <span className="text-lg md:text-2xl font-semibold text-gray-900 truncate">
                    {props.team2}
                  </span>
                  <img
                    src={copa}
                    alt=""
                    className="h-16 w-16 md:h-20 md:w-20 rounded-2xl shadow-md"
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
