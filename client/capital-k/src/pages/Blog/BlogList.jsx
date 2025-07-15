import React, { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { fetchDataFromApi } from "../../Utils/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
      const  res  = await fetchDataFromApi("/api/blogs/");
      console.log("Blog data response:", res.data);
      setBlogs(res.data);
    };
  
    useEffect(() => {
      fetchBlogs();
    }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4">🐾 Parenting Tips for Pet Lovers</h2>
      <div className="row">
        {blogs?.map(blog => (
          <div className="col-md-6 col-lg-4" key={blog._id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
