// CommitteeApplication.jsx
import React, { useState } from "react";
import "./CommitteeApplication.css";
import "./Login.css";
import "./UpcomingConferences.css";
import intelmeet from "../assets/intelmeet.jpeg";
import photo from "../assets/confimage-1.jpeg";

import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

export default function CommitteeApplication() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="page-container">

      {/* -------- TOP BAR -------- */}
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

      {/* -------- NAVBAR -------- */}
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

      {/* -------- HERO -------- */}
      <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="uc-hero-content">
          <h1>Apply for Committee Membership</h1>
          <p>Join the IntelMeet Organizing Committee</p>
        </div>
      </section>

      {/* -------- MAIN AREA -------- */}
      <div className="content-sidebar-wrapper">

        {/* LEFT CONTENT */}
        <div className="content-main">

          <section className="apply-header">
            <h1 className="apply-title">Apply for Committee Membership</h1>
            <p className="apply-desc">
              Please complete the form below to apply for joining the IntelMeet Organizing Committee.
            </p>

            {/* BUTTON → OPEN POPUP */}
            <button className="criteria-btn" onClick={() => setShowPopup(true)}>
              View Eligibility Criteria
            </button>
          </section>

          {/* ---------- FORM ---------- */}
          <div className="form-section">

            <h2 className="section-title">Applicant Information</h2>
            <div className="form-box">
              <label>Full Name</label>
              <input type="text" placeholder="e.g., Mathew William" />

              <label>Email Address</label>
              <input type="email" placeholder="e.g., mathew.william@example.com" />

              <label>Country</label>
              <input type="text" placeholder="Select Country" />

              <label>Phone Number</label>
              <input type="text" placeholder="e.g., 987654321" />
            </div>

            <h2 className="section-title">Professional Details</h2>
            <div className="form-box">
              <label>Institution / Organization</label>
              <input type="text" placeholder="e.g., Westbridge University" />

              <label>Department / Field of Expertise</label>
              <input type="text" placeholder="e.g., Computer Science / Data Analytics" />

              <label>Current Position</label>
              <input type="text" placeholder="e.g., Assistant Professor / PhD Scholar" />

              <label>Academic / Research Experience (Years)</label>
              <input type="text" placeholder="e.g., 5 Years" />
            </div>

            <h2 className="section-title">Committee Interest</h2>
            <div className="form-box">
              <label>Why do you wish to join the committee?</label>
              <textarea placeholder="e.g., I would like to contribute to academic review and support conference activities."></textarea>

              <label>Have you previously been part of any conference committee?</label>
              <select>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <h2 className="section-title">Uploads</h2>
            <div className="form-box">
              <label>Upload Resume / CV</label>
              <input type="file" />

              <label>Upload Professional Photo</label>
              <input type="file" />
            </div>

            <div className="btn-row">
              <button className="submit-btn">Submit Now</button>
              <button className="reset-btn">Reset</button>
            </div>

            {/* -------- AFTER SUBMISSION -------- */}
            <div className="after-submission">
              <h3>After Submission</h3>
              <p>
                Your application will be reviewed by our team. You will be notified by email 
                regarding the status of your application. If required, we may request additional 
                supporting information for verification.
              </p>
            </div>

          </div>
        </div>

        {/* SIDEBAR */}
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

      {/* -------- POPUP -------- */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>✕</button>

            <h2>Eligibility & Responsibilities</h2>

            <h3>Eligibility Criteria</h3>
            <ul>
              <li>Must be associated with a university, college, research institution, or professional organization.</li>
              <li>Minimum recommended experience: <b>2 years</b> in academics, research, or industry.</li>
              <li>Should have subject expertise or relevant academic background.</li>
              <li>Should be able to contribute to basic conference tasks when requested.</li>
              <li>Must maintain professionalism, clear communication, and high ethical conduct.</li>
              <li>Must be available for online meetings or coordination tasks when needed.</li>
            </ul>

            <h3>Roles & Responsibilities</h3>
            <ul>
              <li><b>Review Assistance:</b> Review submitted articles and provide feedback.</li>
              <li><b>Session Support:</b> Help manage sessions and assist presenters.</li>
              <li><b>Event Monitoring:</b> Ensure all sessions run smoothly.</li>
              <li><b>Academic Input:</b> Suggest improvements for academic quality.</li>
              <li><b>Technical Coordination:</b> Help presenters with technical issues.</li>
              <li><b>Documentation Support:</b> Assist with basic documentation tasks.</li>
            </ul>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
