import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Login/Firebase/Firebase.init"; 
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Appointment = () => {
  const { user } = useAuth();
  const [value, setValue] = useState(new Date().toISOString().slice(0, 16));
  const [docName, setDocName] = useState("");
  const [problem, setProblem] = useState("");
  const [showModal, setShowModal] = useState(false);  
  const [modalMessage, setModalMessage] = useState("");  

  const handleChange = (e) => {
    setDocName(e.target.value);
  };

  const handleProblemChange = (e) => {
    setProblem(e.target.value);
  };

  const saveAppointment = async (appointmentData) => {
    try {
      const docRef = await addDoc(collection(db, "appointments"), appointmentData);
      console.log("Appointment saved with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding appointment: ", error);
      throw error;
    }
  };

  const handleConfirm = async () => {
    console.log('handleConfirm called');
    if (!user) {
      setModalMessage("Please login first to book an appointment.");
      setShowModal(true);
      return;
    }
    if (!docName) {
      setModalMessage("Please select a doctor.");
      setShowModal(true);
      return;
    }
    if (!problem.trim()) {
      setModalMessage("Please enter your problem.");
      setShowModal(true);
      return;
    }

    const appointmentData = {
      userId: user.uid,
      userName: user.displayName,
      userEmail: user.email,
      doctorId: docName,
      appointmentDate: value,
      problemType: problem,
      createdAt: new Date(),
    };

    try {
      await saveAppointment(appointmentData);
      setModalMessage("Your Appointment is Done. You will receive an email ASAP.");
      setShowModal(true);
       
      setDocName("");
      setValue(new Date().toISOString().slice(0, 16));
      setProblem("");
    } catch (error) {
      setModalMessage("Failed to book appointment. Please try again later.");
      setShowModal(true);
    }
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
          <select className="form-select" value={docName} onChange={handleChange}>
            <option value="">None</option>
            <option value="10">Dr. Neha A Agrawal</option>
            <option value="11">Dr. Vrushali Naik</option>
            <option value="12">Dr. Tejaswini Manogna</option>
            <option value="13">Dr. Aditya Gupta</option>
            <option value="14">Dr. Vivek k Bansode</option>
            <option value="16">Dr. Pratima J Singh</option>
            <option value="17">Dr. Amit Lanke</option>
            <option value="18">Dr. Johnny Pandit</option>
            <option value="19">Dr. Sandip Nehe</option>
          </select>
        </div>

        {/* User name */}
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" value={user?.displayName || ""} readOnly />
        </div>

        {/* User email */}
        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input type="email" className="form-control" value={user?.email || ""} readOnly />
        </div>

        {/* Appointment date */}
        <div className="mb-3">
          <label className="form-label">Appointment Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={value}
            min={new Date().toISOString().slice(0, 16)}
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
            value={problem}
            onChange={handleProblemChange}
          />
        </div>

        {/* Confirm button */}
        <button
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={handleConfirm}
        >
          <i className="bi bi-plus-circle"></i> Confirm
        </button>
      </div>

       
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Appointment;
