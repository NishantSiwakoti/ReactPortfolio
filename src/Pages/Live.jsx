import React, { useEffect, useState } from "react";
import Hls from "hls.js";
import kkr from "../assets/KKR.png";
import rcb from "../assets/RCB.png";
import mi from "../assets/MI.png";
import csk from "../assets/CSK.png";
import gt from "../assets/GT.png";
import rr from "../assets/RR.png";
import pbks from "../assets/PBKS.png";
import srh from "../assets/SRH.png";
import lsg from "../assets/LSG.png";
import dc from "../assets/DC.png";
import LiveDiv from "../Components/LiveDiv";

const Live = ({ setProgress, title }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  useEffect(() => {
    document.title = `${title}`;
  });

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
        <div className="m-2  flex justify-center">
          <div className="bg-orange-400 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
            <div className="m-2  flex justify-center">
              <div className="bg-orange-400 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
                <div className="flex items-center justify-center space-x-4">
                  <img src="" alt="Logo" className="h-12 w-12" />
                  <div>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      Match
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      VS
                    </p>
                  </div>
                  <img src="" alt="Logo" className="h-12 w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full mb-10 max-w-3xl p-4 bg-orange-400 rounded-lg shadow-lg">
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
        <div className="flex justify-center">
          <div className="w-full max-w-3xl p-4 bg-orange-400 rounded-lg shadow-lg m-5">
            <p className="text-white font-bold text-base text-center p-2">
              Digital Millennium Copyright Act(DMCA)
            </p>
            <p className="text-gray-800 text-sm font-medium">
              This website does not host any media content on its own site. Our
              visitors may utilize external or third-party services to display
              content, such as embedding media from platforms like Bet365,
              Dailymotion, Streamable, and others. We hereby inform all
              copyright owners that the links and media shared by visitors on
              this site are hosted elsewhere on the web or embedded from various
              other platforms as mentioned. Should you encounter any legal
              issues, please reach out to the appropriate media file owners or
              hosters directly. All trademarks, videos, trade names, service
              marks, copyrighted work, and logos featured herein belong to their
              respective owners and companies. Nishant holds no responsibility
              for content uploaded by others to third-party sites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
