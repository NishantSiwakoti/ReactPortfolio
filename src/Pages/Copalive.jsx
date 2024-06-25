import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Copalive = ({ setProgress, title }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [streams, setStreams] = useState([
    {
      url: "https://priyansh906.github.io/euro1/",
      language: "Default Stream",
    },
    {
      url: "https://priyansh906.github.io/Copalink/",
      language: "English Stream",
    },
    {
      url: "https://priyansh906.github.io/copalink22/",
      language: "Spanish Stream",
    },
  ]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState(
    "https://priyansh906.github.io/euro1/"
  );
  useEffect(() => {
    fetch("copa.json")
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
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center mb-6">
          <div className="w-full max-w-4xl p-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-lg shadow-lg relative">
            <div className="flex justify-end items-center ml-4">
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
            <div className="text-white text-center my-4">
              <p className="text-lg font-semibold">{currentTime}</p>
            </div>
            <div className="flex justify-center flex-wrap gap-4 mb-6">
              {streams.map((stream, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 ${
                    stream.url === currentStreamUrl
                      ? "bg-green-500"
                      : "bg-gray-800 hover:bg-green-500"
                  }`}
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
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-4">
            <p className="text-black dark:text-white font-bold text-base text-center p-2">
              Digital Millennium Copyright Act (DMCA)
            </p>
            <p className="text-black dark:text-white text-sm font-normal italic text-center">
              This site only contains links and embeds to TV channels from 3rd
              party sites which are freely available on all Internet. We are not
              affiliated in any way with the broadcasted channels nor
              responsible for their content. All content is copyright of their
              respective owners.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copalive;
