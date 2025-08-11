 import React from "react";
import Banner from "./Banner/Banner";
import About from "../About/About";
import OurExperts from "./OurExperts/OurExperts";
import Whyus from "./Whyus/Whyus";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegEnvelope, FaRegPaperPlane } from "react-icons/fa";
import swal from "sweetalert";
import "./Home.css";

const Home = () => {
  const mailSendBtn = () => {
    return swal(
      "WOW!! Your subscription is done. You will get an update when we set up our mail server",
      {
        button: false,
        icon: "success",
      }
    );
  };

  return (
    <div id="home">
      <Banner />
      <Whyus />

      <div className="container content-container">
        <About />
      </div>

      <OurExperts />

      <div className="p-5 mb-2 text-center">
        <h5 className="fw-bold mb-4">
          <FaRegPaperPlane className="text-primary me-2" />
          Subscribe for our latest services and details
        </h5>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-3">
          <div className="input-group" style={{ maxWidth: "500px" }}>
            <span className="input-group-text">
              <FaRegEnvelope />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Mail Address"
            />
          </div>
          <button
            className="btn btn-outline-primary d-flex align-items-center gap-2"
            onClick={mailSendBtn}
          >
            <FaRegPaperPlane />
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
