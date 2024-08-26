import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const BlogList = ({ blogs, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedBlogId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedBlogId);
    setIsModalOpen(false);
    setSelectedBlogId(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setSelectedBlogId(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="mb-4 p-4 border border-gray-200 rounded-lg"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600">{blog.author}</p>
            <div className="mt-2 flex space-x-4">
              <button
                onClick={() => onEdit(blog._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(blog._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Are you sure you want to delete this blog?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default BlogList;
