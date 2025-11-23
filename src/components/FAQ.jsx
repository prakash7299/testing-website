// FAQ.jsx
import React from "react";
import "./FAQ.css";
import "./Login.css";
import intelmeet from "../assets/intelmeet.jpeg";
import photo from "../assets/confimage-1.jpeg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

export default function FAQ() {
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
          <h1>Frequently Asked Questions (FAQs)</h1>
          <p>Your most common queries — answered clearly</p>
        </div>
      </section>

      {/* ---------- MAIN CONTENT WITH SIDEBAR ---------- */}
      <div className="content-sidebar-wrapper">

        {/* LEFT SIDE – FAQ CONTENT */}
        <div className="faq-wrapper">

          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          <div className="faq-block">

            <div className="faq-item">
              <h3>1. Who can submit an article?</h3>
              <p>Researchers, academicians, professionals, and students from any discipline can submit.</p>
            </div>

            <div className="faq-item">
              <h3>2. How long does the review take?</h3>
              <p>Review results are shared within <b>24 business hours</b> from submission.</p>
            </div>

            <div className="faq-item">
              <h3>3. Will I receive a certificate?</h3>
              <p>
                Yes. Certificates for presenters, participants, speakers, and session chairs are issued within 
                <b> 24 hours</b> after the conference.
              </p>
            </div>

            <div className="faq-item">
              <h3>4. How do I submit my article?</h3>
              <p>Use the official submission form available on the IntelMeet website.</p>
            </div>

            <div className="faq-item">
              <h3>5. Can international authors participate?</h3>
              <p>Yes. Authors from all countries are welcome to submit and present.</p>
            </div>

            <div className="faq-item">
              <h3>6. What is the presentation duration?</h3>
              <p>Each presenter receives <b>12 minutes</b> for the presentation and <b>3 minutes</b> for Q&A.</p>
            </div>

            <div className="faq-item">
              <h3>7. Are speakers and session chairs recognized?</h3>
              <p>Yes. They receive <b>official recognition certificates</b> and acknowledgement for their contribution.</p>
            </div>

            <div className="faq-item">
              <h3>8. Do I need to present live?</h3>
              <p>Live presentation is recommended, but pre-recorded videos are accepted if you face technical issues.</p>
            </div>

            <div className="faq-item">
              <h3>9. Will session recordings be available?</h3>
              <p>Yes. Registered participants receive access to recorded sessions.</p>
            </div>

            <div className="faq-item">
              <h3>10. What language should I present in?</h3>
              <p>All presentations must be delivered in English.</p>
            </div>

            <div className="faq-item">
              <h3>11. How will I receive the joining link?</h3>
              <p>You will receive the joining link <b>2 days before</b> the event on your registered email address.</p>
            </div>

            <div className="faq-item">
              <h3>12. What time zone does the conference follow?</h3>
              <p>All schedules follow <b>UTC/GMT</b>. Please convert based on your local time.</p>
            </div>

            <div className="faq-item">
              <h3>13. Can I update my article after submission?</h3>
              <p>Yes. You may send an updated version before the review decision is issued.</p>
            </div>

            <div className="faq-item">
              <h3>14. Who do I contact for support?</h3>
              <p>
                Email: support@intelmeetglobal.com<br />
                Phone: +91 94424 17477
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE – SIDEBAR */}
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
