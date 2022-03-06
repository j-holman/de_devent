import React from "react";
import { MdAccountCircle, MdLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
function Header() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <NavbarBrand href="/">
          <MdLogin />
          Devent
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavItem className="m-10">
              <NavLink to="/login">
                <Button variant="secondary">
                  <MdLogin />
                  Sign In
                </Button>
              </NavLink>
            </NavItem>
            <NavItem className="m-10">
              <NavLink to="/register">
                <Button variant="secondary">
                  <MdAccountCircle />
                  Sign Up
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Header;
