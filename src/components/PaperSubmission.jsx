import React from "react";
import "./About.css";
import "./Login.css"; // Reuse same layout styles (navbar, top bar, hero, sidebar, wrapper)
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="#">Upcoming Conferences</a></li>
          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
          
            <div className="dropdown-menu">
              <Link className="nav-link" to="/papersubmission">📄 Submission Form</Link>
              <Link className="nav-link" to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
            </div>
          </li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Speaker</a></li>
          <li><a href="#">Committee</a></li>
          <li><a href="#">Publications</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <a
          href="https://docs.google.com/forms/d/1cnm3AfTKKIBITCzCOMlnGouGa2qiuDbEiIjsozMQtTo/edit"
          className="btn-register"
        >
          Registration
        </a>
      </div>

    {/* ---------------- HERO ---------------- */}
          <section className="hero" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hero-content">
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
            <li><a href="#">Key Benefits of Participation</a></li>
            <li><a href="#">Apply to Become a Speaker</a></li>
            <li><a href="#">Instructions for Participants</a></li>
            <li><a href="#">Author Guidelines</a></li>
            <li><a href="#">Apply for Committee Member</a></li>
            <li><a href="#">Frequently Asked Questions (FAQs)</a></li>
          </ul>
        </div>

      </div>

      <Footer />
    </div>
  );
}
