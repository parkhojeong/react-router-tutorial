import React from "react";
import { Post } from "../pages";
import { Link, Route } from "react-router-dom";

function Posts({ match }) {
  return (
    <div>
      <h3>post list</h3>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>post #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>post #2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>post #3</Link>
        </li>
      </ul>
      <Route exact path={match.url} render={() => <p>select post</p>} />
      <Route exact path={`${match.url}/:id`} component={Post} />
    </div>
  );
}

export default Posts;
