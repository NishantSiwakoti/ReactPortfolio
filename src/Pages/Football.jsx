import { useEffect } from "react";
import Div from "../Components/Div";
import ger from "../assets/images/football/ger.png";
import al from "../assets/images/football/al.png";
import aus from "../assets/images/football/aus.png";
import bel from "../assets/images/football/bel.png";
import cr from "../assets/images/football/cr.png";
import cz from "../assets/images/football/cz.png";
import den from "../assets/images/football/den.png";
import eng from "../assets/images/football/eng.png";
import fra from "../assets/images/football/fra.png";
import geo from "../assets/images/football/geo.png";
import hun from "../assets/images/football/hun.png";
import ita from "../assets/images/football/ita.png";
import ned from "../assets/images/football/ned.png";
import pol from "../assets/images/football/pol.png";
import por from "../assets/images/football/por.png";
import rom from "../assets/images/football/rom.png";
import ser from "../assets/images/football/ser.png";
import sloa from "../assets/images/football/sloa.png";
import sloe from "../assets/images/football/sloe.png";
import spa from "../assets/images/football/spa.png";
import swi from "../assets/images/football/swi.png";
import tur from "../assets/images/football/tur.png";
import ukr from "../assets/images/football/ukr.png";
import sco from "../assets/images/football/sco.png";

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
      startTime: "00:01",
      time: "12:45 ",
      endTime: "3:00",
      startDate: "June 15, 2024",
      endDate: "June 15, 2024",
      photo1: ger,
      team1: "Germany",
      photo2: sco,
      team2: "Scotland",
      match: "Group Stage",
    },
    {
      startTime: "18:00",
      time: "18:45",
      endTime: "21:00",
      startDate: "June 15, 2024",
      endDate: "June 15, 2024",
      photo1: hun,
      team1: "Hungry",
      photo2: swi,
      team2: "Switzerland",
      match: "Group Stage",
    },
    {
      startTime: "21:00",
      time: "21:45",
      endTime: "00:45",
      startDate: "June 15, 2024",
      endDate: "June 16, 2024",
      photo1: spa,
      team1: "Spain",
      photo2: cr,
      team2: "Crotia",
      match: "Group Stage",
    },
    {
      startTime: "00:01",
      time: "12:45",
      endTime: "3:00",
      startDate: "June 16, 2024",
      endDate: "June 16, 2024",
      photo1: ita,
      team1: "Italy",
      photo2: al,
      team2: "Albania",
      match: "Group Stage",
    },
    {
      startTime: "18:00",
      time: "18:45",
      endTime: "21:00",
      startDate: "June 16, 2024",
      endDate: "June 16, 2024",
      photo1: pol,
      team1: "Poland",
      photo2: ned,
      team2: "Netherlands",
      match: "Group Stage",
    },
    {
      startTime: "21:00",
      time: "21:45",
      endTime: "00:45",
      startDate: "June 16, 2024",
      endDate: "June 17, 2024",
      photo1: sloe,
      team1: "Slovenia",
      photo2: den,
      team2: "Denmark",
      match: "Group Stage",
    },
    {
      startTime: "00:01",
      time: "12:45",
      endTime: "3:00",
      startDate: "June 17, 2024",
      endDate: "June 17, 2024",
      photo1: ser,
      team1: "Serbia",
      photo2: eng,
      team2: "England",
      match: "Group Stage",
    },
    {
      startTime: "18:00",
      time: "18:45",
      endTime: "22:00",
      startDate: "June 17, 2024",
      endDate: "June 17, 2024",
      photo1: rom,
      team1: "Romania",
      photo2: ukr,
      team2: "Ukraine",
      match: "Group Stage",
    },
    {
      startTime: "21:00",
      time: "21:45",
      endTime: "00:45",
      startDate: "June 17, 2024",
      endDate: "June 18, 2024",
      photo1: bel,
      team1: "Belgium",
      photo2: sloa,
      team2: "Slovakia",
      match: "Group Stage",
    },
    {
      startTime: "00:00",
      time: "12:45",
      endTime: "3:45",
      startDate: "June 18, 2024",
      endDate: "June 18, 2024",
      photo1: aus,
      team1: "Austria",
      photo2: fra,
      team2: "France",
      match: "Group Stage",
    },
    {
      startTime: "21:00",
      time: "21:45",
      endTime: "00:45",
      startDate: "June 18, 2024",
      endDate: "June 19, 2024",
      photo1: tur,
      team1: "Turkiye",
      photo2: geo,
      team2: "Georgia",
      match: "Group Stage",
    },
    {
      startTime: "00:01",
      time: "12:45",
      endTime: "3:45",
      startDate: "June 19, 2024",
      endDate: "June 19, 2024",
      photo1: por,
      team1: "Portugal",
      photo2: cz,
      team2: "Czechia",
      match: "Group Stage",
    },
  ];

  return (
    <section>
      <div className="min-h-screen">
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
