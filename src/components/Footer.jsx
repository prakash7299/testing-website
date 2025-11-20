import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import sfeLogo from "../assets/logo.png"; // replace with your logo path

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <p>
            IntelMeet Global Conferences organizes international academic conferences supporting global research presentation and publication
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Upcoming Conferences</a></li>
            <li><a href="#">Registration</a></li>
            <li><a href="#">Benefits of Participation</a></li>
            <li><a href="#">Apply for Committee</a></li>
            <li><a href="#">Apply for Speaker</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@sfe.net.in">intelmeetglobal@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +91 94424 17477
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SFE - All rights reserved.</p>
        <p>
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
