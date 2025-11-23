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

/* =====================
   Helper: remaining days
   ===================== */
function calculateRemainingDays(dateStr) {
  const date = new Date(dateStr);
  const today = new Date();
  // normalize times (avoid timezone small diffs)
  const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const diff = Math.ceil((utc2 - utc1) / (1000 * 60 * 60 * 24));
  if (diff <= 0) return "Closed";
  return diff;
}

/* =====================
   Conference Data
   (unchanged, per request)
   ===================== */
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
      {/* TOP BAR */}
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

        <div>
          <span className="hidden-placeholder">f</span>
        </div>

        <div className="top-icons">
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <img src={intelmeet} alt="IntelMeet logo" className="logo" />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/upcoming-conferences">Upcoming Conferences</Link></li>

          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
            <div className="dropdown-menu">
              <Link className="nav-link" to="/papersubmission">📄 Submission Form</Link>
              <Link className="nav-link" to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
            </div>
          </li>

          <li><Link to="/benefits">Benefits</Link></li>
          <li><Link to="/speaker">Speaker</Link></li>
          <li><Link to="/committee">Committee</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <Link to="/registration-fees" className="btn-register">Registration</Link>
      </div>

      {/* HERO */}
      <section
        className="uc-hero"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="uc-hero-content">
          <h1>Upcoming Conferences</h1>
          <p>Explore scheduled international conferences & deadlines</p>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="uc-wrapper">
        {/* LEFT MAIN */}
        <div className="uc-main">
          <h2 className="uc-section-title">Upcoming Conferences</h2>

          {conferences.map((c) => (
            <article key={c.id} className="uc-card" aria-labelledby={`conf-${c.id}`}>
              <img src={photo} className="uc-card-img" alt={`${c.title} banner`} />

              <div className="uc-card-body">
                <h3 id={`conf-${c.id}`} className="uc-card-title">{c.title}</h3>

                <div className="uc-meta">
                  <p><strong>Conference Date:</strong> {c.conferenceDate}</p>
                  <p><strong>Call for Papers:</strong> {c.callForPapers}</p>
                </div>

                {/* DEADLINE GRID */}
                <div className="deadline-row" role="group" aria-label="deadlines">
                  <div className="deadline-box">
                    <p className="deadline-label"><strong>Submission Deadline:</strong></p>
                    <p className="deadline-date">{c.submissionDeadline}</p>
                    <Link className="btn-submit full-btn" to="/papersubmission">Submit Now</Link>
                    <p className="remaining-time">
                      {calculateRemainingDays(c.submissionDeadline) === "Closed"
                        ? "Closed"
                        : `${calculateRemainingDays(c.submissionDeadline)} days left`}
                    </p>
                  </div>

                  <div className="deadline-box">
                    <p className="deadline-label"><strong>Registration Deadline:</strong></p>
                    <p className="deadline-date">{c.registrationDeadline}</p>
                    <Link className="btn-register-now full-btn" to="/registration-fees">Register Now</Link>
                    <p className="remaining-time green">
                      {calculateRemainingDays(c.registrationDeadline) === "Closed"
                        ? "Closed"
                        : `${calculateRemainingDays(c.registrationDeadline)} days left`}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="sidebar-links" aria-label="Quick links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link className="nav-link" to="/benefits">Key Benefits of Participation</Link></li>
            <li><Link className="nav-link" to="/apply-speaker">Apply to Become a Speaker</Link></li>
            <li><Link className="nav-link" to="/instructions">Instructions for Participants</Link></li>
            <li><Link className="nav-link" to="/papersubmission-guidelines">Author Guidelines</Link></li>
            <li><Link className="nav-link" to="/committee-application">Apply for Committee Member</Link></li>
            <li><Link className="nav-link" to="/faq">Frequently Asked Questions (FAQs)</Link></li>
          </ul>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
