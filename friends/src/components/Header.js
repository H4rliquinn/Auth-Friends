import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <h1>Friends</h1>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/friends">Friends</NavLink>
    </div>
  );
};

export default Header;
