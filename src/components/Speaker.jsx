// Speaker.jsx
import React from "react";
import "./Speaker.css";
import "./Login.css";
import "./UpcomingConferences.css";
import heroPhoto from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";

import walidaPhoto from "../assets/speaker-walida.png";
import surajPhoto from "../assets/speaker-suraj.png";
import hebaPhoto from "../assets/speaker-heba.png";
import narinderjitPhoto from "../assets/speaker-narinderjit.png";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Speaker() {
  const speakers = [
    {
      name: "Dr. Suraj Kumar Mukti",
      title: "Professor",
      affiliation: "National Institute of Technology Raipur",
      country: "India",
      photo: surajPhoto,
    },
    {
      name: "Dr. Narinderjit Kaur",
      title: "Dept. of Chemistry",
      affiliation: "Kanya Maha Vidyalaya",
      country: "India",
      photo: narinderjitPhoto,
    },
    {
      name: "Prof. Olivia Bennett",
      affiliation: "Royal Institute of Technology",
      country: "United Kingdom",
      photo: null,
    },
    {
      name: "Dr. Lucas Graham",
      affiliation: "Sydney Research University",
      country: "Australia",
      photo: null,
    },
    {
      name: "Prof. Sophia Turner",
      affiliation: "European Center for Social Studies",
      country: "Netherlands",
      photo: null,
    },
    {
      name: "Dr. Adrian Foster",
      affiliation: "Canadian Institute of Applied Sciences",
      country: "Canada",
      photo: null,
    },
    {
      name: "Dr. Emily Dawson",
      affiliation: "Institute of Data & Computing",
      country: "Ireland",
      photo: null,
    },
  ];

  const initials = (name) => {
    const n = name.split(" ");
    return (n[0][0] + (n[1]?.[0] || "")).toUpperCase();
  };

  return (
    <div className="page-container">
      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a> |
          <a href="tel:+919025956834" className="phone-link"> +91 9025956834</a>
        </div>
        <div className="hidden-placeholder">f</div>
        <div className="top-icons"></div>
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

          <li><Link className="nav-link" to="/benefits">Benefits</Link></li>
          <li><Link className="nav-link" to="/speaker">Speaker</Link></li>
          <li><Link className="nav-link" to="/committee">Committee</Link></li>
          <li><Link className="nav-link" to="/publications">Publications</Link></li>
          <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>

        <Link to="/registration-fees" className="btn-register">Registration</Link>
      </div>

      {/* HERO SECTION */}
      <section className="uc-hero" style={{ backgroundImage: `url(${heroPhoto})` }}>
        <div className="uc-hero-content">
          <h1>Conference Speakers</h1>
          <p>Meet our distinguished global speakers</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="content-sidebar-wrapper">
        <div className="content-main">

          {/* ---------- PREMIUM HEADER (updated) ---------- */}
          <div className="speaker-header premium-header">
            <div className="premium-h-leftAccent" aria-hidden></div>
            <div className="premium-h-text">
              <h2 className="premium-title">Conference Speakers</h2>
              <p className="premium-sub">
                IntelMeet Global Conferences proudly features speakers from various academic and professional
                backgrounds who share their research, insights, and expertise with our global audience.
              </p>
              <Link to="/apply-speaker" className="premium-apply">Apply Now</Link>
            </div>
          </div>

          {/* Speaker Cards */}
          <div className="speaker-grid">
            {speakers.map((sp, index) => (
              <div className="speaker-card luxury-card" key={index}>
                <div className="lux-avatar-box">
                  {sp.photo ? (
                    <img src={sp.photo} alt={sp.name} className="lux-avatar" />
                  ) : (
                    <div className="lux-avatar-fallback">{initials(sp.name)}</div>
                  )}
                </div>

                <div className="lux-details">
                  <h3 className="lux-name">{sp.name}</h3>
                  {sp.title && <div className="lux-title">{sp.title}</div>}
                  {sp.affiliation && <div className="lux-affiliation">{sp.affiliation}</div>}
                  {sp.country && <div className="lux-country">{sp.country}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/benefits">Key Benefits of Participation</Link></li>
            <li><Link to="/apply-speaker">Apply to Become a Speaker</Link></li>
            <li><Link to="/instructions">Instructions for Participants</Link></li>
            <li><Link to="/papersubmission-guidelines">Author Guidelines</Link></li>
            <li><Link to="/committee-application">Apply for Committee Member</Link></li>
            <li><Link to="/faq">Frequently Asked Questions (FAQs)</Link></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
