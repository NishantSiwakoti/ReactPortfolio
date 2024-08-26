import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles

const BlogForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setSlug(initialData.slug);
      setAuthor(initialData.author);
      setContent(initialData.content || "");
      setTags(initialData.tags || "");
      setImage(initialData.postimage || "");
    } else {
      setTitle("");
      setSlug("");
      setAuthor("");
      setContent("");
      setTags("");
      setImage("");
    }
  }, [initialData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("tags", tags);
    if (image) {
      formData.append("postimage", image);
    }

    if (initialData && initialData._id) {
      formData.append("id", initialData._id);
    }

    try {
      await onSubmit(formData);
      setIsUpdating(false); // Set updating state to false
    } catch (error) {
      console.error("Error submitting form", error);
      setIsUpdating(false); // Set updating state to false even if there's an error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "link",
            "image",
          ]}
          className="bg-white rounded-md"
          theme="snow"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tags (comma separated)
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          accept="image/*"
        />
      </div>

      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded-md w-full ${
          isUpdating ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isUpdating}
      >
        {isUpdating
          ? initialData
            ? "Updating..."
            : "Publishing..."
          : initialData
          ? "Update Blog"
          : "Publish Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
