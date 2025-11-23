// ParticipantsInstructions.jsx
import React from "react";
import "./ParticipantsInstructions.css";
import "./Login.css";
import intelmeet from "../assets/intelmeet.jpeg";
import photo from "../assets/confimage-1.jpeg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";

export default function ParticipantsInstructions() {
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
          <h1>Instructions for Participants</h1>
          <p>All guidelines to help you participate smoothly in the conference</p>
        </div>
      </section>

      {/* ---------- PAGE CONTENT + SIDEBAR ---------- */}
      <div className="content-sidebar-wrapper">

        {/* ---------- LEFT CONTENT ---------- */}
        <div className="instructions-wrapper">

          <h2 className="inst-title">Instructions for Participants</h2>

          {/* ---- BLOCK ---- */}
          <div className="inst-block">
            <h3>1. Registration & Joining</h3>
            <ul>
              <li>Join using the official meeting link shared by the IntelMeet team.</li>
              <li>Use the same <b>name</b> and <b>email</b> used during submission.</li>
              <li>Reminder notifications will be sent before the event.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>2. Before the Conference</h3>
            <ul>
              <li>Use a stable internet connection and a laptop/desktop.</li>
              <li>Test your camera, microphone, and speakers.</li>
              <li>Join from a quiet, well-lit environment.</li>
              <li>Close all unnecessary apps to avoid lag.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>3. Presentation Requirements</h3>
            <ul>
              <li><b>Presentation Time:</b> 12 minutes</li>
              <li><b>Q&A Time:</b> 3 minutes</li>
              <li><b>Recommended Slide Count:</b> Up to 12 slides</li>
              <li>Present in English only.</li>
              <li>Join 30 minutes early to avoid missing your session.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>4. Sharing Your Presentation</h3>
            <ul>
              <li>Keep your PPT open before your session.</li>
              <li>Share your screen and switch to slideshow mode.</li>
              <li>If slides freeze, stop sharing and share again.</li>
              <li>If needed, email your PPT to the team for backup sharing.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>5. Technical Support</h3>
            <ul>
              <li>Reconnect audio if you face issues.</li>
              <li>Turn off your camera if the network becomes unstable.</li>
              <li>Rejoin the session if your connection drops.</li>
              <li>Use headphones to reduce background noise.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>6. Q&A Guidelines</h3>
            <ul>
              <li>One question will be taken per presentation.</li>
              <li>Keep your mic muted until invited.</li>
              <li>For extended discussion, contact the presenter privately.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>7. If You Cannot Present Live</h3>
            <ul>
              <li>You may send a <b>recorded presentation</b> (slides + narration).</li>
              <li>Pre-recorded presentations are accepted for technical difficulties.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>8. Virtual Background (If Provided)</h3>
            <ul>
              <li>Use the official background during the group photo session.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>9. Certificates</h3>
            <ul>
              <li>Certificates are issued within <b>24–48 business hours.</b></li>
              <li>Attendance must be marked at the start.</li>
            </ul>
          </div>

          <div className="inst-block">
            <h3>10. Time Zone</h3>
            <p>All schedules follow UTC/GMT. Participants must convert to their local time zones.</p>
          </div>

          <div className="inst-block">
            <h3>Support</h3>
            <p>Email: support@intelmeetglobal.com<br />Phone: +91 94424 17477</p>
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
