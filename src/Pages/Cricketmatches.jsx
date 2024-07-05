import { useEffect } from "react";
import India from "../assets/images/countries/ind.png";
import Zimbabwe from "../assets/images/countries/zim.png";
import { Link } from "react-router-dom";
import CricketDiv from "../Components/CricketDiv";

const Cricketmatches = ({ setProgress, title }) => {
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
    India: "#4a89ef",
    Zimbabwe: "#30b05f",
  };

  const matches = [
    {
      startTime: "16:01",
      time: "4:45 PM",
      endTime: "21:00",
      startDate: "July 6, 2024",
      endDate: "July 6, 2024",
      photo1: India,
      team1: "India",
      photo2: Zimbabwe,
      team2: "Zimbabwe",
      match: "",
      leftDivColor: countryColors.India,
      rightDivColor: countryColors.Zimbabwe,
    },
  ];

  return (
    <section>
      <div className="min-h-screen">
        <div className="flex justify-center md:justify-end mt-5 items-center">
          <Link to="/euro">
            <div className="px-3 py-2 mr-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg">
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
          <CricketDiv
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
      {/* <div className="flex justify-center">
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
      </div> */}
    </section>
  );
};

export default Cricketmatches;
