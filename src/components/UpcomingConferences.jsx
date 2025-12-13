// UpcomingConferences.jsx
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
  const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const diff = Math.ceil((utc2 - utc1) / (1000 * 60 * 60 * 24));
  if (diff <= 0) return "Closed";
  return diff;
}

/* =====================
   Conference Data (added slug for clean URL)
   ===================== */
const conferences = [
  {
    id: 1,
    slug: "/ICELS", // clean URL you requested
    title: "International Conference on Science, Engineering & Technology (ISCET)",
    conferenceDate: "28 November 2025",
    callForPapers: "Science, Engineering, Technology, and Applied Sciences",
    submissionDeadline: "28 November 2025",
    registrationDeadline: "28 November 2025",
  },
  {
    id: 2,
    slug: "/ICSDA",
    title: "International Conference on Science, Computing & Data Analytics (ICSDA)",
    conferenceDate: "5 December 2025",
    callForPapers: "Computing, Data Analytics, and Scientific Research",
    submissionDeadline: "28 November 2025",
    registrationDeadline: "1 December 2025",
  },
  {
    id: 3,
    slug: "/ICMBSI",
    title: "International Conference on Management, Business & Social Innovation (ICMBSI)",
    conferenceDate: "8 December 2025",
    callForPapers: "Management, Business, Economics, and Social Innovation",
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
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a> |{" "}
          <a href="tel:+919442417477" className="phone-link">+91 9442417477</a>
        </div>

        <div>
          <span className="hidden-placeholder">f</span>
        </div>

        <div className="top-icons">
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/intelmeet" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
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
      <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
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

                {/* View Details button moved above deadlines and opens clean slug in a new tab */}
                <div className="uc-view-row premium-position" style={{ marginTop: 14 }}>
                  <button
                    type="button"
                    className="btn-view-details premium"
                    onClick={() => {
                      // open the configured clean slug in a new tab
                      try {
                        const target = c.slug || `/conference/${c.id}`;
                        // if slug is a relative path (starts with /), open absolute origin + slug
                        if (target.startsWith("/")) {
                          window.open(`${window.location.origin}${target}`, "_blank", "noopener,noreferrer");
                        } else {
                          window.open(target, "_blank", "noopener,noreferrer");
                        }
                      } catch (err) {
                        // fallback
                        window.open(`/conference/${c.id}`, "_blank", "noopener,noreferrer");
                      }
                    }}
                    aria-label={`Open details for ${c.title} in a new tab`}
                    title={`Open details for ${c.title} in a new tab`}
                  >
                    <span className="v-left" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 2C6.477 2 2 6.478 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2z"
                          stroke="rgba(58,42,26,0.95)" strokeWidth="0.8"/>
                        <path d="M9 12h6" stroke="rgba(58,42,26,0.95)" strokeWidth="1.6" strokeLinecap="round"/>
                        <path d="M15 8l4 4-4 4" stroke="rgba(58,42,26,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>

                    <span className="v-label">View Details</span>

                    <span className="v-right" aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14" stroke="rgba(58,42,26,0.9)" strokeWidth="1.6" strokeLinecap="round"/>
                        <path d="M12 5l7 7-7 7" stroke="rgba(58,42,26,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
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
