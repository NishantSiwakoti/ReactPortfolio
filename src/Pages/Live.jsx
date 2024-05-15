import React, { useEffect, useState } from "react";
import Hls from "hls.js";

const Live = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  const [streams, setStreams] = useState([]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoElement = React.createRef();

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
        <div className="m-2 flex justify-center">
          <div className="bg-orange-400 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Match 65: RR VS PBKS
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl p-4 bg-orange-400 rounded-lg shadow-lg">
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
      </div>
    </>
  );
};

export default Live;
