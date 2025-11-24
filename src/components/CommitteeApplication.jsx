// CommitteeApplication.jsx
import React, { useState } from "react";
import "./CommitteeApplication.css";
import "./Login.css";
import "./UpcomingConferences.css";
import intelmeet from "../assets/intelmeet.jpeg";
import photo from "../assets/confimage-1.jpeg";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Footer from "./Footer";

export default function CommitteeApplication() {
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const formData = new FormData(e.target);

      // Your Web3Forms PRO Access Key
      formData.append("access_key", "8193e4dd-eacc-4198-9d95-d60857b6b682");
      formData.append("from_name", "IntelMeet Committee Application");
      formData.append(
        "subject",
        `Committee Application – ${formData.get("full_name")}`
      );

      // FILES auto-sent (Web3Forms PRO supports it)
      // professional_photo
      // resume_cv

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.target.reset();
      } else {
        console.log(result);
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <div className="page-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">
            support@intelmeetglobal.com
          </a>{" "}
          |
          <a href="tel:+919442417477" className="phone-link">
            {" "}
            +91 9442417477
          </a>
        </div>
        <div className="top-icons">
          <a>
            <FaFacebookF />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaLinkedinIn />
          </a>
          <a>
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <img src={intelmeet} className="logo" />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/upcoming-conferences">Upcoming Conferences</Link>
          </li>

          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
            <div className="dropdown-menu">
              <Link to="/papersubmission">📄 Submission Form</Link>
              <Link to="/papersubmission-guidelines">
                📘 Submission Guidelines
              </Link>
            </div>
          </li>

          <li>
            <Link to="/benefits">Benefits</Link>
          </li>
          <li>
            <Link to="/speaker">Speaker</Link>
          </li>
          <li>
            <Link to="/committee">Committee</Link>
          </li>
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <Link to="/registration-fees" className="btn-register">
          Registration
        </Link>
      </div>

      {/* Hero */}
      <section
        className="uc-hero"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="uc-hero-content">
          <h1>Apply for Committee Membership</h1>
          <p>Join the IntelMeet Organizing Committee</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="content-sidebar-wrapper">
        <div className="content-main">
          <section className="apply-header">
            <h1 className="apply-title">Apply for Committee Membership</h1>
            <p className="apply-desc">
              Complete the form below to join the IntelMeet Organizing Committee.
            </p>

            <button className="criteria-btn" onClick={() => setShowPopup(true)}>
              View Eligibility Criteria
            </button>
          </section>

          {/* FORM START */}
          <form className="form-section" onSubmit={handleSubmit}>
            <h2 className="section-title">Applicant Information</h2>

            <div className="form-box">
              <label>Full Name</label>
              <input type="text" name="full_name" required />

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

              <label>Academic / Research Experience</label>
              <input type="text" name="experience" required />
            </div>

            <h2 className="section-title">Committee Interest</h2>

            <div className="form-box">
              <label>Why do you wish to join?</label>
              <textarea name="committee_reason" required></textarea>

              <label>Have you been in a committee before?</label>
              <select name="committee_history" required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* ===================== NEW UPLOAD FIELDS ===================== */}
            <h2 className="section-title">Uploads</h2>

            <div className="form-box">
              <label>Upload Professional Photo</label>
              <input
                type="file"
                name="professional_photo"
                accept=".jpg,.jpeg,.png"
                required
              />
              <small>Accepted: .jpg, .png</small>

              <br />

              <label>Upload Resume / CV</label>
              <input
                type="file"
                name="resume_cv"
                accept=".pdf,.doc,.docx"
                required
              />
              <small>Accepted: .pdf, .doc, .docx</small>
            </div>

            <div className="btn-row">
              <button className="submit-btn" type="submit">
                Submit Now
              </button>
              <button className="reset-btn" type="reset">
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li>
              <Link to="/benefits">Key Benefits</Link>
            </li>
            <li>
              <Link to="/apply-speaker">Apply Speaker</Link>
            </li>
            <li>
              <Link to="/instructions">Instructions</Link>
            </li>
            <li>
              <Link to="/papersubmission-guidelines">Guidelines</Link>
            </li>
            <li>
              <Link to="/committee-application">Apply Committee</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>

      <Footer />

      {/* Success / Error POPUP */}
      {status && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setStatus(null)}>
              ×
            </button>

            {status === "success" ? (
              <>
                <h2 className="modal-title">✔ Application Submitted</h2>
                <p>Your committee application has been successfully submitted.</p>
              </>
            ) : (
              <>
                <h2 className="modal-title">❌ Submission Failed</h2>
                <p>Please try again or contact support@intelmeetglobal.com</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* POPUP FOR CRITERIA */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ×
            </button>

            <h2>Eligibility & Responsibilities</h2>

            <h3>Eligibility Criteria</h3>
            <ul>
              <li>Must belong to an academic/research institution.</li>
              <li>Minimum 2 years of experience.</li>
              <li>Should have expertise in the field.</li>
            </ul>

            <h3>Responsibilities</h3>
            <ul>
              <li>Review articles.</li>
              <li>Session coordination.</li>
              <li>Monitoring & support.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
