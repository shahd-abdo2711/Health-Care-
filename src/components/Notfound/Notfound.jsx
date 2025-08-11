import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HouseFill } from 'react-bootstrap-icons';

const Notfound = () => {
  return (
    <div className="container text-center my-4">
      <img
        src="https://i.ibb.co/9Zr4rwK/image.png"
        alt="404 image"
        className="img-fluid mx-auto d-block"
        style={{
          height: '350px',
          width: '450px',
          maxHeight: '300px',
          maxWidth: '400px',
        }}
      />

      <h6 className="my-3">
        404 Page Not Found — Please check the URL
      </h6>

      <Link to="/home" className="btn btn-primary mt-2">
        <HouseFill className="me-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default Notfound;
