import React from "react";
import "./Layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
function Layout({ children }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {user ? (
        <Row>
          <Col className="d-none d-lg-block p2">
            <Sidebar className="sidenav" />
          </Col>
          <Col lg={6}>
            <div>{children}</div>
          </Col>
          <Col className="d-none d-lg-block p2">
            <div className="aside">ASIDE</div>
          </Col>
        </Row>
      ) : (
        <Col>
          <div>{children}</div>
        </Col>
      )}
    </>
  );
}

export default Layout;
