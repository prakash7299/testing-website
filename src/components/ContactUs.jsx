import React from "react";
import "./ContactUs.css";
import "./Login.css";
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="page-container">

      {/* TOP BAR */}
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
      
      
      
                <li><Link className="nav-link" to="/benefits">Benifits</Link></li>
                <li><Link className="nav-link" to="/speaker">Speaker</Link></li>
                <li><Link className="nav-link" to="/committee">Committee</Link></li>
                <li><Link className="nav-link" to="/publications">Publications</Link></li>
                <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
              </ul>
      
              <Link to="/registration" className="btn-register">Registration</Link>
            </div>

      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Reach out for conference support, submissions, or inquiries</p>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="content-sidebar-wrapper">

        {/* LEFT CONTENT */}
        <div className="content-main">
          <h2 className="cfp-title">Contact Us – IntelMeet Global Conferences</h2>

          <p className="cfp-text">
            We welcome all inquiries related to article submissions, participation, registration,
            and conference information. Our support team is available to assist you promptly and professionally.
          </p>

          <section className="cfp-section">
            <h2 className="cfp-title">Primary Contact</h2>
            <p className="cfp-text">For all communication regarding conferences, submissions, registration, and general support:</p>
            <ul className="cfp-list">
              <li className="cfp-text"><b>Email:</b> support@intelmeetglobal.com</li>
              <li className="cfp-text"><b>Call/WhatsApp:</b> +91 94424 17477</li>
            </ul>
          </section>

          <section className="cfp-section">
            <h2 className="cfp-title">Working Hours</h2>
            <p className="cfp-text">Available <b>24/7</b> for conference-related inquiries and support.</p>
          </section>

          <section className="cfp-section">
            <h2 className="cfp-title">Stay Connected</h2>
            <p className="cfp-text">Follow us for announcements, updates, and deadlines:</p>
            <ul className="cfp-list">
              <li className="cfp-text">Instagram</li>
              <li className="cfp-text">Facebook</li>
              <li className="cfp-text">LinkedIn</li>
              <li className="cfp-text">X</li>
              <li className="cfp-text">Telegram</li>
              <li className="cfp-text">WhatsApp Channel</li>
              <li className="cfp-text">YouTube</li>
            </ul>
          </section>

          <section className="cfp-section">
            <h2 className="cfp-title">Quick Contact Form</h2>
            <p className="cfp-text">Use this form for quick communication:</p>

            <form className="contact-form">
              <label>Name</label>
              <input type="text" placeholder="e.g., Mathew William" />

              <label>Email</label>
              <input type="email" placeholder="e.g., mathew.william@example.com" />

              <label>Phone</label>
              <input type="text" placeholder="e.g., +1-202-555-0147" />

              <label>Message</label>
              <textarea placeholder="e.g., I need details about your upcoming conferences."></textarea>

              <button type="submit" className="contact-submit">Submit</button>
            </form>
          </section>
        </div>

        {/* SIDEBAR */}
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
