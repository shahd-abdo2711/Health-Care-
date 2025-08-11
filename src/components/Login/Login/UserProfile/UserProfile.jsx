import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { Card, Row, Col, Image, Button, ListGroup, Spinner } from "react-bootstrap";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase.init";  
const UserProfile = () => {
  const { user, logout } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user) {
        setAppointments([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const q = query(collection(db, "appointments"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const userAppointments = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(userAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user]);

  if (!user) {
    return <p className="text-center mt-5">Please login first.</p>;
  }

  return (
    <Card className="shadow p-4 mx-auto my-5" style={{ maxWidth: "600px" }}>
      <Row className="align-items-center">
        <Col md={8} xs={12}>
          <h5 className="mb-3">
            Welcome to our Hospital, {user.displayName || "User"}
          </h5>
          <p className="text-muted mb-0">{user.email}</p>

          <Button variant="danger" className="mt-3" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
        <Col
          md={4}
          xs={12}
          className="d-flex justify-content-center mt-3 mt-md-0"
        >
          <Image
            src={user.photoURL || "/default-profile.png"}  
            alt={user.displayName || "User"}
            roundedCircle
            style={{
              border: "2px solid #f48fb1",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#f48fb1",
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>

      <hr />

      <h5 className="mt-4 mb-3">Your Appointments</h5>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ListGroup>
          {appointments.map((appt) => (
            <ListGroup.Item key={appt.id}>
              <strong>Doctor ID:</strong> {appt.doctorId} <br />
              <strong>Date:</strong> {new Date(appt.appointmentDate).toLocaleString()} <br />
              <strong>Problem:</strong> {appt.problemType}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
};

export default UserProfile;
