import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [remainingTime, setRemainingTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${title}`;
  });

  useEffect(() => {
    const matchStartTime = new Date();
    matchStartTime.setHours(18, 0, 0);
    const currentTime = new Date();
    const timeDiff = matchStartTime - currentTime;

    if (timeDiff > 0) {
      const timer = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = matchStartTime - currentTime;
        if (timeDiff <= 0) {
          clearInterval(timer);
          setRemainingTime(0);
        } else {
          setRemainingTime(timeDiff);
        }
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setRemainingTime(0);
    }
  }, []);

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handleMatchStatus = () => {
    if (remainingTime === null) {
      return "Loading...";
    } else if (remainingTime === 0) {
      return "Live";
    } else {
      return formatTime(remainingTime);
    }
  };

  const handleLiveClick = () => {
    navigate("/live", {
      state: {
        match: { team1: "KKR", photo1: kkr, team2: "SRH", photo2: srh },
      },
    });
  };

  return (
    <section className="min-h-screen">
      <h2 className="font-bold text-2xl md:text-4xl text-orange-400 text-center pt-2">
        IPL Live Streaming Free
      </h2>

      <Divss
        photo1={kkr}
        team1="KKR"
        photo2={srh}
        team2="SRH"
        match="Qualifier 1"
        status={handleMatchStatus("May 21, 2024")}
        onClick={() =>
          handleLiveClick({
            team1: "KKR",
            photo1: kkr,
            team2: "SRH",
            photo2: srh,
          })
        }
      />
      {/* <Divss
        photo1={rcb}
        team1="RCB"
        photo2={rr}
        team2="RR"
        match="Qualifier 2"
        status={handleMatchStatus("May 22, 2024")}
        onClick={() =>
          handleLiveClick({
            team1: "RCB",
            photo1: rcb,
            team2: "RR",
            photo2: rr,
          })
        }
      /> */}
    </section>
  );
};

export default LiveHome;
