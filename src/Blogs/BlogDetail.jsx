import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "./blogPosts";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
