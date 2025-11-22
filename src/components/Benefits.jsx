import React from "react";
import "./Login.css";
import "./Benefits.css";  // NEW premium styling
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Benefits() {
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
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
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
              <Link className="nav-link" to="/papersubmission">Submission Form</Link>
              <Link className="nav-link" to="/papersubmission-guidelines">Submission Guidelines</Link>
            </div>
          </li>

          <li><Link to="/benefits">Benefits</Link></li>
          <li><a href="#">Speaker</a></li>
          <li><a href="#">Committee</a></li>
          <li><a href="#">Publications</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <Link to="/registration" className="btn-register">Registration</Link>
      </div>

      {/* ---------------- HERO ---------------- */}
      <section className="hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="hero-content">
          <h1>Benefits of Participation</h1>
          <p>Professional Advancement • Academic Recognition • Global Research Visibility</p>
        </div>
      </section>

      {/* ---------------- CONTENT WRAPPER ---------------- */}
      <div className="content-sidebar-wrapper">

        {/* ---------------- LEFT MAIN CONTENT ---------------- */}
        <div className="content-main">

          {/* MAIN INTRO CARD */}
          <section className="benefit-section">
            <h2 className="benefit-main-title">Why Participate in IntelMeet Global Conferences?</h2>
            <p className="benefit-text">
              IntelMeet Global Conferences provide a structured, academically enriched, and 
              professionally recognized platform designed to enhance your scholarly, research, 
              and career advancement outcomes.
            </p>
          </section>

          {/* ===================== TABLE 1 ===================== */}
          <section className="benefit-table">
            <div className="benefit-table-header">Academic Benefits</div>

            <div className="benefit-table-grid">
              <div className="benefit-col">
                <p>Certificate of Participation</p>
                <p>ISBN Conference Proceedings Inclusion</p>
              </div>

              <div className="benefit-col">
                <p>Peer Review Feedback</p>
                <p>Journal Publication Pathways</p>
              </div>
            </div>
          </section>

          {/* ===================== TABLE 2 ===================== */}
          <section className="benefit-table">
            <div className="benefit-table-header">Knowledge & Access Benefits</div>

            <div className="benefit-table-grid">
              <div className="benefit-col">
                <p>Expert Presentation Sessions</p>
                <p>Access to Research Trends & Innovations</p>
              </div>

              <div className="benefit-col">
                <p>Session Recording Access</p>
                <p>Insightful Academic Discussions</p>
              </div>
            </div>
          </section>

          {/* ===================== TABLE 3 ===================== */}
          <section className="benefit-table">
            <div className="benefit-table-header">Networking Benefits</div>

            <div className="benefit-table-grid">
              <div className="benefit-col">
                <p>Opportunities for Global Collaboration</p>
                <p>Connection with Experienced Researchers</p>
              </div>

              <div className="benefit-col">
                <p>Professional Relationship Building</p>
                <p>Cross-Institutional Engagement</p>
              </div>
            </div>
          </section>

          {/* ===================== TABLE 4 ===================== */}
          <section className="benefit-table">
            <div className="benefit-table-header">Professional Development</div>

            <div className="benefit-table-grid">
              <div className="benefit-col">
                <p>Improvement in Communication & Presentation Skills</p>
                <p>Recognition Through Awards & Certificates</p>
              </div>

              <div className="benefit-col">
                <p>Strengthened Academic Profile</p>
                <p>Enhanced Research Visibility</p>
              </div>
            </div>
          </section>

          {/* ===================== TABLE 5 ===================== */}
          <section className="benefit-table">
            <div className="benefit-table-header">Conference Library Access</div>

            <div className="benefit-table-grid">
              <div className="benefit-col">
                <p>Abstract Library (Long-Term Digital Access)</p>
                <p>Event Photo Library</p>
              </div>

              <div className="benefit-col">
                <p>Digital Presentation Archives</p>
                <p>Permanent Research Discoverability</p>
              </div>
            </div>
          </section>

          <section className="cfp-section">
            <h2 className="cfp-title">Assistance & Support</h2>
            <p className="cfp-text">For support related to submissions, participation, or conference processes:</p>
            <ul className="cfp-list">
              <li>📧 support@intelmeetglobal.com</li>
              <li>📞 +91 94424 17477</li>
            </ul>
             <div><span className="hidden-placeholder">f</span></div>
              <div><span className="hidden-placeholder">f</span></div>
            <p className="cfp-text"><b><Link to="/papersubmission" className="cfp-btn-primary">
                Submit Your Paper
              </Link></b></p>
          </section>

        </div>

        {/* ---------------- RIGHT SIDEBAR ---------------- */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Key Benefits</a></li>
            <li><a href="#">Speaker Opportunities</a></li>
            <li><a href="#">Participant Instructions</a></li>
            <li><a href="#">Author Guidelines</a></li>
            <li><a href="#">Committee Application</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

      </div>

      <Footer />
    </div>
  );
}
