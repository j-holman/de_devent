import React from "react";
import "./Layout.css";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="nav">NAV</div>
      <div className="content">{children}</div>
      <div className="aside">ASIDE</div>
      <div className="footer">FOOTER</div>
    </div>
  );
}

export default Layout;
