import React from "react";
import { MdAccountCircle, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Events</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <MdLogin /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <MdAccountCircle /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
