 
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";  
import "./NavBar.css";

const pages = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const { user } = useAuth();

  return (
    <Navbar
      expand="md"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className={`fw-bold ${darkMode ? "text-light" : "text-primary"}`}
        >
          Health Care
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapseable nav links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {pages.map((page) => (
              <Nav.Link
                as={Link}
                key={page.label}
                to={page.to}
                className={`fw-medium mx-2 ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                {page.label}
              </Nav.Link>
            ))}

            {user?.email ? (
              <Nav.Link
                as={Link}
                to="/UserProfile"
                title="User Profile"
                className={darkMode ? "text-light" : "text-dark"}
              >
                <FaUserCircle size={24} />
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className={`fw-medium mx-2 ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  className={`fw-medium mx-2 ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                >
                  Register
                </Nav.Link>
              </>
            )}

            {/* Dark/Light mode toggle button */}
            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={toggleDarkMode}
              className="ms-3"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
