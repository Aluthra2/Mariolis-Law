import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css"; 
import logo from "../assets/ml_logo.png"; 

const Header = () => {
  return (
    <header className={styles.toolbar}>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ height: "50px" }} />{" "}
        {/* Adjust styling as needed */}
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link> 
        <Link to="/practice-areas">Practice Areas</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
