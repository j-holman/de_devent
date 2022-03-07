import React from "react";
import "./Layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";
function Layout({ children }) {
  return (
    <>
      <Header />
      <Row>
        <Col className="d-none d-lg-block p2">
          <Sidebar />
        </Col>
        <Col lg={6}>
          <div>{children}</div>
        </Col>
        <Col className="d-none d-lg-block p2">
          <div className="aside">ASIDE</div>
        </Col>
      </Row>
    </>
  );
}

export default Layout;
