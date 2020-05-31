import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-title"> {props.attributes.title} </div>
      <div className="post-content"> {props.attributes.content} </div>
      <div className="post-creator"> {props.attributes.user_id} </div>
      <div className="post-link">
        <Link to={`/posts/${props.attributes.slug}`}> Open Post </Link>
      </div>
    </div>
  );
};

export default Post;
