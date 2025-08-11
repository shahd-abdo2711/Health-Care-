
import React, { useState, useEffect } from 'react';
import './Banner.css';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Banner = () => {
    const items = [
        {
            name: "You are just one click away from your healthy life",
            description: "Probably the most random thing you have ever seen!",
            img: "https://img.freepik.com/free-photo/close-up-doctor-is-showing-medical-analytics-data_33799-4417.jpg?w=996"
        },
        {
            name: "Consult with experts Online 24/7",
            description: "Get Online support from our expert Doctor 24/7 and lead a healthy life",
            img: "https://img.freepik.com/free-photo/make-appointment-see-doctor-online-diagnosis-treatmentfamily-health-care_537132-1364.jpg?w=996"
        },
        {
            name: "Check Your Health Condition Regularly",
            description: "Up to date with your health condition, prevention is always better than cure",
            img: "https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?w=996"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="card border-0 shadow">
            <div className="banner-container position-relative">
                <img 
                    src={items[currentIndex].img} 
                    alt="" 
                    className="img-fluid w-100"
                />
                <div className="banner-text tracking-in-expand position-absolute top-50 start-50 translate-middle text-center text-light">
                    <h5>{items[currentIndex].name}</h5>
                    <p>{items[currentIndex].description}</p>
                    <HashLink smooth to="/appointment#appointment" className="text-style">
                        <button className="btn btn-primary mt-2 d-flex align-items-center justify-content-center gap-2">
                            Make an Appointment
                            <i className="bi bi-plus-circle-fill"></i>
                        </button>
                    </HashLink>
                </div>
            </div>

            <div className="dots d-flex justify-content-center my-3">
                {items.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Banner;
