// ApplySpeaker.jsx 
import React, { useState } from "react";
import "./ApplySpeaker.css";
import "./Login.css";
import "./UpcomingConferences.css";
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ApplySpeaker() {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  // ======================================================
  //       SEND FORM USING WORKING WEB3FORMS SETUP
  // ======================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const formData = new FormData(e.target);

      // SAME LOGIC AS YOUR WORKING RegistrationAndFees.jsx
      formData.append("access_key", "d498fbe6-16ef-4473-88fb-b7c17f8d803b");
      formData.append("from_name", "IntelMeet Speaker Application");
      formData.append(
        "subject",
        `Speaker Application – ${formData.get("full_name")}`
      );

      // --- Web3Forms PRO supports file upload automatically ---
      // The fields:
      // professional_photo
      // resume_cv
      // will be included without modification

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.success) {
        setStatus("success");
        e.target.reset();
      } else {
        console.error("Web3Forms Error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="page-container">
      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">
            support@intelmeetglobal.com
          </a>{" "}
          | <a href="tel:+919442417477" className="phone-link">
            +91 9442417477
          </a>
        </div>

        <div>
          <span className="hidden-placeholder">f</span>
        </div>

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
          <li><Link to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About Us</Link></li>
          <li><Link className="nav-link" to="/upcoming-conferences">Upcoming Conferences</Link></li>

          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
            <div className="dropdown-menu">
              <Link className="nav-link" to="/papersubmission">📄 Submission Form</Link>
              <Link className="nav-link" to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
            </div>
          </li>

          <li><Link className="nav-link" to="/benefits">Benefits</Link></li>
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

      {/* CONTENT */}
      <div className="content-sidebar-wrapper">
        {/* FORM */}
        <div className="content-main">
          <section className="apply-header">
            <h1 className="apply-title">Apply to Become a Speaker</h1>

            <p className="apply-desc">
              Please complete the form below to apply as a speaker for upcoming
              IntelMeet conferences.
            </p>

            <button className="req-button" onClick={() => setShowModal(true)}>
              View Speaker Requirements
            </button>
          </section>

          <form className="form-section" onSubmit={handleSubmit}>
            <h2 className="section-title">Speaker Information</h2>
            <div className="form-box">
              <label>Full Name</label>
              <input type="text" name="full_name" required />
            </div>

            <h2 className="section-title">Contact Information</h2>
            <div className="form-box">
              <label>Email Address</label>
              <input type="email" name="email" required />

              <label>Country</label>
              <input type="text" name="country" required />

              <label>Phone Number</label>
              <input type="text" name="phone" required />
            </div>

            <h2 className="section-title">Professional Details</h2>
            <div className="form-box">
              <label>Institution / Organization</label>
              <input type="text" name="institution" required />

              <label>Department / Field of Expertise</label>
              <input type="text" name="department" required />

              <label>Current Position</label>
              <input type="text" name="position" required />

              <label>Years of Experience</label>
              <input type="text" name="experience" required />

              <label>LinkedIn Profile (Optional)</label>
              <input type="text" name="linkedin" />
            </div>

            <h2 className="section-title">Presentation Details</h2>
            <div className="form-box">
              <label>Proposed Presentation Title</label>
              <input type="text" name="presentation_title" required />

              <label>Short Summary (3–4 lines)</label>
              <textarea name="summary" required></textarea>
            </div>

            {/* UPLOADS */}
            <h2 className="section-title">Uploads</h2>
            <div className="form-box">
              <label>Upload Professional Photo</label>
              <input
                type="file"
                name="professional_photo"
                accept=".jpg,.jpeg,.png"
                required
              />
              <small>Accepted formats: .jpg, .png</small>

              <br />

              <label>Upload Resume / CV</label>
              <input
                type="file"
                name="resume_cv"
                accept=".pdf,.doc,.docx"
                required
              />
              <small>Accepted formats: .pdf, .doc, .docx</small>
            </div>

            <div className="submit-btn-box">
              <button className="apply-btn" type="submit">
                Apply Now
              </button>
            </div>
          </form>
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

      <Footer />

      {/* SUCCESS / ERROR POPUP */}
      {status && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setStatus(null)}>
              ×
            </button>

            {status === "success" ? (
              <>
                <h2 className="modal-title">✔ Application Submitted</h2>
                <p>Your application has been submitted successfully.</p>
              </>
            ) : (
              <>
                <h2 className="modal-title">❌ Submission Failed</h2>
                <p>Please try again or contact support@intelmeetglobal.com.</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* REQUIREMENTS POPUP */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>

            <h2 className="modal-title">Speaker Requirements</h2>

            <h3 className="modal-sub">Eligibility Criteria</h3>
            <ul>
              <li>Be associated with a university or recognized institution.</li>
              <li>Have relevant academic or industry experience.</li>
              <li>Provide original content for presentation.</li>
              <li>Be confident in English communication.</li>
              <li>Be available on the event date.</li>
            </ul>

            <h3 className="modal-sub">Roles & Responsibilities</h3>
            <ul>
              <li>Deliver a clear and structured presentation.</li>
              <li>Attend 30 minutes early for tech checks.</li>
              <li>Respond during Q&A sessions.</li>
              <li>Share presentation files when required.</li>
              <li>Maintain professionalism during the session.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
