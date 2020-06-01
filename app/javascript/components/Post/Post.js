import React, { useState, useEffect, Fragment } from "react";
import Link from "react-router-dom";
import axios from "axios";

const Post = (props) => {
  const [post, setPost] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = "/api/v1/posts/" + slug;
    axios
      .get(url)
      .then((resp) => {
        setPost(resp.data.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  return (
    <div className="blog-post col-sm-6 col-md-4">
      {loaded && <h2> Post Page of {post.attributes.title} </h2>}
      {loaded && (
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {" "}
              {post.attributes.creator}{" "}
            </strong>
            <h3 className="mb-1 blog-post-title">{post.attributes.title}</h3>
            <p className="card-text my-2 mb-auto">{post.attributes.content} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
