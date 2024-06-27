import { useEffect } from "react";
import Div from "../Components/Div";
import Germany from "../assets/images/football/ger.png";
import al from "../assets/images/football/al.png";
import Austria from "../assets/images/football/aus.png";
import Belgium from "../assets/images/football/bel.png";
import cr from "../assets/images/football/cr.png";
import cz from "../assets/images/football/cz.png";
import Denmark from "../assets/images/football/den.png";
import England from "../assets/images/football/eng.png";
import France from "../assets/images/football/fra.png";
import Georgia from "../assets/images/football/geo.png";
import hun from "../assets/images/football/hun.png";
import Italy from "../assets/images/football/ita.png";
import Netherlands from "../assets/images/football/ned.png";
import pol from "../assets/images/football/pol.png";
import Portugal from "../assets/images/football/por.png";
import Romania from "../assets/images/football/rom.png";
import ser from "../assets/images/football/ser.png";
import Slovakia from "../assets/images/football/sloa.png";
import Slovenia from "../assets/images/football/sloe.png";
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

  const matches = [
    {
      startTime: "21:01",
      time: "9:45 PM",
      endTime: "11:45",
      startDate: "June 29, 2024",
      endDate: "June 29, 2024",
      photo1: Switzerland,
      team1: "Switzerland",
      photo2: Italy,
      team2: "Italy",
      match: "Round of 16",
    },
    {
      startTime: "00:01",
      time: "12:45 AM",
      endTime: "2:45",
      startDate: "June 30, 2024",
      endDate: "June 30, 2024",
      photo1: Germany,
      team1: "Germany",
      photo2: Denmark,
      team2: "Denmark",
      match: "Round of 16",
    },
    {
      startTime: "21:01",
      time: "9:45 PM",
      endTime: "11:45",
      startDate: "June 30, 2024",
      endDate: "June 30, 2024",
      photo1: England,
      team1: "England",
      photo2: Slovakia,
      team2: "Slovakia",
      match: "Round of 16",
    },
    {
      startTime: "00:01",
      time: "12:45 PM",
      endTime: "2:45",
      startDate: "July 1, 2024",
      endDate: "July 1, 2024",
      photo1: Spain,
      team1: "Spain",
      photo2: Georgia,
      team2: "Georgia",
      match: "Round of 16",
    },
    {
      startTime: "21:01",
      time: "9:45 PM",
      endTime: "11:45",
      startDate: "July 1, 2024",
      endDate: "July 1, 2024",
      photo1: France,
      team1: "France",
      photo2: Belgium,
      team2: "Belgium",
      match: "Round of 16",
    },
    {
      startTime: "00:01",
      time: "12:45 AM",
      endTime: "2:45",
      startDate: "July 2, 2024",
      endDate: "July 2, 2024",
      photo1: Portugal,
      team1: "Portugal",
      photo2: Slovenia,
      team2: "Slovenia",
      match: "Round of 16",
    },
    {
      startTime: "21:01",
      time: "9:45 PM",
      endTime: "11:45",
      startDate: "July 2, 2024",
      endDate: "July 2, 2024",
      photo1: Romania,
      team1: "Romania",
      photo2: Netherlands,
      team2: "Netherlands",
      match: "Round of 16",
    },
    {
      startTime: "00:01",
      time: "12:45 PM",
      endTime: "2:45",
      startDate: "July 3, 2024",
      endDate: "July 3, 2024",
      photo1: Austria,
      team1: "Austria",
      photo2: Turkiye,
      team2: "Turkiye",
      match: "Round of 16",
    },
  ];

  return (
    <section>
      <div className="min-h-screen">
        <div className="flex justify-center md:justify-end mt-5 items-center ">
          <Link to="/livematches" className="">
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
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-4 m-5">
          <p className="text-black dark:text-white font-bold text-base text-center p-2">
            Digital Millennium Copyright Act(DMCA)
          </p>
          <p className="text-black dark:text-white text-sm font-normal italic">
            This site only contains links and embeds to TV channels from 3rd
            party sites Which are freely available on all Internet. We are not
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
