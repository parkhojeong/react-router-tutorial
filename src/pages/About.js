import React from "react";
import queryString from "query-string";

function About({ location, match }) {
  const query = queryString.parse(location.search);
  console.log(query);

  const { color } = query;

  return (
    <div>
      <h2 style={{ color }}>소개</h2>
      <p>it is {match.params.name}</p>
    </div>
  );
}

export default About;
