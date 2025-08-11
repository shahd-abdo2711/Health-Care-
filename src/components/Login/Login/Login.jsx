import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { FaFingerprint } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    handlePasswordReset,
    user,
    setUser,
    mail,
    handleRegister,
    handleEmail,
    handlePass,
    error,
    setError,
    toggleLogin,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const redirect_url = location.state?.from || "/profile";

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleRegister(e);
  };

  return (
    <Container className="mt-5 mb-5">
      {user?.email ? (
        <div className="text-center">
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
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
              <FaFingerprint size={30} className="text-white" />
            </div>
            <h3 className="mt-3 mb-4">Sign In</h3>

            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  onBlur={handleEmail}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onBlur={handlePass}
                  required
                />
                {error && <small className="text-danger">{error}</small>}
              </Form.Group>

              {mail && (
                <Button
                  variant="link"
                  className="p-0 mb-3"
                  onClick={handlePasswordReset}
                >
                  Forget Password? Reset now
                </Button>
              )}

              <Button type="submit" variant="primary" className="w-100 mb-3">
                <FaFingerprint className="me-2" />
                Login
              </Button>
            </Form>

            <div>
              <Link
                to="/register"
                className="body-link-text-style"
                onClick={() => toggleLogin(true)}
              >
                New here? Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Login;
