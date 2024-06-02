import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment"; // Make sure to install moment.js

const Divss = (props) => {
  const isClickable = props.status === "Live";
  const isEnded = props.status === "Ended";
  const isTomorrowOrFuture = !isClickable && !isEnded;
  const isToday = props.status === "Today";

  const matchTime = moment(`${props.date} ${props.time}`, "YYYY-MM-DD HH:mm A"); // Combine date and time
  const now = moment();

  const isLiveNow = now.isSame(matchTime, "minute") && isToday; // Check if the match is live now

  return (
    <div className="bg-white dark:bg-slate-800 flex items-center justify-center">
      <div className="bg-[#35d16e] p-6 m-5 rounded-lg shadow-2xl w-full max-w-xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 md:w-1/3">
            <img
              src={props.photo1}
              alt="Team 1 Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full"
            />
            <span className="text-lg md:text-xl font-semibold text-white truncate">
              {props.team1}
            </span>
          </div>
          <div className="text-center mt-4 md:mt-0 md:w-1/3">
            <div>
              <span className="text-xl md:text-2xl font-bold text-white">
                <h1>{props.match}</h1>
              </span>
            </div>
            <div className="text-white">{props.time}</div>
            {isClickable || isLiveNow ? (
              <NavLink to="/livestream">
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 text-sm md:text-base">
                  Live
                </button>
              </NavLink>
            ) : (
              <div>
                <button
                  className={`mt-2 px-4 py-2 ${
                    isEnded
                      ? "bg-gray-500"
                      : isTomorrowOrFuture
                      ? "bg-[#0A6847]"
                      : "bg-yellow-500"
                  } text-white rounded-md cursor-not-allowed text-sm md:text-base`}
                  disabled
                >
                  {props.status}
                </button>
                {isToday && (
                  <div className="mt-2 px-0.5 py-2 bg-blue-500 text-white rounded-md text-sm md:text-base">
                    Live stream will start from {props.time}.
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0 md:w-1/3 justify-end">
            <span className="text-lg md:text-xl font-semibold text-white truncate">
              {props.team2}
            </span>
            <img
              src={props.photo2}
              alt="Team 2 Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divss;
