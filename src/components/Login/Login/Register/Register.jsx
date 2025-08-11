import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";
import UserProfile from "../UserProfile/UserProfile";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Register = () => {
  const {
    user,
    singInUsingGoogle,
    singInUsingFacebook,
    singInUsingGithub,
    handleConfirmPass,
    handleRegister,
    handleUserName,
    handleEmail,
    handlePass,
    error,
    toggleLogin,
  } = useAuth();

  const [localError, setLocalError] = useState("");

  useEffect(() => {
    console.log("Current user:", user);
  }, [user]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!validateEmail(email)) {
      setLocalError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    setLocalError("");
    handleRegister(e);
  };

  return (
    <Container className="mt-5 mb-5">
      {user?.email ? (
        <UserProfile />
      ) : (
        <div className="text-center">
          <div
            className="d-flex flex-column align-items-center"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <div
              className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="bi bi-lock-fill text-white fs-3"></i>
            </div>
            <h3 className="mt-3 mb-4">Sign up</h3>

            <Form onSubmit={onSubmitHandler}>
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={handleUserName}
                      placeholder="First Name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  onChange={handleEmail}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePass}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleConfirmPass}
                  required
                />
              </Form.Group>

              {(error || localError) && (
                <p className="text-danger">{error || localError}</p>
              )}

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100 mb-3">
                Register
              </Button>

              <div className="Login-btns">
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => toggleLogin(false)}
                >
                  <Link className="body-link-text-style" to="/login">
                    Already have an account? Login
                  </Link>
                </Button>
              </div>

              <div className="Login-btns mt-3">
                <GoogleButton type="dark" onClick={singInUsingGoogle} />
              </div>

              <div className="Login-btns mt-3">
                <Button
                  onClick={singInUsingFacebook}
                  style={{ backgroundColor: "#4267B2", border: "none" }}
                  className="me-2"
                >
                  <FaFacebook /> Facebook
                </Button>
                <span className="align-self-center mx-2">Or</span>
                <Button
                  onClick={singInUsingGithub}
                  style={{ backgroundColor: "#171515", border: "none" }}
                >
                  <FaGithub /> GitHub
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Register;
