import React from "react";
import { NavLink } from "react-router-dom";

const Divss = (props) => {
  const isClickable = props.status === "Live";
  const isEnded = props.status === "Ended";
  const isTomorrowOrFuture = !isClickable && !isEnded;
  const isToday = props.status === "Today";

  return (
    <div className="bg-white dark:bg-slate-800 flex items-center justify-center">
      <style>
        {`
          .marquee {
            overflow: hidden;
            position: relative;
            white-space: nowrap;
          }
          .marquee div {
            display: inline-block;
            padding-left: 40%;
            animation: marquee 6s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(40%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div className="bg-[#35d16e] p-6 m-5 rounded-lg shadow-2xl w-full max-w-xl">
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
                <h1>{props.match}</h1>
              </span>
            </div>
            {isClickable ? (
              <NavLink to="/livestream">
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 text-sm md:text-base">
                  {props.status}
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
                  <div className="marquee mt-2  px-0.5 py-2 bg-blue-500 text-white rounded-md text-sm md:text-base">
                    <div>Live stream will start from 6:00pm.</div>
                  </div>
                )}
              </div>
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
    </div>
  );
};

export default Divss;
