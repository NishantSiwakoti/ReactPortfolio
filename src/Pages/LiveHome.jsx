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

  const formatDate = (startDateStr, endDateStr, startTime, endTime) => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const today = new Date();
    const currentTime = today.getHours() * 60 + today.getMinutes();
    const matchStartTime = startTime * 60; // convert start time to minutes
    const matchEndTime = endTime * 60; // convert end time to minutes

    if (startDate.toDateString() === today.toDateString()) {
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
    } else if (startDate > today) {
      const diffDays = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        if (currentTime < matchStartTime) {
          const countdownTime = matchStartTime + (24 * 60 - currentTime);
          return `Countdown: ${Math.floor(countdownTime / 60)}h ${
            countdownTime % 60
          }m`;
        }
      }
      return "Tomorrow";
    } else if (endDate >= today) {
      if (
        endDate.toDateString() === today.toDateString() &&
        currentTime >= matchEndTime
      ) {
        return "Ended";
      }
      return "Live";
    } else {
      return "Ended";
    }
  };

  const handleMatchStatus = (startDateStr, endDateStr, startTime, endTime) => {
    const status = formatDate(startDateStr, endDateStr, startTime, endTime);
    if (status === "Ended" && !endedMatches.includes(startDateStr)) {
      setEndedMatches((prevEndedMatches) => [
        ...prevEndedMatches,
        startDateStr,
      ]);
    }
    return status;
  };

  const matches = [
    {
      photo1: usa,
      team1: "USA",
      photo2: pak,
      team2: "Pakistan",
      startDate: "2024-06-06",
      endDate: "2024-06-07",
      startTime: 20,
      endTime: 2,
      time: "9:15 PM",
      match: "Match 11",
    },
    {
      photo1: nam,
      team1: "Namibia",
      photo2: sco,
      team2: "Scotland",
      startDate: "2024-06-07",
      endDate: "2024-06-07",
      startTime: 24,
      endTime: 5,
      time: "12:45 AM",
      match: "Match 12",
    },
    {
      photo1: can,
      team1: "Canada",
      photo2: ire,
      team2: "Ireland",
      startDate: "2024-06-07",
      endDate: "2024-06-07",
      startTime: 20,
      endTime: 2,
      time: "8:15 PM",
      match: "Match 13",
    },
    {
      photo1: nz,
      team1: "New Zealand",
      photo2: afg,
      team2: "Afghanistan",
      startDate: "2024-06-08",
      endDate: "2024-06-08",
      startTime: 5,
      endTime: 10,
      time: "5:15 AM",
      match: "Match 14",
    },
    {
      photo1: sri,
      team1: "Sri Lanka",
      photo2: ban,
      team2: "Bangladesh",
      startDate: "2024-06-08",
      endDate: "2024-06-08",
      startTime: 6,
      endTime: 11,
      time: "6:15 AM",
      match: "Match 15",
    },
    {
      photo1: ned,
      team1: "Netherlands",
      photo2: sa,
      team2: "South Africa",
      startDate: "2024-06-08",
      endDate: "2024-06-08",
      startTime: 20,
      endTime: 2,
      time: "8:15 PM",
      match: "Match 16",
    },
    {
      photo1: aus,
      team1: "Australia",
      photo2: eng,
      team2: "England",
      startDate: "2024-06-08",
      endDate: "2024-06-08",
      startTime: 22,
      endTime: 3,
      time: "10:45 PM",
      match: "Match 17",
    },
    {
      photo1: wi,
      team1: "West Indies",
      photo2: ug,
      team2: "Uganda",
      startDate: "2024-06-09",
      endDate: "2024-06-09",
      startTime: 6,
      endTime: 11,
      time: "6:15 AM",
      match: "Match 18",
    },
    {
      photo1: ind,
      team1: "India",
      photo2: pak,
      team2: "Pakistan",
      startDate: "2024-06-09",
      endDate: "2024-06-09",
      startTime: 20,
      endTime: 2,
      time: "8:15 PM",
      match: "Match 19",
    },
    {
      photo1: oman,
      team1: "Oman",
      photo2: sco,
      team2: "Scotland",
      startDate: "2024-06-09",
      endDate: "2024-06-09",
      startTime: 22,
      endTime: 3,
      time: "10:45 PM",
      match: "Match 20",
    },
    {
      photo1: sa,
      team1: "South Africa",
      photo2: ban,
      team2: "Bangladesh",
      startDate: "2024-06-10",
      endDate: "2024-06-10",
      startTime: 20,
      endTime: 2,
      time: "8:15 PM",
      match: "Match 21",
    },
    {
      photo1: pak,
      team1: "Pakistan",
      photo2: can,
      team2: "Canada",
      startDate: "2024-06-11",
      endDate: "2024-06-11",
      startTime: 20,
      endTime: 2,
      time: "8:15 PM",
      match: "Match 22",
    },
    {
      photo1: sri,
      team1: "Sri Lanka",
      photo2: nep,
      team2: "Nepal",
      startDate: "2024-06-12",
      endDate: "2024-06-12",
      startTime: 5,
      endTime: 10,
      time: "5:15 AM",
      match: "Match 23",
    },
    {
      photo1: aus,
      team1: "Australia",
      photo2: nam,
      team2: "Namibia",
      startDate: "2024-06-12",
      endDate: "2024-06-12",
      startTime: 6,
      endTime: 11,
      time: "6:15 AM",
      match: "Match 24",
    },
    {
      photo1: usa,
      team1: "USA",
      photo2: ind,
      team2: "India",
      startDate: "2024-06-12",
      endDate: "2024-06-12",
      startTime: 20,
      endTime: 2,
      time: "8:15 PM",
      match: "Match 25",
    },
  ];

  return (
    <section className="min-h-screen">
      <h2 className="font-bold text-2xl md:text-4xl text-[#35d16e] text-center pt-2">
        World Cup Matches
      </h2>

      {matches.map((match, index) => {
        const status = handleMatchStatus(
          match.startDate,
          match.endDate,
          match.startTime,
          match.endTime
        );
        if (status === "Ended") return null;
        return (
          <Div
            key={index}
            photo1={match.photo1}
            team1={match.team1}
            photo2={match.photo2}
            team2={match.team2}
            date={match.startDate}
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
