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
import pn from "../assets/images/countries/pn.png";

const LiveHome = ({ setProgress, title }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  useEffect(() => {
    document.title = `${title}`;
  });
  const formatDate = (dateStr) => {
    const matchDate = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (matchDate.toDateString() === today.toDateString()) {
      const currentTime = today.getHours() * 60 + today.getMinutes();
      const startLiveTime = 18 * 60;
      const endLiveTime = 24 * 60;

      if (currentTime >= startLiveTime && currentTime < endLiveTime) {
        return "Live";
      } else if (currentTime >= endLiveTime || today.getHours() < 7) {
        return "Ended";
      } else {
        return "Today";
      }
    } else if (matchDate.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else if (matchDate < today) {
      return "Ended";
    } else if (matchDate.toDateString() === yesterday.toDateString()) {
      return "Ended";
    } else {
      return dateStr;
    }
  };

  const handleMatchStatus = (dateStr) => {
    const status = formatDate(dateStr);
    if (status === "Ended" && endedMatches.length < 2) {
      setEndedMatches([...endedMatches, dateStr]);
    }
    return status;
  };

  return (
    <section className="min-h-screen">
      <h2 className="font-bold text-2xl md:text-4xl text-[#35d16e] text-center pt-2">
        World Cup Matches
      </h2>
      <Divss
        photo1={usa}
        team1="USA"
        photo2={can}
        team2="Canada"
        status={handleMatchStatus("Jun 2, 2024")}
        time="6:15 AM"
      />
      <Divss
        photo1={wi}
        team1="West Indies"
        photo2={pn}
        team2="PNG"
        status={handleMatchStatus("Jun 2, 2024")}
        time="8:15 PM"
      />
      <Divss
        photo1={nam}
        team1="Namibia"
        photo2={oman}
        team2="Oman"
        status={handleMatchStatus("Jun 3, 2024")}
        time="6:15 AM"
      />
      <Divss
        photo1={sri}
        team1="Sri Lanka"
        photo2={sa}
        team2="South Africa"
        status={handleMatchStatus("Jun 3, 2024")}
        time="8:15 PM"
      />
    </section>
  );
};

export default LiveHome;
