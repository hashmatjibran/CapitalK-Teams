import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={blog.image} className="card-img-top" alt={blog.title} />
      <div className="card-body">
        <h5>{blog.title}</h5>
        <p className="text-muted">{blog.summary}</p>
        <Link to={`/blogs/${blog._id}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
