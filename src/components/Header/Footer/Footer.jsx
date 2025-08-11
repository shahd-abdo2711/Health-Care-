import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHospitalSymbol
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';  
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-secondary text-light pt-4 pb-2">
      <Container>
        <Row>
          {/* Hospital Info */}
          <Col md={4} className="text-center mb-3">
            <div className="d-flex justify-content-center align-items-center mb-2">
              <div
                className="rounded-circle bg-white d-flex justify-content-center align-items-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                <FaHospitalSymbol className="text-primary" />
              </div>
              <h6 className="m-0">HEALTH CARE HOSPITALS</h6>
            </div>
            <hr className="bg-light" />

            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="rounded-circle bg-pink d-flex justify-content-center align-items-center me-2">
                <FaMapMarkerAlt />
              </div>
              <a
                href="https://maps.app.goo.gl/rHP7oa564FakXewb7?g_st=aw"
                className="text-light text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Benha, Egypt.
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="rounded-circle bg-pink d-flex justify-content-center align-items-center me-2">
                <FaEnvelope />
              </div>
              <a
                href="mailto:shahdhusseinabdo@gmail.com"
                className="text-light text-decoration-none"
              >
                shahdhusseinabdo@gmail.com
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="rounded-circle bg-pink d-flex justify-content-center align-items-center me-2">
                <FaPhone />
              </div>
              <a href="tel:+919657601501" className="text-light text-decoration-none">
                +91 9657601501
              </a>
            </div>
          </Col>

          {/* Services */}
          <Col md={4} className="mb-3">
            <h6 className="text-center mb-3">Our Services</h6>
            <div className="d-flex flex-column align-items-center">
              <Link to="/doctors#doctors" className="text-light mb-2" smooth>
                Find a Doctor
              </Link>
              <Link to="/services#services" className="text-light mb-2" smooth>
                All Services
              </Link>
              <Link to="/appointment#appointment" className="text-light mb-2" smooth>
                Make An Appointment
              </Link>
              <Link to="/register" className="text-light mb-2">
                Register For Service
              </Link>
            </div>
          </Col>

          {/* Social Media */}
          <Col md={4} className="mb-3">
            <h6 className="text-center mb-3">Find us on social media</h6>
            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="rounded-circle bg-pink d-flex justify-content-center align-items-center me-2">
                <FaInstagram />
              </div>
              <a
                href="https://www.instagram.com"
                className="text-light text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shahd on Instagram
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="rounded-circle bg-pink d-flex justify-content-center align-items-center me-2">
                <FaLinkedin />
              </div>
              <a
                href="https://www.linkedin.com/in/shahd-hussein-473a56378"
                className="text-light text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shahd on LinkedIn
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="rounded-circle bg-pink d-flex justify-content-center align-items-center me-2">
                <FaGithub />
              </div>
              <a
                href="https://github.com/shahd-abdo2711"
                className="text-light text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shahd on GitHub
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-light" />
        <p className="text-center m-0">
          Developed with 🖤 by{" "}
          <strong>
            <a
              href="https://github.com/shahd-abdo2711"
              className="text-light text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shahd Hussein
            </a>
          </strong>{" "}
          © {new Date().getFullYear()}.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
