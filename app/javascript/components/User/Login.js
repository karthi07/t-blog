import React, { useState, useEffect, Fragment } from "react";
import Link from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [user, setUser] = useState([]);
  // const [post, setPost] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const url = "/login";
  //   axios
  //     .get(url)
  //     .then((resp) => {
  //       setPost(resp.data.data);
  //       setLoaded(true);
  //     })
  //     .catch((resp) => console.log(resp));
  // }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setUser(Object.assign({}, user, { [e.target.name]: e.target.value }));
    console.log("name: ", user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post("/login", { user })
      .then((resp) => {
        debugger;
      })
      .catch((resp) => console.log(resp));
  };

  return (
    <div className="blog-post ">
      <h2>Login Page </h2>

      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-450 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                onChange={handleChange}
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
