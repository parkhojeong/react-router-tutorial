import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  const activeStyle = {
    color: "green",
    fontSize: "2rem",
  };
  return (
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={activeStyle}>
          홈
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about" activeStyle={activeStyle}>
          소개
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/react" activeStyle={activeStyle}>
          react 소개
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
