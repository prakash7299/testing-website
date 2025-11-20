import React from "react";
import "./About.css";
import "./Login.css"; // Reuse same layout styles (navbar, top bar, hero, sidebar, wrapper)
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube  } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
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
          <a href="#"><FaFacebookF /></a>
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
          <li><a href="#">Paper Submission</a></li>
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

      {/* ---------------- FULL PAGE WIDTH WRAPPER (Same as HOME) ---------------- */}
      <div className="content-sidebar-wrapper">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="content-main">

            <section className="cfp-section">
              <h2 className="cfp-title">Who We Are</h2>
              <p className="cfp-text">
                IntelMeet Global Conferences is a leading platform dedicated to promoting 
                high-quality research, innovation, and international academic communication.
              </p>
              <p className="cfp-text">
                Our events bring together scholars, researchers, professionals, and students across 
                the globe, enabling impactful knowledge exchange and publication opportunities.
              </p>
            </section>

            <section className="cfp-section">
              <h2 className="cfp-title">Our Mission</h2>
              <p className="cfp-text">
                To support and promote high-quality scholarly research by organizing 
                international conferences that connect authors with a global academic audience.
              </p>
            </section>

            <section className="cfp-section">
              <h2 className="cfp-title">Our Vision</h2>
              <p className="cfp-text">
                To become a trusted global organizer known for excellence, simplicity, and strong 
                academic value — enhancing global research visibility.
              </p>
            </section>

            <section className="cfp-section">
              <h2 className="cfp-title">What We Do</h2>
              <ul className="cfp-list">
                <li className="cfp-text">Organize international academic conferences</li>
                <li className="cfp-text">Provide research presentation opportunities</li>
                <li className="cfp-text">Support authors with submission and peer review</li>
                <li className="cfp-text">Facilitate publication in indexed journals</li>
                <li className="cfp-text">Connect global researchers & professionals</li>
              </ul>
            </section>

            <section className="cfp-section">
              <h2 className="cfp-title">Contact Us</h2>
              <p className="cfp-text">For inquiries, submissions, or support:</p>
              <ul className="cfp-list">
                <li className="cfp-text">📧 intelmeetglobal@gmail.com</li>
                <li className="cfp-text">🌐 www.intelmeet.com</li>
              </ul>
            </section>

        </div>

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
