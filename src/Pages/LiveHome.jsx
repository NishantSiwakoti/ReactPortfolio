import React, { useState, useEffect } from "react";
import Divss from "../Components/Divss";
import kkr from "../assets/KKR.png";
import rcb from "../assets/RCB.png";
import mi from "../assets/MI.png";
import csk from "../assets/CSK.png";
import gt from "../assets/GT.png";
import rr from "../assets/RR.png";
import pbks from "../assets/PBKS.png";
import srh from "../assets/SRH.png";
import lsg from "../assets/LSG.png";
import dc from "../assets/DC.png";

const LiveHome = ({ setProgress, title }) => {
  const [endedMatches, setEndedMatches] = useState([]);

  useEffect(() => {
    document.title = `${title}`;
  });

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

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
    <>
      <h2 className="font-bold text-2xl md:text-4xl text-orange-400 text-center pt-2">
        IPL Live Streaming Free
      </h2>

      <Divss
        photo1={srh}
        team1="SRH"
        photo2={gt}
        team2="GT"
        status={handleMatchStatus("May 16, 2024")}
      />
      <Divss
        photo1={mi}
        team1="MI"
        photo2={lsg}
        team2="LSG"
        status={handleMatchStatus("May 17, 2024")}
      />
      <Divss
        photo1={rcb}
        team1="RCB"
        photo2={csk}
        team2="CSK"
        status={handleMatchStatus("May 18, 2024")}
      />
      <Divss
        photo1={srh}
        team1="SRH"
        photo2={pbks}
        team2="PBKS"
        status={handleMatchStatus("May 19, 2024")}
      />
      <Divss
        photo1={rr}
        team1="RR"
        photo2={kkr}
        team2="KKR"
        status={handleMatchStatus("May 19, 2024")}
      />
    </>
  );
};

export default LiveHome;
