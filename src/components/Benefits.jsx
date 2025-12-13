import React from "react";
import "./Login.css";
import "./Benefits.css";
import "./UpcomingConferences.css";
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Benefits() {
  return (
    <div className="page-container">
      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">
            support@intelmeetglobal.com
          </a>{" "}
          | <a href="tel:+919442417477" className="phone-link">+91 9442417477</a>
        </div>

        <div><span className="hidden-placeholder">f</span></div>

        <div>
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank"><FaInstagram /></a>
          <a href="https://x.com/intelmeet"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal"><FaYoutube /></a>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <img src={intelmeet} alt="Logo" className="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/upcoming-conferences">Upcoming Conferences</Link></li>

          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
            <div className="dropdown-menu">
              <Link to="/papersubmission">📄 Submission Form</Link>
              <Link to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
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

      {/* HERO SECTION */}
      <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="uc-hero-content">
          <h1>Benefits of Participation</h1>
          <p>Professional Advancement • Academic Recognition • Global Research Visibility</p>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div className="content-sidebar-wrapper">
        {/* LEFT MAIN CONTENT */}
        <div className="content-main">
          <section className="benefit-section">
            <h2 className="benefit-main-title">Why Participate in IntelMeet Global Conferences?</h2>
            <p className="benefit-text">
              IntelMeet Global Conferences provide a structured, academically enriched, 
              and professionally recognized platform designed to enhance your scholarly, 
              research, and career advancement outcomes.
            </p>
          </section>

          {/* ACADEMIC BENEFITS */}
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

          {/* KNOWLEDGE BENEFITS */}
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

          {/* NETWORKING BENEFITS */}
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

          {/* PROFESSIONAL DEVELOPMENT */}
          <section className="benefit-table">
            <div className="benefit-table-header">Professional Development</div>
            <div className="benefit-table-grid">
              <div className="benefit-col">
                <p>Improved Communication & Presentation Skills</p>
                <p>Recognition Through Awards & Certificates</p>
              </div>
              <div className="benefit-col">
                <p>Strengthened Academic Profile</p>
                <p>Enhanced Research Visibility</p>
              </div>
            </div>
          </section>

          {/* CONFERENCE LIBRARY */}
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

          {/* NEW: AWARDS & RECOGNITION */}
          <section className="benefit-table">
            <div className="benefit-table-header">Awards & Recognition</div>
            <div className="benefit-table-grid">
              <div className="benefit-col">
                <p>Best Paper Award</p>
                <p>Best Presentation Award</p>
              </div>
              <div className="benefit-col">
                <p>Young Researcher Award</p>
                <p>Certificate of Excellence</p>
              </div>
            </div>
          </section>

          {/* SUPPORT */}
          <section className="cfp-section">
            <h2 className="cfp-title">Assistance & Support</h2>
            <p className="cfp-text">For support related to submissions or participation:</p>
            <ul className="cfp-list">
              <li>📧 support@intelmeetglobal.com</li>
              <li>📞 +91 94424 17477</li>
            </ul>
            <div><span className="hidden-placeholder">f</span></div>
            <p className="cfp-text">
              <b>
                <Link to="/papersubmission" className="cfp-btn-primary">
                  Submit Your Paper
                </Link>
              </b>
            </p>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/benefits">Key Benefits</Link></li>
            <li><Link to="/apply-speaker">Apply to Become a Speaker</Link></li>
            <li><Link to="/instructions">Instructions</Link></li>
            <li><Link to="/papersubmission-guidelines">Author Guidelines</Link></li>
            <li><Link to="/committee-application">Apply for Committee Member</Link></li>
            <li><Link to="/faq">Frequently Asked Questions</Link></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
