 
import React from "react";
import useData from "../../Hooks/useData";
import { useNavigate } from "react-router-dom"; 
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { HouseFill, ArrowRightCircleFill } from "react-bootstrap-icons";
import "./Services.css";  

const Services = () => {
  const services = useData();
  const navigate = useNavigate();  

  const ServiceDetails = (servId) => {
    navigate(`/services/details/${servId}`);  
    console.log(servId);
  };

  return (
    <div
      id="services"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fce4ec",
        padding: "1rem",
        marginBottom: "1rem",
        marginTop: "4rem",
        textAlign: "center",
      }}
    >
      {services[0].length > 1 ? (
        <Container fluid>
          <h6 className="mt-3 mb-3 fw-bold">Our Services</h6>

          <Row className="g-4 justify-content-center">
            {services[0]?.map((service) => (
              <Col key={service.id} xs={12} sm={6} md={6} lg={4}>
                <Card
                  className="shadow-sm service-card mx-auto"
                  style={{
                    maxWidth: "345px",
                    transition: "0.5s all ease-in-out",
                  }}
                >
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={service?.service_img}
                      style={{
                        height: "240px",
                        objectFit: "cover",
                        transition: "0.5s ease-in-out",
                      }}
                      className="service-img"
                    />
                  </div>
                  <Card.Body className="text-center">
                    <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
                      <img
                        src={service?.icon}
                        alt="service icon"
                        style={{ width: "40px", marginRight: "0.5rem" }}
                      />
                      <Card.Title className="mb-0">
                        Consult for {service.treatment}
                      </Card.Title>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white text-center">
                    <Button
                      variant="primary"
                      onClick={() => ServiceDetails(service.id)}
                    >
                      <ArrowRightCircleFill className="me-2" />
                      See More Details...
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-5 mb-5">
            <HashLink smooth to="/home#home" className="text-decoration-none">
              <Button variant="primary">
                <HouseFill className="me-2" />
                Back to Home
              </Button>
            </HashLink>
          </div>
        </Container>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Services;
