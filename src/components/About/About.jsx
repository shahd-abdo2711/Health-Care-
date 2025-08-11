import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="d-flex flex-column min-vh-70"
      style={{ minHeight: "70vh" }}
    >
      <div className="container-fluid px-4">
        <h4 className="text-primary text-center my-3">
          All-in-One Website Health Solution
        </h4>

        <h6 className="text-center my-3">
          10+ Years Of Experience in Medical Services
        </h6>

        <p
          className="my-4 px-3"
          style={{ textAlign: "justify" }}
        >
          One big thing I wanted to highlight is that our methodology is fairer
          to hospitals and health systems than horizontal sites. Health Care has
          many hospital reviews from real users, but the way we survey our
          patient users has less “motivated complainer bias.” Thus, I think the
          CareDash hospital reviews provide a more accurate view of real
          patient satisfaction.
          <br />
          <br />
          We think something between 8 to 9 out of 10 patients walks out of the
          hospital satisfied, but typical web reviews make hospitals look much
          worse. This negative bias in hospital reviews is a big deal because
          people are walking into their care journey with a negative mindset
          about the care they are going to get, and that’s not good. The scale
          is just off because of the motivated complainers.
          <br />
          <br />
          Be sure to leave a review on <strong>Health Care</strong> of any
          hospital you’ve visited, whether you’ve had a negative or a positive
          experience. Share your suggestions about writing hospital reviews in
          the comments below or message us on LINKEDIN{" "}
          <a
            href="https://www.linkedin.com/in/shahd-hussein-473a56378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@Shahd</strong>
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
