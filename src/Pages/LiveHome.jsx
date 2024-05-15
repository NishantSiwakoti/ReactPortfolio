import React, { useEffect } from "react";
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

const Main = ({ setProgress, title }) => {
  useEffect(() => {
    document.title = `${title} | Nishant`;
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
      const startLiveTime = 19 * 60;
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
    } else if (matchDate.toDateString() === yesterday.toDateString()) {
      return "Ended";
    } else {
      return dateStr;
    }
  };

  return (
    <>
      <h2 className="font-bold text-2xl md:text-4xl text-orange-400 text-center pt-2">
        IPL Live Streaming Free
      </h2>
      <Divss
        photo1={dc}
        team1="DC"
        photo2={lsg}
        team2="LSG"
        status={formatDate("May 14, 2024")}
      />
      <Divss
        photo1={rr}
        team1="RR"
        photo2={pbks}
        team2="PBKS"
        status={formatDate("May 15, 2024")}
      />
      <Divss
        photo1={srh}
        team1="SRH"
        photo2={gt}
        team2="GT"
        status={formatDate("May 16, 2024")}
      />
      <Divss
        photo1={mi}
        team1="MI"
        photo2={lsg}
        team2="LSG"
        status={formatDate("May 17, 2024")}
      />
      <Divss
        photo1={rcb}
        team1="RCB"
        photo2={csk}
        team2="CSK"
        status={formatDate("May 18, 2024")}
      />
    </>
  );
};

export default Main;
