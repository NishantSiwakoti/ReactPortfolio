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
      startTime: "8:00",
      time: "8:15",
      endTime: "1:00",
      startDate: "June 19, 2024",
      endDate: "June 20, 2024",
      photo1: usa,
      team1: "USA",
      photo2: sa,
      team2: "South Africa",
      match: "Super Eight",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "10:00",
      startDate: "June 20, 2024",
      endDate: "June 20, 2024",
      photo1: eng,
      team1: "England",
      photo2: wi,
      team2: "West Indies",
      match: "Super Eight",
    },
    {
      startTime: "8:00",
      time: "8:15",
      endTime: "1:00",
      startDate: "June 20, 2024",
      endDate: "June 21, 2024",
      photo1: ind,
      team1: "India",
      photo2: afg,
      team2: "Afghanistan",
      match: "Super Eight",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "11:00",
      startDate: "June 21, 2024",
      endDate: "June 21, 2024",
      photo1: aus,
      team1: "Australia",
      photo2: ban,
      team2: "Bangladesh",
      match: "Super Eight",
    },
    {
      startTime: "20:00",
      time: "20:15",
      endTime: "1:00",
      startDate: "June 21, 2024",
      endDate: "June 22, 2024",
      photo1: eng,
      team1: "England",
      photo2: sa,
      team2: "South Africa",
      match: "Super Eight",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "11:00",
      startDate: "June 22, 2024",
      endDate: "June 22, 2024",
      photo1: wi,
      team1: "West Indies",
      photo2: usa,
      team2: "USA",
      match: "Super Eight",
    },
    {
      startTime: "8:00",
      time: "8:15",
      endTime: "1:00",
      startDate: "June 22, 2024",
      endDate: "June 23, 2024",
      photo1: ind,
      team1: "India",
      photo2: ban,
      team2: "Bangladesh",
      match: "Super Eight",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "10:00",
      startDate: "June 23, 2024",
      endDate: "June 23, 2024",
      photo1: aus,
      team1: "Australia",
      photo2: afg,
      team2: "Afghanistan",
      match: "Super Eight",
    },
    {
      startTime: "8:00",
      time: "8:15",
      endTime: "1:00",
      startDate: "June 23, 2024",
      endDate: "June 24, 2024",
      photo1: usa,
      team1: "USA",
      photo2: eng,
      team2: "England",
      match: "Super Eight",
    },
    {
      startTime: "6:00",
      time: "6:15",
      endTime: "10:00",
      startDate: "June 24, 2024",
      endDate: "June 24, 2024",
      photo1: wi,
      team1: "West Indies",
      photo2: sa,
      team2: "South Africa",
      match: "Super Eight",
    },
    {
      startTime: "8:00",
      time: "8:15",
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
      time: "6:15",
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
