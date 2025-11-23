// Speaker.jsx
import React from "react";
import "./Speaker.css";
import "./Login.css"; 
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Speaker() {
  const speakers = [
    {
      name: "Dr. Nathan Reynolds",
      institute: "Hampton School of Engineering",
      country: "United States",
    },
    {
      name: "Prof. Olivia Bennett",
      institute: "Royal Institute of Technology",
      country: "United Kingdom",
    },
    {
      name: "Dr. Lucas Graham",
      institute: "Sydney Research University",
      country: "Australia",
    },
    {
      name: "Prof. Sophia Turner",
      institute: "European Center for Social Studies",
      country: "Netherlands",
    },
    {
      name: "Dr. Adrian Foster",
      institute: "Canadian Institute of Applied Sciences",
      country: "Canada",
    },
    {
      name: "Dr. Emily Dawson",
      institute: "Institute of Data & Computing",
      country: "Ireland",
    },
    {
      name: "Prof. Ethan Parker",
      institute: "Brighton School of Business",
      country: "United Kingdom",
    },
    {
      name: "Dr. Charlotte Hayes",
      institute: "Southridge University",
      country: "New Zealand",
    },
    {
      name: "Dr. Marcus Hill",
      institute: "International Institute of Technology",
      country: "Germany",
    },
    {
      name: "Prof. Isabella Carter",
      institute: "Pacific Research College",
      country: "Singapore",
    }
  ];

  return (
    <div className="page-container">

      {/* ---------- TOP BAR ---------- */}
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

      {/* ---------- NAVBAR ---------- */}
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

      {/* ---------- HERO ---------- */}
      <section className="hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="hero-content">
          <h1>Conference Speakers</h1>
          <p>Meet our distinguished global speakers</p>
        </div>
      </section>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="content-sidebar-wrapper">

        <div className="content-main">

          <div className="speaker-header">
            <h2>Conference Speakers</h2>
            <p>
              IntelMeet Global Conferences proudly features speakers from various academic and professional
              backgrounds who share their research, insights, and expertise with our global audience.
            </p>

            <Link to="/apply-speaker" className="apply-btn">Apply Now</Link>
          </div>

          <div className="speaker-grid">
            {speakers.map((sp, index) => (
              <div className="speaker-card" key={index}>
                <h3>{sp.name}</h3>
                <p className="inst">{sp.institute}</p>
                <p className="country">{sp.country}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ---------- SIDEBAR ---------- */}
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
