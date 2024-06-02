import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const getDateLabel = (providedDate, startTime) => {
  const today = new Date();
  const provided = new Date(providedDate);

  // Calculate end time
  const endTime = new Date(provided);
  endTime.setHours(startTime + 5); // Assuming each match lasts for 5 hours

  // Check if the provided date is today
  if (
    provided.getDate() === today.getDate() &&
    provided.getMonth() === today.getMonth() &&
    provided.getFullYear() === today.getFullYear()
  ) {
    const currentHour = today.getHours();
    if (currentHour >= startTime && today < endTime) {
      return "Live Now";
    } else if (today >= endTime) {
      return "Ended";
    } else {
      return "Today";
    }
  }

  // Check if the provided date is tomorrow
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  if (
    provided.getDate() === tomorrow.getDate() &&
    provided.getMonth() === tomorrow.getMonth() &&
    provided.getFullYear() === tomorrow.getFullYear()
  ) {
    return "Tomorrow";
  }

  // If not today or tomorrow, return the date without the weekday
  return provided.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};

const Div = (props) => {
  const [isMatchOver, setIsMatchOver] = useState(false);
  const dateLabel = getDateLabel(props.date, props.startTime);

  useEffect(() => {
    const startTime = new Date(props.date);
    startTime.setHours(props.startTime); // Set start time of the match
    const endTime = new Date(
      startTime.getTime() + 8 * 60 * 60 * 1000 + 10 * 60 * 1000
    ); // Calculate end time

    const timer = setTimeout(() => {
      // Check if current time is after end time
      if (new Date() > endTime) {
        setIsMatchOver(true); // Set match over flag to true
      }
    }, endTime - new Date());

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [props.date, props.startTime]);

  const isLive = dateLabel === "Live Now";

  let buttonStyle = {
    padding: "8px 20px",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
  };

  // Apply color based on dateLabel
  if (dateLabel === "Live Now") {
    buttonStyle.backgroundColor = "#FF0000"; // Red
  } else if (dateLabel === "Ended" || isMatchOver) {
    buttonStyle.backgroundColor = "#808080"; // Gray
  } else {
    buttonStyle.backgroundColor = "#008000"; // Green
  }

  if (isMatchOver) {
    return null; // Render nothing if match is over
  }

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
            <div className="text-white mb-2">{props.time}</div>

            <div className="text-white">
              {isLive ? (
                <NavLink to="/livestream">
                  <button
                    className={`bg-green-800 cursor-pointer`}
                    style={buttonStyle}
                  >
                    {dateLabel}
                  </button>
                </NavLink>
              ) : (
                <button
                  className={`bg-green-800 ${
                    isLive ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  style={buttonStyle}
                  disabled={!isLive}
                >
                  {dateLabel}
                </button>
              )}
            </div>
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

export default Div;
