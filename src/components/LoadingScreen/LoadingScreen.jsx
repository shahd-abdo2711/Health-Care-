import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="rhombus">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <div className="text mt-3">
        Loading.....
      </div>
    </div>
  );
};

export default LoadingScreen;
