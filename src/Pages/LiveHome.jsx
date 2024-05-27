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
  }, [title]);

  useEffect(() => {
    const matchStartTime = new Date();
    matchStartTime.setDate(matchStartTime.getDate()); // Set to tomorrow

    matchStartTime.setHours(18, 0, 0); // Match starts at 6 PM
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
        WorldCup Live Coming Soon.......
      </h2>
      <h1></h1>

      {/* <Divss
        photo1={srh}
        team1="SRH"
        photo2={kkr}
        team2="KKR"
        match="Final"
        status={handleMatchStatus()}
        onClick={() =>
          handleLiveClick({
            team1: "KKR",
            photo1: kkr,
            team2: "SRH",
            photo2: srh,
          })
        }
      /> */}
    </section>
  );
};

export default LiveHome;
