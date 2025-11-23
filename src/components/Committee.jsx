import React from "react";
import "./Committee.css";
import "./Speaker.css";
import "./Login.css"; 
import intelmeet from "../assets/intelmeet.jpeg";
import photo from "../assets/confimage-1.jpeg";

import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Committee() {
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
          <h1>Our Organizing Committee Members</h1>
          <p>Meet the dedicated professionals supporting IntelMeet Global Conferences</p>
        </div>
      </section>

      {/* ---------- CONTENT + SIDEBAR WRAPPER ---------- */}
      <div className="content-sidebar-wrapper">

        {/* ---------- MAIN CONTENT ---------- */}
        <div className="content-main">

             <div className="speaker-header">
            <h2>Our Organizing Committee Members</h2>
            </div>

          <div className="committee-topnote">
            <p>
              If you are interested in joining the IntelMeet Organizing Committee, you may apply here:
            </p>

            <Link to="/committee-application" className="apply-btn">
              Apply Now
            </Link>
          </div>

          <div className="committee-list">

            <div className="member-block">
              <h3>Prof. David Harrison</h3>
              <p>Northern State Institute</p>
              <p>Canada</p>
            </div>

            <div className="member-block">
              <h3>Dr. Jessica Raymond</h3>
              <p>Lincoln Institute of Technology</p>
              <p>Australia</p>
            </div>

            <div className="member-block">
              <h3>Prof. Andrew Collins</h3>
              <p>Western Coast University</p>
              <p>New Zealand</p>
            </div>

            <div className="member-block">
              <h3>Dr. Sarah Mitchell</h3>
              <p>Northview Academy</p>
              <p>Ireland</p>
            </div>

            <div className="member-block">
              <h3>Ms. Olivia Harper</h3>
              <p>Academic Publishing Group</p>
              <p>United States</p>
            </div>

            <div className="member-block">
              <h3>Mr. Ethan Clarke</h3>
              <p>International Academic Events Office</p>
              <p>United Kingdom</p>
            </div>

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
