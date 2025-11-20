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
            The <b>ICELL-25</b>, hosted by the <b>Society for Education (SFE)</b>,
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Conference</a></li>
            <li><a href="#">Registration</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Submission</a></li>
            <li><a href="#">Apply for Committee</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@sfe.net.in">info@sfe.net.in</a>
          </p>
          <p>
            <strong>Phone:</strong> +91 9677007228
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
