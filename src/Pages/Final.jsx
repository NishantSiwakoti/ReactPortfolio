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
      startTime: "19:15",
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
      startTime: "21:15",
      endTime: "3:00",
      startDate: "June 9, 2024",
      endDate: "June 10, 2024",
      photo1: oman,
      team1: "Oman",
      photo2: sco,
      team2: "Scotland",
      match: "Match 20",
    },
    {
      startTime: "19:15",
      endTime: "1:00",
      startDate: "June 10, 2024",
      endDate: "June 11, 2024",
      photo1: sa,
      team1: "South Africa",
      photo2: ban,
      team2: "Bangladesh",
      match: "Match 21",
    },
    {
      startTime: "19:15",
      endTime: "1:00",
      startDate: "June 11, 2024",
      endDate: "June 12, 2024",
      photo1: pak,
      team1: "Pakistan",
      photo2: can,
      team2: "Canada",
      match: "Match 22",
    },
    {
      startTime: "4:00",
      endTime: "11:00",
      startDate: "June 12, 2024",
      endDate: "June 12, 2024",
      photo1: nep,
      team1: "Nepal",
      photo2: sri,
      team2: "SriLanka",
      match: "Match 23",
    },

    {
      startTime: "6:15",
      endTime: "12:00",
      startDate: "June 12, 2024",
      endDate: "June 12, 2024",
      photo1: aus,
      team1: "Australia",
      photo2: nam,
      team2: "Namibia",
      match: "Match 24",
    },
    {
      startTime: "20:00",
      endTime: "2:00",
      startDate: "June 12, 2024",
      endDate: "June 13, 2024",
      photo1: ind,
      team1: "India",
      photo2: usa,
      team2: "USA",
      match: "Match 25",
    },
    {
      startTime: "6:00",
      endTime: "11:00",
      startDate: "June 13, 2024",
      endDate: "June 13, 2024",
      photo1: wi,
      team1: "West Indies",
      photo2: nz,
      team2: "New Zealand",
      match: "Match 13",
    },
    {
      startTime: "19:00",
      endTime: "1:00",
      startDate: "June 13, 2024",
      endDate: "June 14, 2024",
      photo1: ban,
      team1: "Bangladesh",
      photo2: ned,
      team2: "Netherlands",
      match: "Match 27",
    },
    {
      startTime: "23:15",
      endTime: "5:00",
      startDate: "June 13, 2024",
      endDate: "June 14, 2024",
      photo1: eng,
      team1: "England",
      photo2: oman,
      team2: "Oman",
      match: "Match 28",
    },
    {
      startTime: "6:15",
      endTime: "11:00",
      startDate: "June 14, 2024",
      endDate: "June 14, 2024",
      photo1: afg,
      team1: "Afghanistan",
      photo2: png,
      team2: "PNG",
      match: "Match 29",
    },
    {
      startTime: "20:15",
      endTime: "1:00",
      startDate: "June 14, 2024",
      endDate: "June 15, 2024",
      photo1: usa,
      team1: "USA",
      photo2: ire,
      team2: "Ireland",
      match: "Match 30",
    },
    {
      startTime: "4:50",
      time: "5:15",
      endTime: "11:00",
      startDate: "June 15, 2024",
      endDate: "June 15, 2024",
      photo1: nep,
      team1: "Nepal",
      photo2: sa,
      team2: "South Africa",
      match: "Match 31",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "11:00",
      startDate: "June 15, 2024",
      endDate: "June 15, 2024",
      photo1: nz,
      team1: "New Zeland",
      photo2: ug,
      team2: "Uganda",
      match: "Match 32",
    },
    {
      startTime: "20:00",
      time: "20:15",
      endTime: "1:00",
      startDate: "June 15, 2024",
      endDate: "June 16, 2024",
      photo1: ind,
      team1: "India",
      photo2: can,
      team2: "Canada",
      match: "Match 33",
    },
    {
      startTime: "22:00",
      time: "22:45",
      endTime: "3:00",
      startDate: "June 15, 2024",
      endDate: "June 16, 2024",
      photo1: nam,
      team1: "Namibia",
      photo2: eng,
      team2: "England",
      match: "Match 34",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "11:00",
      startDate: "June 16, 2024",
      endDate: "June 16, 2024",
      photo1: aus,
      team1: "Australia",
      photo2: sco,
      team2: "Scotland",
      match: "Match 35",
    },
    {
      startTime: "20:00",
      time: "20:15",
      endTime: "1:00",
      startDate: "June 16, 2024",
      endDate: "June 17, 2024",
      photo1: pak,
      team1: "Pakistan",
      photo2: ire,
      team2: "Ireland",
      match: "Match 36",
    },
    {
      startTime: "4:50",
      time: "5:15",
      endTime: "11:00",
      startDate: "June 17, 2024",
      endDate: "June 17, 2024",
      photo1: ban,
      team1: "Bangaldesh",
      photo2: nep,
      team2: "Nepal",
      match: "Match 37",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "11:00",
      startDate: "June 17, 2024",
      endDate: "June 17, 2024",
      photo1: sri,
      team1: "SriLanka",
      photo2: ned,
      team2: "Netherlands",
      match: "Match 38",
    },
    {
      startTime: "20:00",
      time: "20:15",
      endTime: "1:00",
      startDate: "June 17, 2024",
      endDate: "June 18, 2024",
      photo1: nz,
      team1: "New Zealand",
      photo2: png,
      team2: "Canada",
      match: "Match 39",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "11:00",
      startDate: "June 18, 2024",
      endDate: "June 18, 2024",
      photo1: wi,
      team1: "West Indies",
      photo2: afg,
      team2: "Afghanistan",
      match: "Match 40",
    },
  ];

  return (
    <section>
      <div className="min-h-screen">
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
