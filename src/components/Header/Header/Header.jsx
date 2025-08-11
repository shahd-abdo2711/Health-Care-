import React from "react";
import NavBar from "../NavBar/NavBar";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Header;
