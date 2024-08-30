import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Login from "../Pages/admin/Login";
import Notfound from "../Pages/Notfound";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../Pages/ProtectedRoute";
import Hello from "../Pages/Hello";
import AdminDashboard from "../Pages/admin/AdminDashboard";
import Header from "../Components/Header";
import AdminHeader from "../Components/adminComponent/AdminHeader";
import Footer from "../Components/Footer";
import Education from "../Pages/Education";

export const AllRoutes = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/dashboard");

  return (
    <AuthProvider>
      {isAdmin && <AdminHeader />}
      <div className="dark:bg-slate-800 bg-gray-50 overflow-hidden">
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
            path="education"
            element={<Education title="Education" setProgress={setProgress} />}
          />
          <Route
            path="contact"
            element={<Contact title="Contact" setProgress={setProgress} />}
          />
          <Route path="*" element={<Notfound />} />
          <Route path="helloworld" element={<Hello />} />
          <Route path="/admin" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      {!isAdmin && <Footer />}
    </AuthProvider>
  );
};
