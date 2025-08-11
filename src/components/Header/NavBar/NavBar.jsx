 
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";  
import "./Navbar.css";

const pages = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const CustomNavbar = () => {
  const { user } = useAuth();

  return (
    <Navbar expand="md" bg="light" variant="light" sticky="top" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Health Care
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Nav Links + User Icon */}
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end d-flex align-items-center">
          <Nav className="me-3">
            {pages.map((page) => (
              <Nav.Link
                as={Link}
                key={page.label}
                to={page.to}
                className="fw-medium text-dark mx-2"
              >
                {page.label}
              </Nav.Link>
            ))}
          </Nav>

          {user?.email ? (
            <Link to="/profile" title="User Profile" className="text-dark" style={{ fontSize: "1.5rem" }}>
              <FaUserCircle />
            </Link>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login" className="fw-medium text-dark mx-2">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="fw-medium text-dark mx-2">
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
