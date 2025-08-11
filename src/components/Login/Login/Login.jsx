import React from "react";
import GoogleButton from "react-google-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaFingerprint, FaSignInAlt } from "react-icons/fa";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const {
    singInUsingGoogle,
    handlePasswordReset,
    user,
    setUser,
    mail,
    singInUsingFacebook,
    singInUsingGithub,
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

  const handleGoogleSignIn = () => {
    singInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(redirect_url);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleFacebookSignIn = () => {
    singInUsingFacebook()
      .then((result) => {
        setUser(result.user);
        navigate(redirect_url);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleGithubSignIn = () => {
    singInUsingGithub()
      .then((result) => {
        setUser(result.user);
        navigate(redirect_url);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center">
      {user?.email ? (
        <div className="text-center">
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-5 shadow p-4 rounded bg-white">
            <div className="text-center mb-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                <FaSignInAlt size={20} />
              </div>
              <h3 className="mt-3">Sign In</h3>
            </div>

            <form>
              <div className="mb-3">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  onBlur={handleEmail}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onBlur={handlePass}
                  required
                />
                {error && <small className="text-danger">{error}</small>}
              </div>
              {mail && (
                <button
                  type="button"
                  className="btn btn-link body-link-text-style p-0"
                  onClick={handlePasswordReset}
                >
                  Forget Password? Reset now
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary w-100 mt-3"
                onClick={handleRegister}
              >
                <FaFingerprint className="me-2" /> Login
              </button>
            </form>

            <div className="text-center mt-3">
              <Link
                to="/register"
                className="body-link-text-style"
                onClick={() => toggleLogin(true)}
              >
                New here? Register
              </Link>
            </div>

            <div className="text-center mt-4">
              <GoogleButton
                className="google-btn mx-auto"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>

            <div className="Login-btns mt-4">
              <button
                className="btn btn-primary me-2"
                onClick={handleFacebookSignIn}
                style={{ backgroundColor: "#4267B2" }}
              >
                <FaFacebookF className="me-1" /> Facebook
              </button>
              <button
                className="btn text-white"
                style={{ backgroundColor: "#171515" }}
                onClick={handleGithubSignIn}
              >
                <FaGithub className="me-1" /> GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
