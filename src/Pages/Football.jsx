import { useEffect } from "react";
import Div from "../Components/Div";
import Germany from "../assets/images/football/ger.png";
import Austria from "../assets/images/football/aus.png";
import England from "../assets/images/football/eng.png";
import France from "../assets/images/football/fra.png";
import Netherlands from "../assets/images/football/ned.png";
import Portugal from "../assets/images/football/por.png";
import Romania from "../assets/images/football/rom.png";
import Spain from "../assets/images/football/spa.png";
import Switzerland from "../assets/images/football/swi.png";
import Turkiye from "../assets/images/football/tur.png";
import { Link } from "react-router-dom";

const Football = ({ setProgress, title }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  const countryColors = {
    Romania: "#055c9d",
    Netherlands: "#21468B",
    Austria: "#ED2939",
    Turkiye: "#810017",
    Spain: "#C60B1E",
    Germany: "#191919",
    Portugal: "#006600",
    France: "#0055A4",
    England: "#999999",
    Switzerland: "#D52B1E",
  };

  const matches = [
    {
      startTime: "21:01",
      time: "9:45 PM",
      endTime: "23:45",
      startDate: "July 5, 2024",
      endDate: "July 5, 2024",
      photo1: Spain,
      team1: "Spain",
      photo2: Germany,
      team2: "Germany",
      match: "Quater-Final",
      leftDivColor: countryColors.Spain,
      rightDivColor: countryColors.Germany,
    },
    {
      startTime: "00:01",
      time: "12:45 AM",
      endTime: "2:45",
      startDate: "July 6, 2024",
      endDate: "July 6, 2024",
      photo1: Portugal,
      team1: "Portugal",
      photo2: France,
      team2: "France",
      match: "Quater-Final",
      leftDivColor: countryColors.Portugal,
      rightDivColor: countryColors.France,
    },
    {
      startTime: "21:01",
      time: "9:45 PM",
      endTime: "23:45",
      startDate: "July 6, 2024",
      endDate: "July 6, 2024",
      photo1: England,
      team1: "England",
      photo2: Switzerland,
      team2: "Switzerland",
      match: "Quater-Final",
      leftDivColor: countryColors.England,
      rightDivColor: countryColors.Switzerland,
    },
    {
      startTime: "00:01",
      time: "12:45 AM",
      endTime: "2:45",
      startDate: "July 7, 2024",
      endDate: "July 7, 2024",
      photo1: Netherlands,
      team1: "Netherlands",
      photo2: Turkiye,
      team2: "Turkiye",
      match: "Quater-Final",
      leftDivColor: countryColors.Netherlands,
      rightDivColor: countryColors.Turkiye,
    },
  ];

  return (
    <section>
      <div className="min-h-screen">
        <div className="flex justify-center md:justify-end mt-5 items-center">
          <Link to="/Cricketmatches">
            <div className="px-3 py-2 mr-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg">
              Cricket Matches
            </div>
          </Link>
          <Link to="/copa">
            <div className="px-3 py-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg">
              Copa Matches
            </div>
          </Link>
        </div>
        {matches.map((match, index) => (
          <Div
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
            leftDivColor={match.leftDivColor}
            rightDivColor={match.rightDivColor}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-4 m-5">
          <p className="text-black dark:text-white font-bold text-base text-center p-2">
            Digital Millennium Copyright Act (DMCA)
          </p>
          <p className="text-black dark:text-white text-sm font-normal italic">
            This site only contains links and embeds to TV channels from 3rd
            party sites which are freely available on all Internet. We are not
            affiliated in any way with the broadcasted channels nor responsible
            for their content. All content is copyright of their respective
            owners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Football;
