import React, { useEffect, useState } from "react";
import Hls from "hls.js";
import euro from "../assets/images/euro.png";

const FootballLive = () => {
  const [streams, setStreams] = useState([]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("football.json")
      .then((response) => response.json())
      .then((data) => {
        setStreams(data.streams);
        setCurrentStreamUrl(data.streams[0].url); // Initialize with the first stream URL
        loadAndPlayStream(data.streams[0].url); // Start playing the first stream
      });
  }, []);

  // Function to load and play stream using HLS
  const loadAndPlayStream = (streamUrl) => {
    const videoElement = document.getElementById("stream-video");
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play();
        setIsPlaying(true);
      });
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = streamUrl;
      videoElement.addEventListener("loadedmetadata", () => {
        videoElement.play();
        setIsPlaying(true);
      });
    } else {
      alert("Your browser does not support HLS or MPEG-DASH streaming.");
    }
  };

  // Event handlers
  const handleStreamChange = (streamUrl) => {
    setCurrentStreamUrl(streamUrl);
    loadAndPlayStream(streamUrl);
  };

  const handlePlayPause = () => {
    const videoElement = document.getElementById("stream-video");
    if (isPlaying) {
      videoElement.pause();
      setIsPlaying(false);
    } else {
      videoElement.play();
      setIsPlaying(true);
    }
  };

  const handleFullScreen = () => {
    const videoElement = document.getElementById("stream-video");
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    }
  };

  const handleOpenVLC = () => {
    const vlcUrl = "vlc://" + currentStreamUrl;
    window.location.href = vlcUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="w-full max-w-md p-6 bg-[#0A6847] m-5 rounded-lg shadow-xl text-center">
        <p className="text-orange-500 font-bold text-xl">EuroCup Live</p>

        <div className="m-2 flex justify-center">
          <div className="flex items-center justify-center space-x-4">
            <img src={euro} alt="Logo" className="h-12 w-12 rounded-full" />
            <div>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                VS
              </p>
            </div>
            <img src={euro} alt="Logo" className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full mb-10 max-w-3xl p-4 bg-[#0A6847] rounded-lg shadow-lg relative">
          <div className="text-white text-center mt-4 mb-2">
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
          <div className="flex justify-center mb-4 flex-wrap">
            {streams.map((stream) => (
              <a
                key={stream.language}
                className={`p-2 mx-2 m-2 rounded text-white cursor-pointer ${
                  stream.url === currentStreamUrl
                    ? "bg-orange-600"
                    : "bg-green-600"
                }`}
                onClick={() => handleStreamChange(stream.url)}
              >
                {stream.language}
              </a>
            ))}
          </div>

          <div className=" justify-center mb-4 hidden">
            <button
              className={`p-2 mx-2 bg-blue-600 rounded ${
                isPlaying ? "" : "hidden"
              }`}
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
          <video
            id="stream-video"
            className="w-full h-96 rounded-lg shadow-lg"
            controls
            autoPlay
          ></video>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-4 m-5">
          <p className="text-black dark:text-white font-bold text-base text-center p-2">
            Digital Millennium Copyright Act (DMCA)
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
    </div>
  );
};

export default FootballLive;
