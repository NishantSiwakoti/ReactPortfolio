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

  const formatDate = (dateStr) => {
    const matchDate = new Date(dateStr);
    const today = new Date();
    const currentTime = today.getHours() * 60 + today.getMinutes();
    const matchTimeMorningStart = 6 * 60; // 6:00 AM in minutes
    const matchTimeMorningEnd = 11 * 60; // 11:00 AM in minutes
    const matchTimeEveningStart = 20 * 60 + 15; // 8:15 PM in minutes
    const matchTimeEveningEnd = 24 * 60; // 12:00 AM midnight in minutes

    if (matchDate.toDateString() === today.toDateString()) {
      if (currentTime < matchTimeMorningStart) {
        const countdownTime = matchTimeMorningStart - currentTime;
        return `Countdown: ${Math.floor(countdownTime / 60)}h ${
          countdownTime % 60
        }m`;
      } else if (
        currentTime >= matchTimeMorningStart &&
        currentTime < matchTimeMorningEnd
      ) {
        return "Live";
      } else if (currentTime < matchTimeEveningStart) {
        return "Ended";
      } else if (
        currentTime >= matchTimeEveningStart &&
        currentTime < matchTimeEveningEnd
      ) {
        return "Live";
      } else {
        return "Ended";
      }
    } else if (matchDate > today) {
      const diffDays = Math.ceil((matchDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        if (currentTime < matchTimeMorningStart) {
          const countdownTime = matchTimeMorningStart + (24 * 60 - currentTime);
          return `Countdown: ${Math.floor(countdownTime / 60)}h ${
            countdownTime % 60
          }m`;
        } else if (currentTime < matchTimeEveningStart) {
          const countdownTime = matchTimeEveningStart + (24 * 60 - currentTime);
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

  const handleMatchStatus = (dateStr) => {
    const status = formatDate(dateStr);
    if (status === "Ended" && !endedMatches.includes(dateStr)) {
      setEndedMatches((prevEndedMatches) => [...prevEndedMatches, dateStr]);
    }
    return status;
  };

  return (
    <section className="min-h-screen">
      <h2 className="font-bold text-2xl md:text-4xl text-[#35d16e] text-center pt-2">
        World Cup Matches
      </h2>

      <Div
        photo1={usa}
        team1="USA"
        photo2={can}
        team2="Canada"
        date="2024/06/02"
        startTime={6} // Live stream starts at 6 am
        time="6:00 AM"
        match="Match 1"
      />
      <Div
        photo1={wi}
        team1="West Indies"
        photo2={png}
        team2="PNG"
        date="2024-06-02"
        startTime={19} // Live stream starts at 6 am
        time="7:00 PM"
        match="Match 2"
      />
      <Div
        photo1={nam}
        team1="Namibia"
        photo2={oman}
        team2="Oman"
        date="2024-06-03"
        startTime={5} // Live stream starts at 6 am
        time="5:00 AM"
        match="Match 3 "
      />

      <Div
        photo1={sri}
        team1="Sri Lanka"
        photo2={sa}
        team2="South Africa"
        date="2024-06-03"
        startTime={19} // Live stream starts at 6 am
        time="7:00 PM"
        match="Match 4"
      />
      <Div
        photo1={afg}
        team1="Afghanistan"
        photo2={ug}
        team2="Uganda"
        date="2024-06-04"
        startTime={5} // Live stream starts at 6 am
        time="5:00 AM"
        match="Match 5"
      />
      <Div
        photo1={eng}
        team1="England"
        photo2={sco}
        team2="Scotland"
        date="2024-06-04"
        startTime={19} // Live stream starts at 6 am
        time="8:15 PM"
        match="Match 6"
      />
      <Div
        photo1={nep}
        team1="Nepal"
        photo2={ned}
        team2="Netherland"
        date="2024-06-04"
        startTime={20} // Live stream starts at 6 am
        time="9:15 PM"
        match="Match 7"
      />
      <Div
        photo1={ind}
        team1="India"
        photo2={ire}
        team2="Ireland"
        date="2024-06-05"
        startTime={19} // Live stream starts at 6 am
        time="8:15 PM"
        match="Match 8"
      />
      <Div
        photo1={png}
        team1="Papua New Guinea"
        photo2={ug}
        team2="Uganda"
        date="2024-06-06"
        startTime={5} // Live stream starts at 6 am
        time="5:15 AM"
        match="Match 9"
      />
      <Div
        photo1={aus}
        team1="Australia"
        photo2={oman}
        team2="Oman"
        date="2024-06-06"
        startTime={6} // Live stream starts at 6 am
        time="6:15 AM"
        match="Match 10"
      />
      <Div
        photo1={usa}
        team1="USA"
        photo2={pak}
        team2="Pakistan"
        date="2024-06-06"
        startTime={20} // Live stream starts at 6 am
        time="9:15 PM"
        match="Match 11"
      />
    </section>
  );
};

export default LiveHome;
