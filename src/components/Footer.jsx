import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import TermsPopup from "./TermsPopup"; // Import popup

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="footer">
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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/upcoming-conferences">Upcoming Conferences</Link></li>
              <li><Link to="/registration-fees">Registration</Link></li>
              <li><Link to="/benefits">Benefits of Participation</Link></li>
              <li><Link to="/committee-application">Apply for Committee Member</Link></li>
              <li><Link to="/apply-speaker">Apply for Speaker</Link></li>
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
              <strong>Phone:</strong> +91 94424 17477
            </p>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
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
