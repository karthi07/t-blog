import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/posts.json")
      .then((resp) => {
        setPosts(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [posts.length]);

  const list = posts.map((item) => {
    return <Post key={item.attributes.slug} attributes={item.attributes} />;
  });

  return (
    <div className="blog-container">
      <h1> T Blog </h1>
      <div> This is list of Posts </div>
      <div className="row my-4 show-posts ">{list}</div>
    </div>
  );
};

export default Posts;
