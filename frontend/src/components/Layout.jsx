import React from "react";
import "./Layout.css";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";
function Layout({ children }) {
  return (
    <>
      <Header />
      <Row>
        <Col>
          <div className="nav">NAV</div>
        </Col>
        <Col xs={6}>
          <div className="content">{children}</div>
        </Col>
        <Col>
          <div className="aside">ASIDE</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="footer">FOOTER</div>
        </Col>
      </Row>
    </>
  );
}

export default Layout;
