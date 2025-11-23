// ApplySpeaker.jsx
import React, { useState } from "react";
import "./ApplySpeaker.css";
import "./Login.css";
import "./UpcomingConferences.css";
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ApplySpeaker() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-container">

      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a> |
          <a href="tel:+919442417477" className="phone-link"> +91 9442417477</a>
        </div>
        <div><span className="hidden-placeholder">f</span></div>
        <div className="top-icons">
          <a><FaFacebookF /></a>
          <a><FaInstagram /></a>
          <a><FaTwitter /></a>
          <a><FaLinkedinIn /></a>
          <a><FaYoutube /></a>
        </div>
      </div>

      {/* NAVBAR */}
            <div className="navbar">
              <img src={intelmeet} alt="Logo" className="logo" />
              <ul>
                <li><a href="#">Home</a></li>
                <li><Link className="nav-link" to="/about">About Us</Link></li>
                <li><Link className="nav-link" to="/upcoming-conferences">Upcoming Conferences</Link></li>
                <li className="dropdown">
                  <span className="dropdown-toggle">Paper Submission ▾</span>
      
                  <div className="dropdown-menu">
                    <Link className="nav-link" to="/papersubmission">📄 Submission Form</Link>
                    <Link className="nav-link" to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
                  </div>
                </li>
      
      
      
                <li><Link className="nav-link" to="/benefits">Benifits</Link></li>
                <li><Link className="nav-link" to="/speaker">Speaker</Link></li>
                <li><Link className="nav-link" to="/committee">Committee</Link></li>
                <li><Link className="nav-link" to="/publications">Publications</Link></li>
                <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
              </ul>
      
              <Link to="/registration-fees" className="btn-register">Registration</Link>
            </div>

      {/* HERO */}
      <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="uc-hero-content">
          <h1>Apply to Become a Speaker</h1>
          <p>Join as a speaker and inspire global researchers</p>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <div className="content-sidebar-wrapper">

        {/* FORM LEFT SIDE */}
        <div className="content-main">

          <section className="apply-header">
            <h1 className="apply-title">Apply to Become a Speaker</h1>

            <p className="apply-desc">
              Please complete the form below to apply as a speaker for upcoming IntelMeet conferences.
            </p>

            {/* REQUIREMENT BUTTON */}
            <button className="req-button" onClick={() => setShowModal(true)}>
              View Speaker Requirements
            </button>
          </section>

          <div className="form-section">
            <h2 className="section-title">Speaker Information</h2>
            <div className="form-box">
              <label>Full Name</label>
              <input type="text" placeholder="e.g., Mathew William" />
            </div>

            <h2 className="section-title">Contact Information</h2>
            <div className="form-box">
              <label>Email Address</label>
              <input type="email" placeholder="e.g., mathew.william@example.com" />

              <label>Country</label>
              <input type="text" placeholder="Select Country" />

              <label>Phone Number</label>
              <input type="text" placeholder="e.g., +1-202-555-0147" />
            </div>

            <h2 className="section-title">Professional Details</h2>
            <div className="form-box">
              <label>Institution / Organization</label>
              <input type="text" placeholder="e.g., Westbridge University" />

              <label>Department / Field of Expertise</label>
              <input type="text" placeholder="e.g., Computer Science / Data Analytics" />

              <label>Current Position</label>
              <input type="text" placeholder="e.g., Assistant Professor" />

              <label>Years of Experience</label>
              <input type="text" placeholder="e.g., 5 Years" />

              <label>LinkedIn Profile (Optional)</label>
              <input type="text" placeholder="e.g., https://linkedin.com/in/example" />
            </div>

            <h2 className="section-title">Presentation Details</h2>
            <div className="form-box">
              <label>Proposed Presentation Title</label>
              <input type="text" placeholder="e.g., Advancements in Data-Driven Computing" />

              <label>Short Summary (3–4 lines)</label>
              <textarea placeholder="Brief summary..."></textarea>
            </div>

            <h2 className="section-title">Uploads</h2>
            <div className="form-box">
              <label>Upload Professional Photo</label>
              <input type="file" />

              <label>Upload Resume / CV</label>
              <input type="file" />
            </div>

            <div className="submit-btn-box">
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar-links">
                  <h3>Quick Link</h3>
                  <ul>
                    <li><Link className="nav-link" to="/benefits">Key Benefits of Participation</Link></li>
                    <li><Link className="nav-link" to="/apply-speaker">Apply to Become a Speaker</Link></li>
                    <li><Link className="nav-link" to="/instructions">Instructions for Participants</Link></li>
                    <li><Link className="nav-link" to="/papersubmission-guidelines">Author Guidelines</Link></li>
                    <li><Link className="nav-link" to="/committee-application">Apply for Committee Member</Link></li>
                    <li><Link className="nav-link" to="/faq">Frequently Asked Questions (FAQs)</Link></li>
                  </ul>
                </div>

      </div>

      <Footer />

      {/* ================================
          POPUP MODAL
      ================================= */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>

            <h2 className="modal-title">Speaker Requirements</h2>

            <h3 className="modal-sub">Eligibility Criteria</h3>
            <ul>
              <li>Be associated with a university, research institution, or recognized organization.</li>
              <li>Have academic or industry experience related to the topic.</li>
              <li>Ensure content is original and suitable for conference presentation.</li>
              <li>Be confident in English communication.</li>
              <li>Be available on the scheduled event date.</li>
            </ul>

            <h3 className="modal-sub">Roles & Responsibilities</h3>
            <ul>
              <li>Deliver a clear and structured presentation.</li>
              <li>Join at least 30 minutes early for tech checks.</li>
              <li>Respond to audience questions during Q&A.</li>
              <li>Submit presentation file in advance if required.</li>
              <li>Maintain professional conduct throughout the session.</li>
            </ul>

          </div>
        </div>
      )}

    </div>
  );
}
