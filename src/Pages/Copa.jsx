import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Argentina from "../assets/images/copa/ar.png";
import Peru from "../assets/images/copa/pe.png";
import Chile from "../assets/images/copa/ch.png";
import Canada from "../assets/images/copa/ca.png";
import Mexico from "../assets/images/copa/me.png";
import Ecuador from "../assets/images/copa/ec.png";
import Venezuela from "../assets/images/copa/ve.png";
import Jamaica from "../assets/images/copa/ja.png";
import US from "../assets/images/copa/us.png";
import Uruguay from "../assets/images/copa/ur.png";
import Panama from "../assets/images/copa/pa.png";
import Bolivia from "../assets/images/copa/bo.png";
import Brazil from "../assets/images/copa/br.png";
import Colombia from "../assets/images/copa/co.png";
import Paraguay from "../assets/images/copa/par.png";
import Costa_Rica from "../assets/images/copa/cos.png";
import Divv from "../Components/Divv";
const Copa = ({ setProgress, title }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  const countryColors = {
    Argentina: "rgba(116, 172, 223, 0.9)",
    Peru: "rgba(217, 16, 35, 0.9)",
    Chile: "rgba(0, 51, 160, 0.9)",
    Canada: "rgba(255, 0, 0, 0.9)",
    Mexico: "rgba(0, 104, 71, 0.9)",
    Ecuador: "rgba(255, 209, 0, 0.9)",
    Venezuela: "rgba(244, 196, 48, 0.9)",
    Jamaica: "rgba(255, 215, 0, 0.9)",
    US: "rgba(178, 34, 52, 0.9)",
    Uruguay: "rgba(0, 92, 169, 0.9)",
    Panama: "rgba(255, 0, 0, 0.9)",
    Bolivia: "rgba(255, 215, 0, 0.9)",
    Brazil: "rgba(0, 151, 57, 0.9)",
    Colombia: "#debd24",
    Paraguay: "rgba(213, 43, 30, 0.9)",
    Costa_Rica: "rgba(0, 43, 127, 0.9)",
  };

  const matches = [
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "July 5, 2024",
      endDate: "July 5, 2024",
      photo1: Argentina,
      team1: "Argentina",
      photo2: Ecuador,
      team2: "Ecuador",
      match: "Quater-Final",
      leftDivColor: countryColors.Argentina,
      rightDivColor: countryColors.Ecuador,
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "July 5, 2024",
      endDate: "July 5, 2024",
      photo1: Venezuela,
      team1: "Venezuela",
      photo2: Canada,
      team2: "Canada",
      match: "Quater-Final",
      leftDivColor: countryColors.Venezuela,
      rightDivColor: countryColors.Canada,
    },
    {
      startTime: "3:00",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "July 7, 2024",
      endDate: "July 7, 2024",
      photo1: Colombia,
      team1: "Colombia",
      photo2: Panama,
      team2: "Panama",
      match: "Quater-Final",
      leftDivColor: countryColors.Colombia,
      rightDivColor: countryColors.Panama,
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "July 7, 2024",
      endDate: "July 7, 2024",
      photo1: Uruguay,
      team1: "Uruguay",
      photo2: Brazil,
      team2: "Brazil",
      match: "Quater-Final",
      leftDivColor: countryColors.Uruguay,
      rightDivColor: countryColors.Brazil,
    },
  ];

  return (
    <section>
      <div className="min-h-screen">
        <div className="flex justify-center md:justify-end mt-5 items-center ">
          <Link to="/Cricketmatches" className="">
            <div className="px-3 py-2 mr-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg">
              Cricket Matches
            </div>
          </Link>
          <Link to="/euro">
            <div className="px-3 py-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white rounded-lg">
              Euro Matches
            </div>
          </Link>
        </div>
        {matches.map((match, index) => (
          <Divv
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
            leftDivColor={match.leftDivColor}
            rightDivColor={match.rightDivColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Copa;
