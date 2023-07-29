import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Community() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs/")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="mainss">
      <div className="zomato-header-img">
        <img src="https://b.zmtcdn.com/data/file_assets/621862abf874a7c2be8fdd6d062ca67a1678705718.webp" />
        <ul>
          <li>
            <Link to={"/blog"}>All Categories</Link>
          </li>
          <li style={{ borderBottom: "1px solid rgb(255,0,45)" }}>
            <Link to={"/community"}>Community</Link>
          </li>
          <li>
            <Link to={"/company"}>Company</Link>
          </li>
          <li>
            <Link to={"/culture"}>Culture</Link>
          </li>
          <li>
            <Link to={"/technology"}>Technology</Link>
          </li>
        </ul>
      </div>
      <div className="blog-map">
        {blogs.slice(10, 20).map((blog) => (
          <div key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <div>
                <img src={blog.image} alt="" />
              </div>
              <div>
                <h4>{blog.title}</h4>
                <p>{blog.created_date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
