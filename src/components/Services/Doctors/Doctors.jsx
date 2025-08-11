import React from "react";
import { HashLink } from "react-router-hash-link";
import useDocData from "../../../Hooks/useDocData";
import swal from "sweetalert";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";
import "./Doctors.css";

const Doctors = () => {
  const doctors = useDocData();

  const swalAlert = () => {
    return swal("Write the data here:", {
      content: "input",
    }).then((value) => {
      swal(
        `Your Appointment data is :➥ ${value} You will get a confirmation Email soon if the slot is free. We are trying to make it automated asap. Till then be patient`
      );
    });
  };

  return (
    <div id="doctors" className="doctors-section py-5">
      {doctors[0].length !== 0 ? (
        <>
          <div className="container text-center">
            <h5 className="fw-bold my-3">
              Our team always ready to assist you
            </h5>

            <div className="row g-4">
              {doctors[0]?.map((doctor) => (
                <div
                  key={doctor.doc_id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="card doctor-card shadow-lg mx-auto">
                    <img
                      src={doctor?.doc_img}
                      alt="doctor"
                      className="rounded-circle mx-auto mt-3 doctor-img"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Specialist in {doctor.specialize}
                      </h5>
                      <h6 className="text-muted">Dr. {doctor.name}</h6>
                    </div>
                    <div className="card-footer bg-transparent text-center">
                      <button
                        onClick={swalAlert}
                        className="btn btn-primary mt-2 mb-1 check-button"
                      >
                        Make an Appointment <i className="bi bi-plus-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <HashLink smooth to="/home#home" className="text-style">
              <button className="btn btn-primary mt-5 mb-5">
                <i className="bi bi-house-door"></i> Back to Home
              </button>
            </HashLink>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Doctors;
