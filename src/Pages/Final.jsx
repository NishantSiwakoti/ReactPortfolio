import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Divss from "../Components/Divss";
import ind from "../assets/images/countries/ind.png";
import sa from "../assets/images/countries/sa.png";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Final = ({ setProgress, title }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000); // Confetti for 10 seconds on page load
    }, 1000);
  }, [setProgress]);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  const matches = [
    {
      startTime: "8:00",
      time: "8:15 PM",
      endTime: "2:00",
      startDate: "June 29, 2024",
      endDate: "June 29, 2024",
      photo1: sa,
      team1: "South Africa",
      photo2: ind,
      team2: "India",
      match: "Final",
    },
  ];

  const handleSupport = (team) => {
    setSelectedTeam(team);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000); // Confetti for 10 seconds on button click
  };

  return (
    <section style={{ overflowX: "hidden", overflowY: "hidden" }}>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={1000} // Adjust number of pieces
          gravity={0.1} // Adjust gravity to make confetti fall faster
          recycle={false} // Do not recycle confetti pieces
        />
      )}
      <div className="min-h-screen">
        <div className="flex justify-center md:justify-end mt-5 items-center">
          <Link to="/euro">
            <div className="px-3 py-2 mr-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white rounded-lg">
              Euro Matches
            </div>
          </Link>
          <Link to="/copa">
            <div className="px-3 py-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg">
              Copa Matches
            </div>
          </Link>
        </div>
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
        <div className="flex justify-center mt-10">
          <h2 className="text-2xl mb-4">Who are you supporting?</h2>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className={`px-6 py-3 rounded-lg text-white font-bold transition duration-300 transform hover:scale-105 ${
              selectedTeam === "India"
                ? "bg-blue-800"
                : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
            }`}
            onClick={() => handleSupport("India")}
          >
            <div className="flex items-center">
              <img src={ind} alt="India" className="w-6 h-6 mr-2" />
              India
            </div>
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white font-bold transition duration-300 transform hover:scale-105 ${
              selectedTeam === "South Africa"
                ? "bg-green-800"
                : "bg-gradient-to-r from-green-500 via-green-600 to-green-700"
            }`}
            onClick={() => handleSupport("South Africa")}
          >
            <div className="flex items-center">
              <img src={sa} alt="South Africa" className="w-6 h-6 mr-2" />
              South Africa
            </div>
          </button>
        </div>
        {selectedTeam && (
          <div className="flex justify-center mt-5">
            <p className="text-xl">
              Let's go <span className="font-bold">{selectedTeam}!</span> 🎉
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Final;
