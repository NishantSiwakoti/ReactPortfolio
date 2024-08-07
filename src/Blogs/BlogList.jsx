// BlogList.js
import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
