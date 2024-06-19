import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const FootballLive = ({ setProgress, title }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [streams, setStreams] = useState([
    {
      url: "https://streambtw.com/iframe/ch1.php",
      language: "Default Stream",
    },
    {
      url: "https://whitemouseapple.com/skysport251.html",
      language: "No Lag Stream",
    },
    {
      url: "https://whitemouseapple.com/tipikbe.html",
      language: "Spanish Stream",
    },
    {
      url: "https://dlhd.so/embed/stream-560.php",
      language: "Best Stream",
    },
  ]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState(
    "https://streambtw.com/iframe/ch1.php"
  );

  useEffect(() => {
    fetch("football.json")
      .then((response) => response.json())
      .then((data) => {
        setStreams((prevStreams) => [...prevStreams, ...data.streams]);
      })
      .catch((error) =>
        console.error("Error fetching football streams:", error)
      );

    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);

    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setProgress]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleStreamClick = (streamUrl) => {
    setCurrentStreamUrl(streamUrl);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl p-6 bg-green-600 rounded-lg shadow-lg">
        <div className="text-white text-center my-4">
          <p className="text-2xl font-semibold">{currentTime}</p>
        </div>
        <div className="bg-gray-800  py-2 rounded-lg mb-6 text-center">
          <h1 className="text-white text-base md:text-xl">
            Skip two ads to watch the stream.
          </h1>
        </div>
        <div className="flex justify-center flex-wrap mb-6">
          {streams.map((stream, index) => (
            <button
              key={index}
              className={`m-2 px-6 py-3 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 
                ${
                  stream.url === currentStreamUrl
                    ? "bg-green-500"
                    : "bg-gray-800 hover:bg-green-500"
                }
                md:text-base md:py-2 text-xs px-3 py-1.2
              `}
              onClick={() => handleStreamClick(stream.url)}
            >
              {stream.language}
            </button>
          ))}
        </div>
        <div className="relative overflow-hidden pb-[56.25%] h-0 mb-6">
          <iframe
            src={currentStreamUrl}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            sandbox="allow-scripts allow-same-origin allow-popups"
            title="Football Live Stream"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full max-w-4xl p-4">
        <p className="text-gray-800 dark:text-gray-300 font-bold text-base text-center p-2">
          Digital Millennium Copyright Act (DMCA)
        </p>
        <p className="text-gray-700 dark:text-gray-400 text-sm font-normal italic text-center">
          This site only contains links and embeds to TV channels from 3rd party
          sites which are freely available on all Internet. We are not
          affiliated in any way with the broadcasted channels nor responsible
          for their content. All content is copyright of their respective
          owners.
        </p>
      </div>
    </div>
  );
};

export default FootballLive;
