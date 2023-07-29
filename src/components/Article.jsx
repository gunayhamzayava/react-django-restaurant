import React, { useEffect, useState } from "react";
import "../components/Blog.css";
import { Link, useParams } from "react-router-dom";
import "./Article.css";
import "./Responsive__.css";

function Article() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Failed to fetch blog:", error);
      });
  }, [id]);

  return (
    <>
      <div className="article">
        <h2>{blog.title}</h2>
      </div>
    </>
  );
}

export default Article;
