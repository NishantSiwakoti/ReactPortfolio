import React, { useEffect, useState, useRef } from "react";
import Hls from "hls.js";
import { Link } from "react-router-dom";
const Live = ({ setProgress, title }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [streams, setStreams] = useState([
    {
      language: "Hindi Stream",
      url: "https://priyansh906.github.io/ceir/",
    },
    {
      language: "English Stream",
      url: "https://priyansh906.github.io/engcric/",
    },
  ]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState(
    "https://priyansh906.github.io/ceir/"
  );
  const [isPlaying, setIsPlaying] = useState(false);
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
    if (currentStreamUrl) {
      loadAndPlayStream(currentStreamUrl);
    }
  }, [currentStreamUrl]);

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

  const handleStreamChange = (url) => {
    setCurrentStreamUrl(url);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <div className="w-full mb-10 max-w-3xl bg-gradient-to-r from-green-400 via-green-700 to-green-900  p-4  rounded-lg shadow-lg relative">
            <div className="flex justify-center md:justify-end mt-5 items-center ">
              <Link to="/copa" className="">
                <div className="px-3 py-2 mr-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg">
                  Copa Matches
                </div>
              </Link>
              <Link to="/euro">
                <div className="px-3 py-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white rounded-lg">
                  Euro Matches
                </div>
              </Link>
            </div>
            <div className="text-white text-center mt-4 mb-2">
              <p>{currentTime}</p>
            </div>
            <div className="flex justify-center mb-4 flex-wrap">
              {streams.map((stream) => (
                <a
                  key={stream.language}
                  className={`p-2 mx-2 m-2 rounded text-white cursor-pointer ${
                    stream.url === currentStreamUrl
                      ? "bg-orange-600"
                      : "bg-[#1f2937]"
                  }`}
                  onClick={() => handleStreamChange(stream.url)}
                >
                  {stream.language}
                </a>
              ))}
            </div>

            <div className="flex justify-center mb-4">
              <button
                className="p-2 mx-2 bg-blue-600 rounded hidden"
                onClick={handlePlayPause}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                className="p-2 mx-2 bg-blue-600 rounded hidden"
                onClick={handleFullScreen}
              >
                Full Screen
              </button>
              <button
                className="p-2 mx-2 bg-blue-600 rounded hidden"
                onClick={handleOpenVLC}
              >
                Open With VLC
              </button>
            </div>
            <iframe
              src={currentStreamUrl}
              title="Live Stream"
              className="w-full h-96 rounded-lg shadow-lg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
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

export default Live;
