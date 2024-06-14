import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Div = (props) => {
  const [buttonText, setButtonText] = useState("");
  const [buttonStyle, setButtonStyle] = useState({
    padding: "8px 20px",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    backgroundColor: "#4F6F52", // Default green color
  });
  const [isDivVisible, setIsDivVisible] = useState(true);

  // Function to format the date string
  const formatDateString = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Function to update the button state
  const updateButtonState = () => {
    // Get current time
    const currentTime = new Date();

    // Parse start and end times from props
    const startTime = new Date(props.startDate + " " + props.startTime);
    const endTime = new Date(props.endDate + " " + props.endTime);

    // Adjust end time if it is on the next day
    if (endTime < startTime) {
      endTime.setDate(endTime.getDate() + 1);
    }

    // Check if the current time is before the start time
    const isBeforeStart = currentTime < startTime;

    // Check if the current time is after the end time
    const isAfterEnd = currentTime > endTime;

    // Determine if the match is today or tomorrow
    const startDate = formatDateString(startTime);
    const currentDate = formatDateString(currentTime);
    const tomorrowDate = new Date(currentTime);
    tomorrowDate.setDate(currentTime.getDate() + 1);
    const isToday = startDate === currentDate;
    const isTomorrow = startDate === formatDateString(tomorrowDate);

    // Set button text based on current time
    if (isBeforeStart) {
      if (isToday) {
        setButtonText("Today");
      } else if (isTomorrow) {
        setButtonText("Tomorrow");
      } else {
        setButtonText(startDate); // Show the start date if not today or tomorrow
      }
      setButtonStyle((prevState) => ({
        ...prevState,
        backgroundColor: "#4F6F52",
      }));
    } else if (isAfterEnd) {
      // Check if one hour has passed since the end time
      const oneHourAfterEnd = new Date(endTime);
      oneHourAfterEnd.setHours(endTime.getHours() + 1);
      if (currentTime > oneHourAfterEnd) {
        setIsDivVisible(false);
      } else {
        setButtonText("Ended");
        setButtonStyle((prevState) => ({
          ...prevState,
          backgroundColor: "#4f6f52",
        }));
      }
    } else {
      setButtonText("Live");
      setButtonStyle((prevState) => ({
        ...prevState,
        backgroundColor: "#FF0000",
      }));
    }
  };

  // Use effect to update the button state initially and then every minute
  useEffect(() => {
    updateButtonState();
    const interval = setInterval(updateButtonState, 60000); // Update every minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    isDivVisible && (
      <div className="bg-white dark:bg-slate-800 flex items-center justify-center">
        <div className="bg-[#e8dfca] p-6 m-5 rounded-lg shadow-2xl w-full max-w-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 md:w-1/3">
              <img
                src={props.photo1}
                alt="Team 1 Logo"
                className="h-20 w-20 md:h-24 md:w-24"
              />
              <span className="text-lg md:text-xl font-semibold text-[#1a4d2e] truncate">
                {props.team1}
              </span>
            </div>
            <div className="text-center mt-4 md:mt-0 md:w-1/3">
              <div>
                <span className="text-xl md:text-2xl font-bold text-[#1a4d2e]">
                  <h1>{props.match}</h1>
                </span>
              </div>
              <div className="text-[#1a4d2e] mb-2 text-base">{props.time}</div>
              <div className="text-white">
                {buttonText === "Live" ? (
                  <NavLink to="/footballive">
                    <button style={buttonStyle}>{buttonText}</button>
                  </NavLink>
                ) : (
                  <button
                    style={{ ...buttonStyle, cursor: "default" }}
                    disabled
                  >
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0 md:w-1/3 justify-end">
              <span className="text-lg md:text-xl font-semibold text-[#1a4d2e] truncate">
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
    )
  );
};

export default Div;
