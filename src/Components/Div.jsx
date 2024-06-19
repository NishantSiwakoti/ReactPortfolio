import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Div = (props) => {
  const [buttonText, setButtonText] = useState("");
  const [buttonStyle, setButtonStyle] = useState({});
  const [isDivVisible, setIsDivVisible] = useState(true);
  const [countdown, setCountdown] = useState("");

  const formatDateString = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const padWithZero = (number) => {
    return number.toString().padStart(2, "0");
  };

  const updateButtonState = () => {
    const currentTime = new Date();
    const startTime = new Date(props.startDate + " " + props.startTime);
    const endTime = new Date(props.endDate + " " + props.endTime);

    if (endTime < startTime) {
      endTime.setDate(endTime.getDate() + 1);
    }

    const isBeforeStart = currentTime < startTime;
    const isAfterEnd = currentTime > endTime;

    const startDate = formatDateString(startTime);
    const currentDate = formatDateString(currentTime);
    const tomorrowDate = new Date(currentTime);
    tomorrowDate.setDate(currentTime.getDate() + 1);
    const isToday = startDate === currentDate;
    const isTomorrow = startDate === formatDateString(tomorrowDate);

    if (isBeforeStart) {
      if (isToday) {
        const timeDifference = startTime - currentTime;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setCountdown(
          `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(
            seconds
          )}`
        );
        setButtonText(""); // Clear button text when countdown is shown
      } else {
        setButtonText(isTomorrow ? "Tomorrow" : startDate);
      }
      setButtonStyle({ backgroundColor: "#4F6F52" });
    } else if (isAfterEnd) {
      const oneHourAfterEnd = new Date(endTime);
      oneHourAfterEnd.setHours(endTime.getHours() + 1);
      if (currentTime > oneHourAfterEnd) {
        setIsDivVisible(false);
      } else {
        setButtonText("Ended");
        setButtonStyle({ backgroundColor: "#4F6F52" });
      }
    } else {
      setButtonText("Live");
      setButtonStyle({ backgroundColor: "#FF0000" });
    }
  };

  useEffect(() => {
    updateButtonState();
    const interval = setInterval(updateButtonState, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    isDivVisible && (
      <div className="flex items-center justify-center py-8">
        <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl transition-transform transform hover:scale-105">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 flex flex-col items-center p-4">
              <img
                src={props.photo1}
                alt="Team 1 Logo"
                className="h-20 w-20 md:h-28 md:w-28 object-contain mb-2"
              />
              <span className="text-lg md:text-xl font-semibold text-white truncate">
                {props.team1}
              </span>
            </div>
            <div className="md:w-1/3 text-center p-4">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                {props.match}
              </h1>
              <div className="text-white mb-2">{props.time}</div>
              <div>
                {buttonText === "Live" ? (
                  <NavLink to="/footballive">
                    <button
                      style={buttonStyle}
                      className="px-6 py-2 rounded-full text-lg font-medium text-white transition-colors duration-300"
                    >
                      {buttonText}
                    </button>
                  </NavLink>
                ) : countdown ? (
                  <button
                    style={{ ...buttonStyle, cursor: "default" }}
                    disabled
                    className="px-6 py-2 rounded-full text-lg font-medium text-white"
                  >
                    {countdown}
                  </button>
                ) : (
                  <button
                    style={{ ...buttonStyle, cursor: "default" }}
                    disabled
                    className="px-6 py-2 rounded-full text-lg font-medium text-white"
                  >
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center p-4">
              <img
                src={props.photo2}
                alt="Team 2 Logo"
                className="h-20 w-20 md:h-28 md:w-28 object-contain mb-2"
              />
              <span className="text-lg md:text-xl font-semibold text-white truncate">
                {props.team2}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Div;
