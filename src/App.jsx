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

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Header />

        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route
              path="/doctors"
              element={
                <PrivateRoute>
                  <Doctors />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />

            <Route path="/services" element={<Services />} />
            <Route
              path="/services/details/:servId"
              element={
                <PrivateRoute>
                  <ServiceDetails />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
