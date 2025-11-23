import React, { useState, useRef } from "react";
import "./RegistrationAndFees.css";
import "./About.css";
import "./Login.css";
import "./UpcomingConferences.css";
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function RegistrationAndFees() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const step2Ref = useRef(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    // allow DOM update then scroll to form
    setTimeout(() => {
      if (step2Ref.current) {
        step2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 140);
  };

  const categories = [
    ["Presenter (Paper Presentation)", "USD 120", "USD 150"],
    ["Poster Presenter", "USD 90", "USD 120"],
    ["Video Presentation", "USD 85", "USD 110"],
    ["Listener / Attendee", "USD 40", "USD 60"],
    ["Extra Paper (Same Author)", "USD 50", "USD 70"],
    ["Co-Author Participation", "USD 30", "USD 45"],
    ["Keynote Speaker", "USD 150", "USD 200"],
    ["Session Chair", "USD 100", "USD 140"],
  ];

  return (
    <div className="page-container about-page">
      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>{" "}
          | <a href="tel:+919442417477" className="phone-link">+91 9442417477</a>
        </div>
        <div><span className="hidden-placeholder">f</span></div>
        <div className="top-icons">
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* NAV */}
      <div className="navbar">
        <img src={intelmeet} alt="IntelMeet" className="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/upcoming-conferences">Upcoming Conferences</Link></li>

          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
            <div className="dropdown-menu">
              <Link className="nav-link" to="/papersubmission">📄 Submission Form</Link>
              <Link className="nav-link" to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
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

      {/* HERO */}
      <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="uc-hero-content">
          <h1>Registration & Fees</h1>
          <p>Choose your participation category & complete your registration</p>
        </div>
      </section>

      <div className="content-sidebar-wrapper">

        {/* LEFT: MAIN */}
        <div className="content-main">
          <div className="about-section reg-section">
            <h2 className="cfp-title about-section-title">Registration Categories & Fees</h2>

            <p className="cfp-text">
              IntelMeet Global Conferences provides flexible registration options to support presenters,
              listeners, and contributors worldwide. Participants may complete registration via online payment,
              bank transfer, or PayPal.
            </p>

            <p className="cfp-text">
              For bank transfer or PayPal instructions contact <strong>support@intelmeetglobal.com</strong>
              {" "}or <strong>+91 94424 17477</strong>.
            </p>

            {/* TABLE WRAPPER - single table with horizontal scroll on small screens */}
            <div className="reg-card">
              <div className="reg-table-wrap">
                <table className="reg-table">
                  <thead>
                    <tr>
                      <th>Participation Category</th>
                      <th>Early Registration<br /><span className="muted">Till 25th Nov 2025</span></th>
                      <th>General Registration<br /><span className="muted">Till 27th Nov 2025</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map(([cat, early, gen]) => (
                      <tr
                        key={cat}
                        className={selectedCategory === cat ? "selected-row" : ""}
                        onClick={() => handleSelectCategory(cat)}
                      >
                        <td>{cat}</td>
                        <td className="price-col">{early}</td>
                        <td className="price-col">{gen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="click-msg">Click any row to continue registration</p>

            {/* STEP 2 FORM */}
            {selectedCategory && (
              <div ref={step2Ref} className="step2-section">
                <h3 className="step-title">Step 2: Complete the Registration Form</h3>
                <p className="cfp-text">Selected Category: <strong>{selectedCategory}</strong></p>

                <form className="reg-form">
                  <div className="form-row"><label>Full Name</label><input type="text" placeholder="eg., David Mathew" /></div>
                  <div className="form-row"><label>Email Address</label><input type="email" placeholder="eg., david.mathew@email.com" /></div>
                  <div className="form-row"><label>Country</label><input type="text" placeholder="Select Country" /></div>
                  <div className="form-row"><label>Phone Number</label><input type="text" placeholder="eg., +1-9876543210" /></div>
                  <div className="form-row"><label>Highest Qualification</label><input type="text" placeholder="eg., MSc / PhD / M.Tech" /></div>
                  <div className="form-row"><label>Full Address</label><input type="text" placeholder="eg., 221B Baker Street…" /></div>
                  <div className="form-row"><label>Zip / Pin Code</label><input type="text" placeholder="eg., 560001" /></div>
                  <div className="form-row"><label>Paper Title (if applicable)</label><input type="text" placeholder="(If applicable) eg., Deep Learning Approach…" /></div>

                  <div className="form-row">
                    <label>Conference Name &amp; Date</label>
                    <input type="text" readOnly value="International Conference on Science, Engineering & Technology (ICSET-2025) – 28 November 2025" />
                  </div>

                  <div className="form-row"><label>Upload Professional Image</label><input type="file" /></div>
                  <div className="form-row"><label>Upload Identity Proof (Any one)</label><input type="file" /></div>
                  <div className="form-row"><label>Additional Comments (Optional)</label><textarea placeholder="eg., requesting afternoon session slot"></textarea></div>

                  <label className="terms-line">
                    <input type="checkbox" /> <span>I have read and agree to the Terms &amp; Conditions of IntelMeet Global Conferences.</span>
                  </label>

                  <div className="form-actions">
                    <button type="button" className="btn-submit">Submit Now</button>
                    <button type="button" className="btn-reset" onClick={() => setSelectedCategory(null)}>Reset</button>
                  </div>

                  <div className="covers-contact">
                    <div className="covers">
                      <h4>What Your Registration Covers</h4>
                      <ul>
                        <li>Access to all conference sessions</li>
                        <li>Access to expert talks and keynote sessions</li>
                        <li>Conference agenda and session information</li>
                        <li>Technical assistance throughout the event</li>
                        <li>Inclusion of your presentation in the official conference schedule</li>
                        <li>Access to shared session materials after the event</li>
                      </ul>
                    </div>

                    <div className="contact-support">
                      <h4>Contact Support</h4>
                      <p>If you prefer bank transfer or PayPal, request the account details:</p>
                      <p><strong>Email:</strong> support@intelmeetglobal.com</p>
                      <p><strong>Phone:</strong> +91 94424 17477</p>
                    </div>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/benefits">Key Benefits</Link></li>
            <li><Link to="/apply-speaker">Apply to Become a Speaker</Link></li>
            <li><Link to="/instructions">Instructions for Participants</Link></li>
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
