import React, { useState } from "react";
import "./FooterEvent.css";
import { Link } from "react-router-dom";
import TermsPopup from "./TermsPopup"; // Import popup
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";
export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="footerevent">
        <div className="footer-container">

          {/* ---------------- LEFT SECTION ---------------- */}
          <div className="footer-left">
            <p>
              IntelMeet Global Conferences organizes international academic
              conferences supporting global research presentation and
              publication.
            </p>
          </div>

          {/* ---------------- MIDDLE QUICK LINKS ---------------- */}
          <div className="footer-links">
            <h3>Quick Link</h3>
            <ul>
              <li><Link to="/about-event">About Event</Link></li>
              <li><Link to="/callforpaper">Call For Paper</Link></li>
              <li><Link to="/papersubmissionevent">Paper Submission</Link></li>
              <li><Link to="/registration-event">Registration</Link></li>
            </ul>
          </div>

          {/* ---------------- RIGHT CONTACT INFO ---------------- */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@intelmeetglobal.com">
                support@intelmeetglobal.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong> <a href="tel:+919025956834" className="phone-link">+91 9025956834</a>
            </p>

            <div className="social-icons">
              <a href="https://www.facebook.com/IntelMeet/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://x.com/intelmeet" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/@intelmeetglobal" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

        </div>

        {/* ---------------- BOTTOM COPYRIGHT ---------------- */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025 IntelMeet Global Conferences —
            All Rights Reserved.
          </p>

          <p>
            {/* OPEN POPUP */}
            <span
              className="footer-link"
              onClick={() => setShowTerms(true)}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Terms & Conditions
            </span>
          </p>
        </div>
      </footer>

      {/* ---------------- POPUP RENDER ---------------- */}
      {showTerms && (
        <TermsPopup onClose={() => setShowTerms(false)} />
      )}
    </>
  );
}
