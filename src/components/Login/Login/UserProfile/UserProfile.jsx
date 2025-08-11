 
import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import { Card, Row, Col, Image } from "react-bootstrap";
 
const UserProfile = () => {
  const { user } = useAuth();

  return (
    <Card className="shadow p-4 mx-auto my-5" style={{ maxWidth: "600px" }}>
      <Row className="align-items-center">
        <Col md={8} xs={12}>
          <h5 className="mb-3">
            Welcome to our Hospital, {user.displayName}
          </h5>
          <p className="text-muted mb-0">{user.email}</p>
        </Col>
        <Col
          md={4}
          xs={12}
          className="d-flex justify-content-center mt-3 mt-md-0"
        >
          <Image
            src={user.photoURL}
            alt={user.displayName}
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
    </Card>
  );
};

export default UserProfile;
