 
import React, { useState } from "react";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";
import "bootstrap/dist/css/bootstrap.min.css";

const Appointment = () => {
  const { user } = useAuth();
  const [value, setValue] = useState(new Date().toISOString().slice(0, 16));
  const [docName, setDocName] = useState("");

  const handleChange = (e) => {
    setDocName(e.target.value);
  };

  const swalAlert = () => {
    swal("Your Appointment is Done. You will receive an email ASAP.", {
      button: false,
      icon: "success",
    });
  };

  return (
    <div id="appointment" className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        <div className="text-center mb-5">
          <h5>Select your time and date for Appointment</h5>
        </div>

        {/* Doctor name */}
        <div className="mb-4">
          <label className="form-label">Select Doctor Name</label>
          <select
            className="form-select"
            value={docName}
            onChange={handleChange}
          >
            <option value="">None</option>
            <option value={10}>Dr. Neha A Agrawal</option>
            <option value={11}>Dr. Vrushali Naik</option>
            <option value={12}>Dr. Tejaswini Manogna</option>
            <option value={13}>Dr. Aditya Gupta</option>
            <option value={14}>Dr. Vivek k Bansode</option>
            <option value={16}>Dr. Pratima J Singh</option>
            <option value={17}>Dr. Amit Lanke</option>
            <option value={18}>Dr. Johnny Pandit</option>
            <option value={19}>Dr. Sandip Nehe</option>
          </select>
        </div>

        {/* User name */}
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            value={user.displayName}
            readOnly
          />
        </div>

        {/* User email */}
        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            readOnly
          />
        </div>

        {/* Appointment date */}
        <div className="mb-3">
          <label className="form-label">Appointment Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={value}
            min="2024-01-01T00:00"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {/* Problem type */}
        <div className="mb-3">
          <label className="form-label">Problem Type</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your problem"
          />
        </div>

        {/* Confirm button */}
        <button
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={swalAlert}
        >
          <i className="bi bi-plus-circle"></i> Confirm
        </button>
      </div>
    </div>
  );
};

export default Appointment;
