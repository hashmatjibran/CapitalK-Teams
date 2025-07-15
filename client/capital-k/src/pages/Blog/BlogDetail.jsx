import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../Utils/api";

const BlogDetail = () => {
  const  ID  = useParams();
  const [blog, setBlog] = useState(null);

   const fetchBlogs = async () => {
    console.log("Fetching blog with ID:", ID.slug);
        const  res  = await fetchDataFromApi(`/api/blogs/${ID.slug}`)
        console.log("Blog data response:", res.data);
        setBlog(res.data);
      };
    
      useEffect(() => {
        fetchBlogs();
      }, [ID]);



  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container py-5">
      <h1>{blog.title}</h1>
      <img src={blog.image} className="img-fluid w-75 my-3" alt={blog.title} />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetail;
