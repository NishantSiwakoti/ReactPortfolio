import React, { useState, useEffect } from "react";
import Aos from "aos";
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
import Div from "../Components/Div";

const LiveHome = ({ setProgress, title }) => {
  const [endedMatches, setEndedMatches] = useState([]);

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  const formatDate = (dateStr, startTime) => {
    const matchDate = new Date(dateStr);
    const today = new Date();
    const currentTime = today.getHours() * 60 + today.getMinutes();
    const matchStartTime = startTime * 60; // convert start time to minutes
    const matchEndTime = matchStartTime + 5 * 60; // 5 hours from start time

    if (matchDate.toDateString() === today.toDateString()) {
      if (currentTime < matchStartTime) {
        const countdownTime = matchStartTime - currentTime;
        return `Countdown: ${Math.floor(countdownTime / 60)}h ${
          countdownTime % 60
        }m`;
      } else if (currentTime >= matchStartTime && currentTime < matchEndTime) {
        return "Live";
      } else {
        return "Ended";
      }
    } else if (matchDate > today) {
      const diffDays = Math.ceil((matchDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        if (currentTime < matchStartTime) {
          const countdownTime = matchStartTime + (24 * 60 - currentTime);
          return `Countdown: ${Math.floor(countdownTime / 60)}h ${
            countdownTime % 60
          }m`;
        }
      }
      return "Tomorrow";
    } else {
      return "Ended";
    }
  };

  const handleMatchStatus = (dateStr, startTime) => {
    const status = formatDate(dateStr, startTime);
    if (status === "Ended" && !endedMatches.includes(dateStr)) {
      setEndedMatches((prevEndedMatches) => [...prevEndedMatches, dateStr]);
    }
    return status;
  };

  const matches = [
    {
      photo1: usa,
      team1: "USA",
      photo2: can,
      team2: "Canada",
      date: "2024/06/02",
      startTime: 6,
      time: "6:00 AM",
      match: "Match 1",
    },
    {
      photo1: wi,
      team1: "West Indies",
      photo2: png,
      team2: "PNG",
      date: "2024-06-02",
      startTime: 19,
      time: "7:00 PM",
      match: "Match 2",
    },
    {
      photo1: nam,
      team1: "Namibia",
      photo2: oman,
      team2: "Oman",
      date: "2024-06-03",
      startTime: 5,
      time: "5:00 AM",
      match: "Match 3",
    },
    {
      photo1: sri,
      team1: "Sri Lanka",
      photo2: sa,
      team2: "South Africa",
      date: "2024-06-03",
      startTime: 19,
      time: "7:00 PM",
      match: "Match 4",
    },
    {
      photo1: afg,
      team1: "Afghanistan",
      photo2: ug,
      team2: "Uganda",
      date: "2024-06-04",
      startTime: 5,
      time: "5:00 AM",
      match: "Match 5",
    },
    {
      photo1: eng,
      team1: "England",
      photo2: sco,
      team2: "Scotland",
      date: "2024-06-04",
      startTime: 19,
      time: "8:15 PM",
      match: "Match 6",
    },
    {
      photo1: nep,
      team1: "Nepal",
      photo2: ned,
      team2: "Netherland",
      date: "2024-06-04",
      startTime: 20,
      time: "9:15 PM",
      match: "Match 7",
    },
    {
      photo1: ind,
      team1: "India",
      photo2: ire,
      team2: "Ireland",
      date: "2024-06-05",
      startTime: 19,
      time: "8:15 PM",
      match: "Match 8",
    },
    {
      photo1: png,
      team1: "Papua New Guinea",
      photo2: ug,
      team2: "Uganda",
      date: "2024-06-06",
      startTime: 5,
      time: "5:15 AM",
      match: "Match 9",
    },
    {
      photo1: aus,
      team1: "Australia",
      photo2: oman,
      team2: "Oman",
      date: "2024-06-06",
      startTime: 6,
      time: "6:15 AM",
      match: "Match 10",
    },
    {
      photo1: usa,
      team1: "USA",
      photo2: pak,
      team2: "Pakistan",
      date: "2024-06-06",
      startTime: 20,
      time: "9:15 PM",
      match: "Match 11",
    },
  ];

  return (
    <section className="min-h-screen">
      <h2 className="font-bold text-2xl md:text-4xl text-[#35d16e] text-center pt-2">
        World Cup Matches
      </h2>

      {matches.map((match, index) => {
        const status = handleMatchStatus(match.date, match.startTime);
        if (status === "Ended") return null;
        return (
          <Div
            key={index}
            photo1={match.photo1}
            team1={match.team1}
            photo2={match.photo2}
            team2={match.team2}
            date={match.date}
            startTime={match.startTime}
            time={match.time}
            match={match.match}
          />
        );
      })}

      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-4 m-5">
          <p className="text-black dark:text-white font-bold text-base text-center p-2">
            Digital Millennium Copyright Act(DMCA)
          </p>
          <p className="text-black dark:text-white text-sm font-normal italic">
            This website does not host any media content on its own site. This
            website does not create or host or share any video. All video
            streams are embedded here from external websites that are available
            freely online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveHome;
