// Publications.jsx
import React from "react";
import "./Publications.css";
import "./Login.css";
import "./UpcomingConferences.css";
import intelmeet from "../assets/intelmeet.jpeg";
import photo from "../assets/confimage-1.jpeg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

export default function Publications() {
  return (
    <div className="page-container">

      {/* -------- TOP BAR -------- */}
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

      {/* -------- NAVBAR -------- */}
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

      {/* -------- HERO -------- */}
      <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="uc-hero-content">
          <h1>Publications</h1>
          <p>Enhancing academic visibility and global research contribution</p>
        </div>
      </section>

      {/* -------- PAGE CONTENT WRAPPER -------- */}
      <div className="content-sidebar-wrapper">

        {/* -------- LEFT CONTENT -------- */}
        <div className="pub-main">
        {/* OVERVIEW SECTION */}
<div className="pub-overview">
  <h1 className="pub-main-title">
    Publication Overview – IntelMeet Global Conferences
  </h1>

  <p className="pub-main-desc">
    IntelMeet provides a structured publication system designed to support the 
    long-term visibility, accessibility, and academic credibility of research 
    articles presented at our conferences.
  </p>
</div>

          {/* BLOCK 1 */}
          <div className="pub-block">
            <h2>ISBN Conference Proceedings</h2>
            <p>
              All accepted articles are published in officially indexed conference proceedings 
              with an ISBN, enabling citation and academic recognition.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="pub-block">
            <h2>Journal Publication Opportunities</h2>
            <p>
              Selected high-quality articles may be recommended to partnered journals, 
              subject to review policies.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="pub-block">
            <h2>Peer Review Process</h2>
            <p>
              Each article undergoes internal review for clarity, originality, relevance, 
              and presentation quality.
            </p>
          </div>

          {/* BLOCK 4 */}
          <div className="pub-block">
            <h2>Digital Repository Access</h2>
            <p>
              Published articles are archived in the IntelMeet digital library, ensuring 
              long-term availability for readers worldwide.
            </p>
          </div>

          {/* BLOCK 5 */}
          <div className="pub-block">
            <h2>Research Discoverability</h2>
            <p>
              Articles are indexed for global visibility, citation, and scholarly impact.
            </p>
          </div>

          {/* BLOCK 6 */}
          <div className="pub-block">
            <h2>Publication Certificates</h2>
            <p>
              Authors receive an official Publication Certificate for academic or 
              professional documentation.
            </p>
          </div>

          {/* BLOCK 7 */}
          <div className="pub-block">
            <h2>Publication Standards</h2>
            <p>
              All submissions must be original, peer-reviewed, and free from plagiarism, 
              adhering to IntelMeet’s ethical guidelines.
            </p>
          </div>

          {/* BLOCK 8 - SUPPORT */}
          <div className="pub-support">
            <h2>Publication Support & Assistance</h2>
            <p>For any assistance related to publication or submission:</p>

            <p><b>Email:</b> support@intelmeetglobal.com</p>
            <p><b>Phone/WhatsApp:</b> +91 94424 17477</p>
          </div>

        </div>

        {/* -------- SIDEBAR -------- */}
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
