// src/components/UpcomingConferences.jsx
import React from "react";
import "./UpcomingConferences.css";
import "./Login.css";
import intelmeet from "../assets/intelmeet.jpeg";
import photo from "../assets/confimage-1.jpeg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

// =====================
// Remaining Days Logic
// =====================
function calculateRemainingDays(dateStr) {
  const date = new Date(dateStr);
  const today = new Date();
  const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));

  if (diff <= 0) return "Closed";
  return diff;
}

// =====================
// Conference Data
// =====================
const conferences = [
  {
    id: 1,
    title: "International Conference on Engineering & Technology (ICET)",
    conferenceDate: "28 November 2025",
    callForPapers: "Engineering, Technology, and Applied Sciences",
    submissionDeadline: "22 November 2025",
    registrationDeadline: "25 November 2025",
  },
  {
    id: 2,
    title:
      "International Conference on Science, Computing & Data Analytics (ICSDA)",
    conferenceDate: "5 December 2025",
    callForPapers: "Computing, Data Analytics, and Scientific Research",
    submissionDeadline: "28 November 2025",
    registrationDeadline: "1 December 2025",
  },
  {
    id: 3,
    title:
      "International Conference on Management, Business & Social Innovation (ICMBSI)",
    conferenceDate: "8 December 2025",
    callForPapers:
      "Management, Business, Economics, and Social Innovation",
    submissionDeadline: "2 December 2025",
    registrationDeadline: "4 December 2025",
  },
];

export default function UpcomingConferences() {
  return (
    <div className="page-container">

      {/* ===================== TOP BAR ===================== */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">
            support@intelmeetglobal.com
          </a>{" "}
          |{" "}
          <a href="tel:+919442417477" className="phone-link">
            +91 9442417477
          </a>
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

      {/* ===================== NAVBAR ===================== */}
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
      
              <Link to="/registration" className="btn-register">Registration</Link>
            </div>

      {/* ===================== HERO BANNER ===================== */}
      <section
        className="uc-hero"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="uc-hero-content">
          <h1>Upcoming Conferences</h1>
          <p>Explore scheduled international conferences & deadlines</p>
        </div>
      </section>

      {/* ===================== MAIN GRID ===================== */}
      <div className="uc-wrapper">

        {/* LEFT SIDE (MAIN CONTENT) */}
        <div className="uc-main">
          <h2 className="uc-section-title">Upcoming Conferences</h2>

          {conferences.map((c) => (
            <div key={c.id} className="uc-card">

              <img src={photo} className="uc-card-img" alt="Conference" />

              <div className="uc-card-body">
                <h3 className="uc-card-title">{c.title}</h3>

                <div className="uc-meta">
                  <p><b>Conference Date:</b> {c.conferenceDate}</p>
                  <p><b>Call for Papers:</b> {c.callForPapers}</p>
                </div>

                {/* ===================== DEADLINE SPLIT SECTION ===================== */}
                <div className="deadline-row">

                  {/* SUBMISSION DEADLINE */}
                  <div className="deadline-box">
                    <p className="deadline-label">
                      <b>Submission Deadline:</b>
                    </p>
                    <p className="deadline-date">{c.submissionDeadline}</p>

                    <button
                      className="btn-submit"
                      onClick={() =>
                        (window.location.href = "/papersubmission")
                      }
                    >
                      Submit Now
                    </button>

                    <p className="remaining-time">
                      {calculateRemainingDays(c.submissionDeadline)} days left
                    </p>
                  </div>

                  {/* REGISTRATION DEADLINE */}
                  <div className="deadline-box">
                    <p className="deadline-label">
                      <b>Registration Deadline:</b>
                    </p>
                    <p className="deadline-date">{c.registrationDeadline}</p>

                    <button
                      className="btn-register-now"
                      onClick={() =>
                        (window.location.href = "/papersubmission")
                      }
                    >
                      Register Now
                    </button>

                    <p className="remaining-time green">
                      {calculateRemainingDays(c.registrationDeadline)} days left
                    </p>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT SIDE SIDEBAR */}
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
    </div>
  );
}
