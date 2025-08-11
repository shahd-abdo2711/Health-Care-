import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useData from "../../../Hooks/useData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceDetails.css"; 

const ServiceDetails = () => {
  const { servId } = useParams();
  const [service, setService] = useState(null);
  const mainData = useData();
  const services = mainData[0];

  useEffect(() => {
    if (services.length > 0) {
      const servDetails = services.find(
        (item) => item.id === parseInt(servId)
      );
      setService(servDetails);
    }
  }, [services, servId]);

  if (!service) {
    return (
      <div className="text-center p-5">
        <h4>Loading service details...</h4>
      </div>
    );
  }

  return (
    <div className="bg-light text-center p-4">
      <div className="container">
        <h6 className="mt-3 mb-2 fw-bold text-primary">Why Choose Our Medical</h6>
        <h5 className="mb-5 fw-bold">
          Breakthrough in Comprehensive, Flexible Care Delivery Models
        </h5>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm service-card">
              <img
                src={service.service_img}
                className="card-img-top"
                alt="Service"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="card-body d-flex align-items-center">
                <img
                  src={service.icon}
                  alt="icon"
                  className="me-2 rounded-circle border border-2 border-danger"
                  style={{ width: "40px", height: "40px" }}
                />
                <h5 className="card-title mb-0">
                  Consult for {service.treatment}
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text text-justify">{service.description}</p>
                <h6 className="fw-bold">Consult fee {service.price}</h6>
                <Link to="/appointment" className="btn btn-primary mt-3">
                  Make an Appointment <i className="bi bi-plus-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link to="/home#home" className="btn btn-secondary mt-5">
          <i className="bi bi-house-door"></i> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
