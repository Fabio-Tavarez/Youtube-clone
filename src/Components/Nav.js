import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav bg-danger">
      <a
        className="nav-link active fw-medium text-white"
        aria-current="page"
        href="#"
      >
        Youtube
      </a>
      <a className="nav-link text-white" href="#">
        Home
      </a>
      <a className="nav-link text-white" href="#">
        About
      </a>
    </nav>
  );
}

export default Nav;
