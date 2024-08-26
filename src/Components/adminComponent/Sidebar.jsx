import React, { useState, useEffect, useRef } from "react";
import Video from "./Video";

const Sidebar = ({ onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleVideoUpload = (title, url) => {
    // Handle the uploaded video data here
    console.log("Uploaded Video Title:", title);
    console.log("Uploaded Video URL:", url);
  };

  return (
    <div className="relative md:mt-0 mt-16">
      {/* Hamburger button for small screens */}
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>

      {/* Full Sidebar for md and above */}
      <div className="hidden md:block w-64 bg-white border-r h-screen">
        <ul className="pt-0">
          <li>
            <button
              onClick={() => onViewChange("home")}
              className="block w-full text-left p-4 hover:bg-gray-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => onViewChange("create")}
              className="block w-full text-left p-4 hover:bg-gray-200"
            >
              Create a Blog
            </button>
          </li>
          {/* <li>
            <button
              onClick={() => onViewChange("uploadVideo")}
              className="block w-full text-left p-4 hover:bg-gray-200"
            >
              Upload a Video
            </button>
          </li> */}
        </ul>

        {/* Render the Video component when the "Upload a Video" view is selected */}
        {onViewChange === "uploadVideo" && (
          <Video onUpload={handleVideoUpload} />
        )}
      </div>

      {/* Sidebar Dropdown for small screens */}
      {isOpen && (
        <div
          ref={sidebarRef}
          className="md:hidden absolute left-0 w-full bg-white border-t mt-4 z-50"
        >
          <ul className="pt-0">
            <li>
              <button
                onClick={() => {
                  onViewChange("home");
                  setIsOpen(false);
                }}
                className="block w-full text-left p-4 hover:bg-gray-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onViewChange("create");
                  setIsOpen(false);
                }}
                className="block w-full text-left p-4 hover:bg-gray-200"
              >
                Create a Blog
              </button>
            </li>
            {/* <li>
              <button
                onClick={() => {
                  onViewChange("uploadVideo");
                  setIsOpen(false);
                }}
                className="block w-full text-left p-4 hover:bg-gray-200"
              >
                Upload a Video
              </button>
            </li> */}
          </ul>

          {/* {onViewChange === "uploadVideo" && (
            <Video onUpload={handleVideoUpload} />
          )} */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
