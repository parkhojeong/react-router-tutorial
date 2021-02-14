import React from "react";

function Home({ history }) {
  return (
    <div>
      <h2>홈</h2>
      <button
        onClick={() => {
          history.push("/about/javascript");
        }}
      >
        move to javascipt
      </button>
    </div>
  );
}

export default Home;
