import React, { useEffect, useState } from "react";

const FootballLive = ({ setProgress, title }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [streams, setStreams] = useState([
    {
      url: "https://whitemouseapple.com/tipikbe.html",
      language: "Default Stream",
    },
    {
      url: "https://whitemouseapple.com/skysport251.html",
      language: "No Lag Stream",
    },
    {
      url: "https://streambtw.com/iframe/ch1.php",
      language: "Spanish Stream",
    },
    {
      url: "https://dlhd.so/embed/stream-560.php",
      language: "Best Stream",
    },
  ]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState(
    "https://whitemouseapple.com/tipikbe.html"
  );

  useEffect(() => {
    // Simulate loading additional streams from a JSON file
    fetch("football.json")
      .then((response) => response.json())
      .then((data) => {
        setStreams((prevStreams) => [...prevStreams, ...data.streams]);
      })
      .catch((error) =>
        console.error("Error fetching football streams:", error)
      );

    // Simulate progress update
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);

    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up
    return () => clearInterval(intervalId);
  }, [setProgress]);

  useEffect(() => {
    // Update document title when `title` prop changes
    document.title = title;
  }, [title]);

  const handleStreamClick = (streamUrl) => {
    setCurrentStreamUrl(streamUrl);
  };

  return (
    <>
      <div className="container">
        <div className="m-2 flex justify-center"></div>
        <div className="flex justify-center">
          <div className="w-full mb-10 max-w-3xl p-4 bg-[#0A6847] rounded-lg shadow-lg relative">
            <div className="text-white text-center mt-4 mb-2">
              <p>{currentTime}</p>
            </div>
            <div className="bg-gray-800 py-3 rounded-lg">
              <h1 className="text-white text-xl text-center">
                Skip two ads to watch stream.
              </h1>
            </div>
            <div className="flex justify-center mb-4 flex-wrap">
              {streams.map((stream, index) => (
                <button
                  key={index}
                  className={`m-2 px-4 py-2 bg-gray-800 text-white rounded ${
                    stream.url === currentStreamUrl ? "bg-green-500" : ""
                  }`}
                  onClick={() => handleStreamClick(stream.url)}
                >
                  {stream.language}
                </button>
              ))}
            </div>
            <div className="video-container">
              <iframe
                src={currentStreamUrl}
                width="100%"
                height="500px"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                sandbox="allow-scripts allow-same-origin allow-popups"
                title="Football Live Stream"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-4 m-5">
          <p className="text-black dark:text-white font-bold text-base text-center p-2">
            Digital Millennium Copyright Act(DMCA)
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
    </>
  );
};

export default FootballLive;