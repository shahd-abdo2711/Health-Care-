 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useData from "../../../Hooks/useData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Whyus.css";

const Whyus = () => {
  const [ourServices, setOurServices] = useState([]);
  const mainData = useData();
  let services = mainData[0];

  useEffect(() => {
    if (services.length > 0) {
      const serv = services?.slice(0, 3);
      setOurServices(serv);
    }
  }, [services]);

  return (
    <div className="bg-light py-4 text-center">
      <div className="container">
        <h6 className="fw-bold mt-2 mb-2 text-primary">
          Why Choose Our Medical
        </h6>
        <h5 className="fw-bold mb-5">
          Breakthrough in Comprehensive, Flexible Care Delivery Models
        </h5>

        {services?.length > 1 ? (
          <div className="row g-4">
            {ourServices?.map((service) => (
              <div
                key={service.id}
                className={`col-12 col-md-6 col-lg-4 ${service.class}`}
              >
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{
                    maxWidth: "345px",
                    margin: "auto",
                    transition: "0.5s all ease-in-out",
                  }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={service?.service_img}
                      alt="card service"
                      className="card-img-top"
                      style={{
                        height: "240px",
                        objectFit: "cover",
                        transition: "0.5s all ease-in-out",
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column align-items-center">
                    <img
                      src={service?.icon}
                      alt="service icon"
                      className="rounded-circle mb-2"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h5 className="card-title">
                      Consult for {service.treatment}
                    </h5>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center">
                    <Link to="/services" className="text-decoration-none fw-bold">
                      See More Details...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <div className="text-end mt-4">
          <HashLink
            smooth
            to="/services#services"
            className="text-decoration-none fw-bold text-primary"
          >
            See All services
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
