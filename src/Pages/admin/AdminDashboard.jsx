import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/adminComponent/Sidebar";
import Header from "../../Components/adminComponent/AdminHeader";
import BlogList from "../../Components/adminComponent/BlogList";
import BlogForm from "../../Components/adminComponent/BlogForm";
import axios from "axios";
import Video from "../../Components/adminComponent/Video";

const AdminDashboard = () => {
  const [view, setView] = useState("home");
  const [currentBlog, setCurrentBlog] = useState(null); // Store the blog being edited

  const [blogs, setBlogs] = useState([]);

  const handleBlogSubmit = async (newBlog) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };
      if (currentBlog) {
        // Update existing blog
        // console.log(currentBlog)
        // console.log(currentBlog._id);
        await axios.patch(
          `https://blog-apis-pied.vercel.app/api/posts/${currentBlog._id}`,
          newBlog,
          { headers }
        );
      } else {
        // Add new blog
        const response = await axios.post(
          "https://blog-apis-pied.vercel.app/api/posts/",
          newBlog,
          { headers }
        );

        setBlogs((prevBlogs) => [...prevBlogs, response.data.data]);
      }
      setView("home");
      setCurrentBlog(null); // Clear the current blog
    } catch (error) {
      console.error("error creating blog", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://blog-apis-pied.vercel.app/api/posts/"
        );
        // console.log(response.data.data);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("error fetching blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
    if (newView === "create") {
      setCurrentBlog(null); // Clear the blog data when creating a new blog
    }
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog._id === id);
    setCurrentBlog(blogToEdit);
    setView("create"); // Switch to the create view with the blog data
  };

  const handleDelete = async (id) => {
    // const isConfirmed = window.confirm(
    //   "Are you sure you want to delete this blog?"
    // );
    // if (isConfirmed) {
    // setBlogs(blogs.filter((blog) => blog.id !== id));
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.delete(`https://blog-apis-pied.vercel.app/api/posts/${id}`, {
        headers,
      });

      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blogs", error);
    }
    // }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar
        onViewChange={handleViewChange}
        className="w-full md:w-64 md:flex-shrink-0"
      />
      <main className="flex-1 flex flex-col">
        {/* <Header /> */}
        <div className="p-4 md:p-6 flex-1">
          {view === "home" && (
            <BlogList
              blogs={blogs}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}

          {view === "create" && (
            <BlogForm onSubmit={handleBlogSubmit} initialData={currentBlog} />
          )}
          {/* {view === "uploadVideo" && (
            <Video
              onUpload={(title, url) =>
                console.log("Uploaded Video:", title, url)
              }
            />
          )} */}

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
