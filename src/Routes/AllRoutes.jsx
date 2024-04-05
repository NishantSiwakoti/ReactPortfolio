import { Routes, Route } from "react-router-dom";
import { Home, About, Skills, Projects, Contact } from "../Pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};
