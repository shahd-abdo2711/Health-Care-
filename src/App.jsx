import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from "./components/About/About";
import Header from "./components/Header/Header/Header";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Footer from "./components/Header/Footer/Footer";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register/Register";
import Authprovider from "./Context/Authprovider";
import Services from "./components/Services/Services";
import Doctors from "./components/Services/Doctors/Doctors";
import Appointment from "./components/Services/Appointment/Appointment";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivetRoute/PrivetRoute";
import Contact from "./components/Contact/Contact";
import UserProfile from "./components/Login/Login/UserProfile/UserProfile"

import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

   
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
      document.body.classList.add("bg-light", "text-dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Authprovider>
      <BrowserRouter>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className={`container my-4 ${darkMode ? "text-light" : "text-dark"}`}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/home" element={<Home darkMode={darkMode} />} />

            <Route
              path="/doctors"
              element={
                <PrivateRoute>
                  <Doctors darkMode={darkMode} />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />

            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment darkMode={darkMode} />
                </PrivateRoute>
              }
            />

            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route
              path="/services/details/:servId"
              element={
                <PrivateRoute>
                  <ServiceDetails darkMode={darkMode} />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>

        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
