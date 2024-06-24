import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Divss from "../Components/Divss";
import usa from "../assets/images/countries/usa.png";
import ind from "../assets/images/countries/ind.png";
import ban from "../assets/images/countries/ban.png";
import wi from "../assets/images/countries/wi.png";
import sa from "../assets/images/countries/sa.png";
import aus from "../assets/images/countries/aus.png";
import eng from "../assets/images/countries/eng.png";
import afg from "../assets/images/countries/afg.png";

const Final = ({ setProgress, title }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  const matches = [
    {
      startTime: "20:00",
      time: "8:15 PM",
      endTime: "1:00",
      startDate: "June 24, 2024",
      endDate: "June 25, 2024",
      photo1: ind,
      team1: "India",
      photo2: aus,
      team2: "Australia",
      match: "Super Eight",
    },
    {
      startTime: "6:00",
      time: "6:15 AM",
      endTime: "10:00",
      startDate: "June 25, 2024",
      endDate: "June 25, 2024",
      photo1: ban,
      team1: "Bangladesh",
      photo2: afg,
      team2: "Afghanistan",
      match: "Super Eight",
    },
  ];

  return (
    <section>
      <div className="min-h-screen">
        <div className="flex justify-center md:justify-end mt-5 items-center ">
          <Link to="/euro" className="">
            <div className="px-3 py-2 mr-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white rounded-lg">
              Euro Matches
            </div>
          </Link>
          <Link to="/copa">
            <div className="px-3 py-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg">
              Copa Matches
            </div>
          </Link>
        </div>
        {/* Map over matches array and render Divss component for each match */}
        {matches.map((match, index) => (
          <Divss
            key={index}
            startTime={match.startTime}
            endTime={match.endTime}
            startDate={match.startDate}
            time={match.time}
            endDate={match.endDate}
            photo1={match.photo1}
            photo2={match.photo2}
            match={match.match}
            team1={match.team1}
            team2={match.team2}
          />
        ))}
      </div>
    </section>
  );
};

export default Final;
