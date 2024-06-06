import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const getDateLabel = (providedDate, startTime, endDate, endTime) => {
  const today = new Date();
  const provided = new Date(providedDate);

  // Calculate end time
  const endDateTime = new Date(endDate);
  endDateTime.setHours(endTime, 0, 0, 0); // Set end time

  // Check if the provided date is today
  if (
    provided.getDate() === today.getDate() &&
    provided.getMonth() === today.getMonth() &&
    provided.getFullYear() === today.getFullYear()
  ) {
    const currentHour = today.getHours();
    if (currentHour >= startTime && today < endDateTime) {
      return "Live Now";
    } else if (today >= endDateTime) {
      return "Ended";
    } else if (currentHour < startTime) {
      return startTime * 60 * 60 * 1000; // Return start time in milliseconds for the countdown timer
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
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(null);
  const dateLabel = getDateLabel(
    props.date,
    props.startTime,
    props.endDate,
    props.endTime
  );

  useEffect(() => {
    const startTime = new Date(props.date);
    startTime.setHours(props.startTime); // Set start time of the match
    const endTime = new Date(props.endDate);
    endTime.setHours(props.endTime); // Set end time of the match

    const timer = setTimeout(() => {
      // Check if current time is after end time
      if (new Date() > endTime) {
        setIsMatchOver(true); // Set match over flag to true
      }
    }, endTime - new Date());

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [props.date, props.startTime, props.endDate, props.endTime]);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(loadingTimer); // Clean up the timer on component unmount
  }, []);

  useEffect(() => {
    if (typeof dateLabel === "number") {
      const updateCountdown = () => {
        const now = new Date();
        const startTime = new Date(props.date);
        startTime.setHours(props.startTime);
        const timeDiff = startTime - now;

        if (timeDiff <= 0) {
          setCountdown(null);
        } else {
          const hours = String(
            Math.floor(timeDiff / (1000 * 60 * 60))
          ).padStart(2, "0");
          const minutes = String(
            Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
          ).padStart(2, "0");
          const seconds = String(
            Math.floor((timeDiff % (1000 * 60)) / 1000)
          ).padStart(2, "0");

          setCountdown(`${hours}:${minutes}:${seconds}`);
        }
      };

      const interval = setInterval(updateCountdown, 1000);
      updateCountdown(); // Initial call

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [dateLabel, props.date, props.startTime]);

  const isLive = dateLabel === "Live Now";

  let buttonStyle = {
    padding: "8px 20px",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
  };

  // Apply color based on dateLabel
  if (dateLabel === "Live Now") {
    buttonStyle.backgroundColor = "#D10000"; // Red
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
              className="h-20 w-20 md:h-24 md:w-24"
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
              {isLoading ? (
                <button style={buttonStyle} disabled>
                  Loading...
                </button>
              ) : countdown ? (
                <button style={buttonStyle} disabled>
                  {countdown}
                </button>
              ) : isLive ? (
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
              className="h-20 w-20 md:h-24 md:w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div;
