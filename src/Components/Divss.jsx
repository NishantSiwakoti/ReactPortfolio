import React from "react";
import { NavLink } from "react-router-dom";

const Divss = (props) => {
  const isClickable = props.status === "Today";
  const isEnded = props.status === "Ended";
  const isTomorrowOrFuture = !isClickable && !isEnded;

  return (
    <body className="bg-white dark:bg-slate-800 flex items-center justify-center">
      <div className="bg-orange-400 p-6 m-5 rounded-lg shadow-2xl w-full max-w-xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={props.photo1}
              alt="Team 1 Logo"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <span className="text-lg md:text-xl font-semibold text-white">
              {props.team1}
            </span>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <div>
              <span className="text-xl md:text-2xl font-bold text-white">
                VS
              </span>
            </div>
            {isClickable ? (
              <NavLink to="/live">
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 text-sm md:text-base">
                  {props.status}
                </button>
              </NavLink>
            ) : (
              <button
                className={`mt-2 px-4 py-2 ${
                  isEnded
                    ? "bg-gray-500"
                    : isTomorrowOrFuture
                    ? "bg-green-500"
                    : ""
                } text-white rounded-md cursor-not-allowed text-sm md:text-base`}
                disabled
              >
                {props.status}
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-lg md:text-xl font-semibold text-white">
              {props.team2}
            </span>
            <img
              src={props.photo2}
              alt="Team 2 Logo"
              className="h-12 w-12 md:h-16 md:w-16"
            />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Divss;
