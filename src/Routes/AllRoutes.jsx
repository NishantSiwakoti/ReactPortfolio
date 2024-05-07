import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800 overflow-hidden">
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="about" element={<About title="About " />} />
        <Route path="skills" element={<Skills title="Skills" />} />
        <Route path="projects" element={<Projects title="Projects" />} />
        <Route path="contact" element={<Contact title="Contact" />} />
      </Routes>
    </div>
  );
};
