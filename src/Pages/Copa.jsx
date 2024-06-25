import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Argentina from "../assets/images/copa/ar.png";
import Peru from "../assets/images/copa/pe.png";
import Chile from "../assets/images/copa/ch.png";
import Canada from "../assets/images/copa/ca.png";
import Mexico from "../assets/images/copa/me.png";
import Ecuador from "../assets/images/copa/ec.png";
import Venezuela from "../assets/images/copa/ve.png";
import Jamaica from "../assets/images/copa/ja.png";
import US from "../assets/images/copa/us.png";
import Uruguay from "../assets/images/copa/ur.png";
import Panama from "../assets/images/copa/pa.png";
import Bolivia from "../assets/images/copa/bo.png";
import Brazil from "../assets/images/copa/br.png";
import Colombia from "../assets/images/copa/co.png";
import Paraguay from "../assets/images/copa/pa.png";
import Costa_Rica from "../assets/images/copa/cos.png";
import Divv from "../Components/Divv";
const Copa = ({ setProgress, title }) => {
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
      startTime: "5:20",
      time: "5:45 AM",
      endTime: "7:45",
      startDate: "June 21, 2024",
      endDate: "June 21, 2024",
      photo1: Argentina,
      team1: "Argentina",
      photo2: Canada,
      team2: "Canada",
      match: "Group Stage",
    },
    {
      startTime: "5:20",
      time: "5:45 AM",
      endTime: "7:45",
      startDate: "June 22, 2024",
      endDate: "June 22, 2024",
      photo1: Peru,
      team1: "Peru",
      photo2: Chile,
      team2: "Chile",
      match: "Group Stage",
    },
    {
      startTime: "3:20",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "June 23, 2024",
      endDate: "June 23, 2024",
      photo1: Ecuador,
      team1: "Ecuador",
      photo2: Venezuela,
      team2: "Venezuela",
      match: "Group Stage",
    },
    {
      startTime: "6:20",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "June 23, 2024",
      endDate: "June 23, 2024",
      photo1: Mexico,
      team1: "Mexico",
      photo2: Jamaica,
      team2: "Jamaica",
      match: "Group Stage",
    },
    {
      startTime: "3:00",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "June 24, 2024",
      endDate: "June 24, 2024",
      photo1: US,
      team1: "US",
      photo2: Bolivia,
      team2: "Bolivia",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "June 24, 2024",
      endDate: "June 24, 2024",
      photo1: Uruguay,
      team1: "Uruguay",
      photo2: Panama,
      team2: "Panama",
      match: "Group Stage",
    },
    {
      startTime: "3:00",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "June 25, 2024",
      endDate: "June 25, 2024",
      photo1: Colombia,
      team1: "Colombia",
      photo2: Paraguay,
      team2: "Paraguay",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "June 25, 2024",
      endDate: "June 25, 2024",
      photo1: Brazil,
      team1: "Brazil",
      photo2: Costa_Rica,
      team2: "Costa_Rica",
      match: "Group Stage",
    },
    {
      startTime: "3:00",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "June 26, 2024",
      endDate: "June 26, 2024",
      photo1: Peru,
      team1: "Peru",
      photo2: Canada,
      team2: "Canada",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "June 26, 2024",
      endDate: "June 26, 2024",
      photo1: Chile,
      team1: "Chile",
      photo2: Argentina,
      team2: "Argentina",
      match: "Group Stage",
    },
    {
      startTime: "3:00",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "June 27, 2024",
      endDate: "June 27, 2024",
      photo1: Ecuador,
      team1: "Ecuador",
      photo2: Jamaica,
      team2: "Jamaica",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:40",
      startDate: "June 27, 2024",
      endDate: "June 27, 2024",
      photo1: Venezuela,
      team1: "Venezuela",
      photo2: Mexico,
      team2: "Mexico",
      match: "Group Stage",
    },
    {
      startTime: "3:00",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "June 28, 2024",
      endDate: "June 28, 2024",
      photo1: Panama,
      team1: "Panama",
      photo2: US,
      team2: "US",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "June 28, 2024",
      endDate: "June 28, 2024",
      photo1: Uruguay,
      team1: "Uruguay",
      photo2: Bolivia,
      team2: "Bolivia",
      match: "Group Stage",
    },
    {
      startTime: "3:00",
      time: "3:45 AM",
      endTime: "5:45",
      startDate: "June 29, 2024",
      endDate: "June 29, 2024",
      photo1: Colombia,
      team1: "Colombia",
      photo2: Costa_Rica,
      team2: "Costa_Rica",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "June 29, 2024",
      endDate: "June 29, 2024",
      photo1: Paraguay,
      team1: "Paraguay",
      photo2: Brazil,
      team2: "Brazil",
      match: "Group Stage",
    },
    {
      startTime: "5:00",
      time: "5:45 AM",
      endTime: "7:30",
      startDate: "June 30, 2024",
      endDate: "June 30, 2024",
      photo1: Argentina,
      team1: "Argentina",
      photo2: Peru,
      team2: "Peru",
      match: "Group Stage",
    },
    {
      startTime: "5:00",
      time: "5:45 AM",
      endTime: "7:30",
      startDate: "June 30, 2024",
      endDate: "June 30, 2024",
      photo1: Canada,
      team1: "Canada",
      photo2: Chile,
      team2: "Chile",
      match: "Group Stage",
    },
    {
      startTime: "5:00",
      time: "5:45 AM",
      endTime: "7:30",
      startDate: "July 1, 2024",
      endDate: "July 1, 2024",
      photo1: Mexico,
      team1: "Mexico",
      photo2: Ecuador,
      team2: "Ecuador",
      match: "Group Stage",
    },
    {
      startTime: "5:00",
      time: "5:45 AM",
      endTime: "7:30",
      startDate: "July 1, 2024",
      endDate: "July 1, 2024",
      photo1: Jamaica,
      team1: "Jamaica",
      photo2: Venezuela,
      team2: "Venezuela",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "July 2, 2024",
      endDate: "July 2, 2024",
      photo1: Bolivia,
      team1: "Bolivia",
      photo2: Panama,
      team2: "Panama",
      match: "Group Stage",
    },
    {
      startTime: "6:00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "July 2, 2024",
      endDate: "July 2, 2024",
      photo1: Brazil,
      team1: "Brazil",
      photo2: Colombia,
      team2: "Colombia",
      match: "Group Stage",
    },
    {
      startTime: ":00",
      time: "6:45 AM",
      endTime: "8:45",
      startDate: "July 3, 2024",
      endDate: "July 3, 2024",
      photo1: Costa_Rica,
      team1: "Costa_Rica",
      photo2: Paraguay,
      team2: "Paraguay",
      match: "Group Stage",
    },
    {
      startTime: "5:00",
      time: "5:45 AM",
      endTime: "7:30",
      startDate: "June 21, 2024",
      endDate: "June 21, 2024",
      photo1: Argentina,
      team1: "Argentina",
      photo2: Canada,
      team2: "Canada",
      match: "Group Stage",
    },
    {
      startTime: "5:00",
      time: "5:45 AM",
      endTime: "7:30",
      startDate: "June 21, 2024",
      endDate: "June 21, 2024",
      photo1: Argentina,
      team1: "Argentina",
      photo2: Canada,
      team2: "Canada",
      match: "Group Stage",
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
          <Link to="/euro">
            <div className="px-3 py-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white rounded-lg">
              Euro Matches
            </div>
          </Link>
        </div>
        {matches.map((match, index) => (
          <Divv
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
    </section>
  );
};

export default Copa;
