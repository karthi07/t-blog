import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="blog-post col-md-4">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            {" "}
            {props.attributes.creator}{" "}
          </strong>
          <h3 className="mb-1 blog-post-title">{props.attributes.title}</h3>
          <p className="card-text my-2 mb-auto">{props.attributes.content} </p>
          <Link
            className="stretched-link"
            to={`/posts/${props.attributes.slug}`}
          >
            {" "}
            Open Post{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
