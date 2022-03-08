import React from "react";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <NavbarBrand>
          <MdLogout />
          Devent
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          {user ? (
            <Nav className="ms-auto">
              <NavItem className="m-10">
                <Button variant="secondary" onClick={onLogout}>
                  <MdLogin />
                  Logout
                </Button>
              </NavItem>
            </Nav>
          ) : (
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
          )}
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Header;
