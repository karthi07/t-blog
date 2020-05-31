import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "./Posts/Posts";
import Post from "./Post/Post";
import "./custom.scss";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/:slug" component={Post} />
    </Switch>
  );
};

export default App;
