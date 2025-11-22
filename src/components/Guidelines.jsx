import React from "react";
import "./About.css";
import "./Login.css"; 
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

export default function Guidelines() {
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
          <h1>Submission & Presentation Guidelines</h1>
          <p>Follow the official instructions before submitting your paper</p>
        </div>
      </section>

      {/* ---------------- PAGE CONTENT ---------------- */}
      <div className="content-sidebar-wrapper">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="content-main">

         {/* ---------------- PAPER SUBMISSION HEADER ---------------- */}
<section className="cfp-section">

  <h3 className="cfp-title" style={{ marginTop: "10px" }}>
    Submission & Presentation Guidelines
  </h3>

  <p className="cfp-text">
    Please submit your paper after reviewing all the guidelines provided below.
  </p>

  {/* Submit Button */}
  <Link 
    to="/papersubmission"
    className="cfp-btn-primary"
    style={{ display: "inline-block", marginTop: "10px" }}
  >
    Submit Your Paper
  </Link>

  <p className="cfp-text" style={{ marginTop: "15px" }}>
    IntelMeet Global Conferences welcomes high-quality, original research contributions 
    from scholars, researchers, academicians, industry professionals, and practitioners 
    worldwide. Kindly follow the guidelines below to ensure accurate submission, smooth 
    review, and a consistent presentation experience.
  </p>
</section>


          {/* ===========================================================
              ABSTRACT GUIDELINES
          ============================================================ */}
          <section className="cfp-section">
            <h2 className="cfp-title">Abstract Submission Guidelines</h2>

            <ul className="cfp-list">
              <li>Abstracts must present original and unpublished work.</li>
              <li>Written clearly in English and free from errors.</li>
              <li>Length: <b>200–250 words</b> (single paragraph).</li>
              <li>Paper title, author name(s), and affiliation(s) centered.</li>
              <li>Include a short biography of the presenting author.</li>
              <li>
                File Format: <b>MS Word (.doc / .docx)</b> – 
                <a href="#" style={{ color: "#007bff" }}> Download Abstract Template</a>
              </li>
              <li>Acknowledgement email sent within <b>24 hours</b>.</li>
            </ul>
          </section>

          {/* ===========================================================
              FULL PAPER GUIDELINES
          ============================================================ */}
          <section className="cfp-section">
            <h2 className="cfp-title">Full Paper Submission Guidelines</h2>

            <p className="cfp-text">
              Authors whose abstracts are accepted and who complete registration may submit
              their full papers.
            </p>

            <ul className="cfp-list">
              <li>Full manuscript must be in English and well-structured.</li>
              <li>Format: <b>Single-column</b> layout.</li>
              <li>Length: <b>6–8 pages</b>.</li>
              <li>
                File Format: <b>MS Word (.doc / .docx)</b> –
                <a href="#" style={{ color: "#007bff" }}> Download Full Paper Template</a>
              </li>
              <li>Upload full papers through the official IntelMeet submission form.</li>
            </ul>
          </section>

          {/* PRESENTATION GUIDELINES */}
          <section className="cfp-section">
            <h2 className="cfp-title">Presentation Guidelines</h2>

            <h3 className="cfp-subtitle">Oral Presentation</h3>
            <ul className="cfp-list">
              <li>Total Duration: <b>15 minutes</b> (12 min presentation + 3 min Q&A).</li>
              <li>Presenter must be an author or co-author.</li>
              <li>File Formats: <b>.ppt, .pptx, .pdf</b>.</li>
              <li>PowerPoint recommended for compatibility.</li>
            </ul>

            <h3 className="cfp-subtitle">Virtual Presentation</h3>
            <ul className="cfp-list">
              <li>Total Time: <b>15 minutes</b></li>
              <li>Platform: <b>Zoom</b></li>
              <li>Join <b>30 minutes early</b> for technical checks.</li>
            </ul>

            <h3 className="cfp-subtitle">Video Presentation</h3>
            <ul className="cfp-list">
              <li>Maximum Duration: <b>12 minutes</b></li>
              <li>Accepted formats: <b>MP4 / MOV</b></li>
              <li>Must include clear narration and audio.</li>
            </ul>

            <h3 className="cfp-subtitle">Poster Presentation</h3>
            <ul className="cfp-list">
              <li>Posters must be prepared in <b>digital format (PDF)</b>.</li>
              <li>Use portrait orientation (A4 or A3).</li>
              <li>Include: Title, Authors, Affiliation, Summary, Methods, Results, Conclusion.</li>
            </ul>

            <h3 className="cfp-subtitle">General Tips for Presenters</h3>
            <ul className="cfp-list">
              <li>Keep slides simple and professional.</li>
              <li>Highlight key results with visuals.</li>
              <li>Follow flow: <b>Introduction → Methods → Results → Conclusion</b>.</li>
            </ul>
          </section>

          {/* SUPPORT */}
          <section className="cfp-section">
            <h2 className="cfp-title">Assistance & Support</h2>
            <ul className="cfp-list">
              <li>📧 support@intelmeetglobal.com</li>
              <li>📞 +91 94424 17477</li>
            </ul>

            <p className="cfp-text"><b>Submit Your Paper:</b> Use the official online submission form.</p>
          </section>

          {/* ---------------- FULL SUBMIT SECTION AT THE END ---------------- */}
<section className="cfp-section">
  <h2 className="cfp-title">Submit Your Paper</h2>

  <p className="cfp-text">
    After reviewing the guidelines above, please proceed to upload your paper.
  </p>
 <div><span className="hidden-placeholder">f</span></div>
  <Link to="/papersubmission" className="cfp-btn-primary">
    Submit Your Paper
  </Link>
</section>

        </div>

        {/* ---------------- RIGHT SIDEBAR ---------------- */}
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
