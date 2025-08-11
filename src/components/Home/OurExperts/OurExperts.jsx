 
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import useDocData from "../../../Hooks/useDocData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
 
const OurExperts = () => {
  const [ourExperts, setOurExperts] = useState([]);
  const mainData = useDocData();
  let experts = mainData[0];

  useEffect(() => {
    if (experts.length > 1) {
      const serv = experts?.slice(0, 3);
      setOurExperts(serv);
    }
  }, [experts]);

  return (
    <div className="bg-light py-4 text-center">
      <div className="container">
        <h6 className="fw-bold mt-2 mb-2 text-primary">
          Meet Our Expert Team
        </h6>
        <h5 className="fw-bold mb-5">
          We are committed to ensure you the best service
        </h5>

        {experts?.length > 1 ? (
          <div className="row g-4">
            {ourExperts?.map((expert) => (
              <div
                key={expert.doc_id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto"
              >
                <div
                  className="card shadow-lg border-0"
                  style={{
                    maxWidth: "345px",
                    margin: "auto",
                    transition: "0.5s all ease-in-out",
                  }}
                >
                  <div className="card-img-top overflow-hidden text-center">
                    <img
                      src={expert?.doc_img}
                      alt="doctor"
                      className="rounded-circle img-fluid"
                      style={{
                        width: "256px",
                        height: "256px",
                        objectFit: "cover",
                        transition: "0.5s all ease-in-out",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      Specialist in {expert.specialize}
                    </h5>
                    <h6 className="text-muted">Dr. {expert.name}</h6>
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
          <HashLink smooth to="/doctors#doctors" className="text-decoration-none fw-bold text-primary">
            Meet Our Expert Team
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
