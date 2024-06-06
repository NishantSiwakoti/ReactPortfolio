import React from "react";
import Divss from "../Components/Divss";
import nep from "../assets/images/countries/nep.png";
import ned from "../assets/images/countries/ned.png";
import usa from "../assets/images/countries/usa.png";
import png from "../assets/images/countries/pn.png";
import ind from "../assets/images/countries/ind.png";
import pak from "../assets/images/countries/pak.png";
import ban from "../assets/images/countries/ban.png";
import sri from "../assets/images/countries/sri.png";
import ire from "../assets/images/countries/ire.png";
import oman from "../assets/images/countries/oman.png";
import wi from "../assets/images/countries/wi.png";
import sa from "../assets/images/countries/sa.png";
import aus from "../assets/images/countries/aus.png";
import nz from "../assets/images/countries/nz.png";
import ug from "../assets/images/countries/ug.png";
import eng from "../assets/images/countries/eng.png";
import afg from "../assets/images/countries/afg.png";
import can from "../assets/images/countries/can.png";
import nam from "../assets/images/countries/nam.png";
import sco from "../assets/images/countries/sco.png";
import { useEffect } from "react";

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
      startTime: "21:15",
      endTime: "3:00",
      startDate: "June 6, 2024",
      endDate: "June 7, 2024",
      photo1: usa,
      team1: "USA",
      photo2: pak,
      team2: "Pakistan",
      match: "Match 11",
    },
    {
      startTime: "00:45",
      endTime: "5:00",
      startDate: "June 7, 2024",
      endDate: "June 7, 2024",
      photo1: nam,
      team1: "Namibia",
      photo2: sco,
      team2: "Scotland",
      match: "Match 12",
    },
    {
      startTime: "20:15",
      endTime: "1:00",
      startDate: "June 7, 2024",
      endDate: "June 8, 2024",
      photo1: can,
      team1: "Canada",
      photo2: ire,
      team2: "Ireland",
      match: "Match 13",
    },
    {
      startTime: "5:15",
      endTime: "11:00",
      startDate: "June 8, 2024",
      endDate: "June 8, 2024",
      photo1: nz,
      team1: "New Zealand",
      photo2: afg,
      team2: "Afghanistan",
      match: "Match 14",
    },
    {
      startTime: "6:15",
      endTime: "12:00",
      startDate: "June 8, 2024",
      endDate: "June 8, 2024",
      photo1: ban,
      team1: "Bangladesh",
      photo2: sri,
      team2: "Srilanka",
      match: "Match 15",
    },
    {
      startTime: "20:15",
      endTime: "1:00",
      startDate: "June 8, 2024",
      endDate: "June 8, 2024",
      photo1: ned,
      team1: "Netherlands",
      photo2: sa,
      team2: "South Africa",
      match: "Match 16",
    },
    {
      startTime: "10:45",
      endTime: "4:00",
      startDate: "June 8, 2024",
      endDate: "June 9, 2024",
      photo1: aus,
      team1: "Australia",
      photo2: eng,
      team2: "England",
      match: "Match 17",
    },
    {
      startTime: "6:15",
      endTime: "11:00",
      startDate: "June 9, 2024",
      endDate: "June 9, 2024",
      photo1: wi,
      team1: "West Indies",
      photo2: ug,
      team2: "Uganda",
      match: "Match 18",
    },
    {
      startTime: "20:15",
      endTime: "2:00",
      startDate: "June 9, 2024",
      endDate: "June 10, 2024",
      photo1: pak,
      team1: "Pakistan",
      photo2: ind,
      team2: "India",
      match: "Match 19",
    },
    {
      startTime: "22:15",
      endTime: "3:00",
      startDate: "June 9, 2024",
      endDate: "June 10, 2024",
      photo1: oman,
      team1: "Oman",
      photo2: sco,
      team2: "Scotland",
      match: "Match 20",
    },
  ];

  return (
    <div>
      {/* Map over matches array and render Divss component for each match */}
      {matches.map((match, index) => (
        <Divss
          key={index}
          startTime={match.startTime}
          endTime={match.endTime}
          startDate={match.startDate}
          endDate={match.endDate}
          photo1={match.photo1}
          photo2={match.photo2}
          match={match.match}
          team1={match.team1}
          team2={match.team2}
        />
      ))}
    </div>
  );
};

export default Final;
