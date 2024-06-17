import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Live from "../Pages/Live";
import LiveMatches from "../Pages/LiveMatches";
import Notfound from "../Pages/Notfound";
import Hello from "../Pages/Hello";
import Final from "../Pages/Final";
import Football from "../Pages/Football";
import FootballLive from "../Pages/FootballLive";
export const AllRoutes = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="dark:bg-slate-800 overflow-hidden">
      <LoadingBar
        color="#35d16e"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          path="/"
          element={<Home title="Home" setProgress={setProgress} />}
        />
        <Route
          path="about"
          element={<About title="About" setProgress={setProgress} />}
        />
        <Route
          path="skills"
          element={<Skills title="Skills" setProgress={setProgress} />}
        />
        <Route
          path="projects"
          element={<Projects title="Projects" setProgress={setProgress} />}
        />
        <Route
          path="contact"
          element={<Contact title="Contact" setProgress={setProgress} />}
        />
        <Route
          path="live"
          element={
            <LiveMatches title="Live Matches" setProgress={setProgress} />
          }
        />
        <Route
          path="euro"
          element={
            <Football title="Live Football Matches" setProgress={setProgress} />
          }
        />

        <Route
          path="livestream"
          element={<Live title="LiveStreaming" setProgress={setProgress} />}
        />
        <Route
          path="footballive"
          element={
            <FootballLive title="Football Live" setProgress={setProgress} />
          }
        />
        <Route path="*" element={<Notfound />} />
        <Route path="helloworld" element={<Hello />} />
        <Route
          path="livematches"
          element={<Final title="Live Matches" setProgress={setProgress} />}
        />
      </Routes>
    </div>
  );
};
