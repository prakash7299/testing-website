import React from "react";
import "./About.css";
import "./Login.css"; // Reuse same layout styles (navbar, top bar, hero, sidebar, wrapper)
import "./UpcomingConferences.css";
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube,
  FaInstagram
} from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Registration from "./Registration";

export default function PaperSubmission() {
  return (
    <div className="page-container">

      {/* ---------------- TOP BAR ---------------- */}
      <div className="top-bar">
        <div>
          <span>
            <a href="mailto:support@intelmeetglobal.com">
              support@intelmeetglobal.com
            </a>
          </span>
          | <a href="tel:+919442417477" className="phone-link">+91 9442417477</a>
        </div>
        <div><span className="hidden-placeholder">f</span></div>
        <div>
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* ---------------- NAVBAR ---------------- */}
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

    {/* ---------------- HERO ---------------- */}
          <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
            <div className="uc-hero-content">
              <h1>About IntelMeet Global Conferences</h1>
              <p>Empowering Global Research & Academic Innovation</p>
            </div>
          </section>

      <div className="content-sidebar-wrapper">
        <Registration />

        {/* ---------------- RIGHT SIDEBAR (Same as HOME) ---------------- */}
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
