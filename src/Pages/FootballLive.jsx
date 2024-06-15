import React, { useEffect, useState, useRef } from "react";
import Hls from "hls.js";

const FootballLive = ({ setProgress, title }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [streams, setStreams] = useState([]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNoLag, setIsNoLag] = useState(true);
  const [currentNoLagUrl, setCurrentNoLagUrl] = useState("");
  const [activeStreamUrl, setActiveStreamUrl] = useState(""); // State to track active stream URL
  const videoElement = useRef(null);

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [setProgress]);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await fetch("football.json");
        const data = await response.json();
        setStreams(data.streams);
        if (data.streams.length > 0) {
          // Set the first stream as active initially
          setActiveStreamUrl(data.streams[0].url);
          setCurrentStreamUrl(data.streams[0].url);
        }
      } catch (error) {
        console.error("Error fetching stream data:", error);
      }
    };

    fetchStreams();
  }, []);

  useEffect(() => {
    if (currentStreamUrl && !isNoLag) {
      loadAndPlayStream(currentStreamUrl);
    }
  }, [currentStreamUrl, isNoLag]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const loadAndPlayStream = (url) => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoElement.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.current.play();
        setIsPlaying(true);
      });
    } else if (
      videoElement.current.canPlayType("application/vnd.apple.mpegurl")
    ) {
      videoElement.current.src = url;
      videoElement.current.addEventListener("loadedmetadata", () => {
        videoElement.current.play();
        setIsPlaying(true);
      });
    } else {
      alert("HLS is not supported by your browser.");
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoElement.current.pause();
      setIsPlaying(false);
    } else {
      videoElement.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullScreen = () => {
    if (videoElement.current.requestFullscreen) {
      videoElement.current.requestFullscreen();
    } else if (videoElement.current.webkitRequestFullscreen) {
      videoElement.current.webkitRequestFullscreen();
    }
  };

  const handleOpenVLC = () => {
    window.location.href = `vlc://${currentStreamUrl}`;
  };

  const handleLanguageChange = (url) => {
    setIsNoLag(false); // Reset "No Lag" option
    setCurrentStreamUrl(url);
    setActiveStreamUrl(url); // Update active stream when language changes
  };

  const handleNoLagOption = (url) => {
    setIsNoLag(true);
    setCurrentNoLagUrl(url);
    setCurrentStreamUrl(url);
    setActiveStreamUrl(url); // Update active stream when selecting no lag option
  };

  return (
    <>
      <div className="">
        <div className="m-2 flex justify-center"></div>
        <div className="flex justify-center">
          <div className="w-full mb-10 max-w-3xl p-4 bg-[#0A6847] rounded-lg shadow-lg relative">
            <div className="text-white text-center mt-4 mb-2">
              <p>{currentTime}</p>
            </div>
            <div className="flex justify-center mb-4 flex-wrap">
              {streams.map((stream, index) => (
                <button
                  key={index}
                  className={`p-2 mx-2 rounded ${
                    activeStreamUrl === stream.url
                      ? "bg-orange-600"
                      : "bg-blue-600"
                  }`}
                  onClick={() => handleLanguageChange(stream.url)}
                >
                  {stream.language}
                </button>
              ))}
            </div>
            <div className="justify-center mb-4 hidden">
              <button
                className="p-2 mx-2 bg-blue-600 rounded"
                onClick={handlePlayPause}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                className="p-2 mx-2 bg-blue-600 rounded"
                onClick={handleFullScreen}
              >
                Full Screen
              </button>
              <button
                className="p-2 mx-2 bg-blue-600 rounded"
                onClick={handleOpenVLC}
              >
                Open With VLC
              </button>
            </div>
            {isNoLag ? (
              <iframe
                src={currentStreamUrl}
                title="No Lag Stream"
                className="w-full h-96 rounded-lg shadow-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                id="stream-video"
                className="w-full rounded-lg shadow-lg"
                ref={videoElement}
                controls
                autoPlay
              ></video>
            )}
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
            party sites Which are freely available on all Internet. We are not
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
