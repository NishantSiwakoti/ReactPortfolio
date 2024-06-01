import React, { useEffect, useState } from "react";
import Hls from "hls.js";
import logo from "../assets/images/logoo.png";

const Live = ({ setProgress, title }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [streams, setStreams] = useState([]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoElement = React.createRef();

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);

  useEffect(() => {
    document.title = `${title}`;
  });

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await fetch("m3u8.json");
        const data = await response.json();
        setStreams(data.streams);
        if (data.streams.length > 0) {
          setCurrentStreamUrl(data.streams[0].url);
        }
      } catch (error) {
        console.error("Error fetching stream data:", error);
      }
    };

    fetchStreams();
  }, []);

  useEffect(() => {
    if (currentStreamUrl) {
      loadAndPlayStream(currentStreamUrl);
    }
  }, [currentStreamUrl]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
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

  const handleLanguageChange = (e) => {
    setCurrentStreamUrl(e.target.value);
  };

  return (
    <>
      <div className="">
        {/* Current Time and Date */}

        <div className="m-2  flex justify-center">
          <div className="bg-[#0A6847] p-6 rounded-lg shadow-xl w-full max-w-md text-center">
            <div className="m-2  flex justify-center">
              <div className="flex items-center justify-center space-x-4">
                <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
                <div>
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                    VS
                  </p>
                </div>
                <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full mb-10 max-w-3xl p-4 bg-[#0A6847] rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <select
                id="language-select"
                className="p-2 text-black rounded"
                onChange={handleLanguageChange}
                value={currentStreamUrl}
              >
                {streams.map((stream) => (
                  <option key={stream.language} value={stream.url}>
                    {stream.language}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-white text-center mt-4 mb-2">
              <p>{currentTime.toLocaleString()}</p>
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
            <video
              id="stream-video"
              className="w-full rounded-lg shadow-lg"
              ref={videoElement}
              controls
              autoPlay
            ></video>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl p-4 m-5">
            <p className="text-white font-bold text-base text-center p-2">
              Digital Millennium Copyright Act(DMCA)
            </p>
            <p className="text-white text-sm font-normal italic">
              This website does not host any media content on its own site.This
              website does not create or host or share any video. All video
              streams are embed here from external websites that are available
              freely online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
