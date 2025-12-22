// PaperSubmissionEvent.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./PaperSubmissionEvent.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import Footer from "./FooterEvent";

export default function PaperSubmissionEvent() {
  const [status, setStatus] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePanelRef = useRef(null);
  const firstNavItemRef = useRef(null);

  const WEB3FORMS_ACCESS_KEY = "146dc7a1-8d3e-4647-8d51-bcab9f31680f";

  useEffect(() => {
    // focus first nav item when mobile opens
    if (mobileNavOpen && firstNavItemRef.current) {
      firstNavItemRef.current.focus();
    }
  }, [mobileNavOpen]);

  // close mobile when clicking outside / ESC / resize
  useEffect(() => {
    function onDocClick(e) {
      if (!mobileNavOpen) return;
      if (!mobilePanelRef.current) return;
      if (!mobilePanelRef.current.contains(e.target)) {
        setMobileNavOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setMobileNavOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 900) setMobileNavOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileNavOpen]);

  /* Lock body scroll while mobile nav is open (defensive) */
  useEffect(() => {
    if (mobileNavOpen) {
      const prevOverflow = document.body.style.overflow;
      const prevTouch = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.classList.add("conf-mobile-open");
      return () => {
        document.body.style.overflow = prevOverflow || "";
        document.body.style.touchAction = prevTouch || "";
        document.documentElement.classList.remove("conf-mobile-open");
      };
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.classList.remove("conf-mobile-open");
    }
    return;
  }, [mobileNavOpen]);

  const validateFileSize = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5000 * 1024) {
      alert("File size must be below 5 MB");
      e.target.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "IntelMeet Abstract Submission");
    formData.append(
      "subject",
      `Abstract Submission – ${formData.get("full_name")}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  /* NAV ITEMS: match ConferenceEvent.jsx exactly */
  const anchors = [
    { id: "home", label: "Home", route: "/icels" },
    { id: "about", label: "About", route: "/about-event" },
    { id: "callforpaper", label: "Call for Papers", route: "/callforpaper" },
    { id: "papersubmission", label: "Paper Submission", route: "/papersubmissionevent" },
    { id: "speakers", label: "Speakers", route: "/speaker-event" },
    { id: "committee", label: "Committee", route: "/committee-event" },
    { id: "publications", label: "Publications", route: "/publications-event" },
    { id: "contact", label: "Contact", route: "/contact-event" },
  ];

  return (
    <div className="conf-page page-container">
      <a href="#content" className="skip-link">Skip to content</a>

      {/* ---------- TOP BAR (matching ConferenceEvent.jsx) ---------- */}
      <div className="conf-topbar" role="region" aria-label="Contact and registration">
        <div className="conf-contact-inline">
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
          <span className="conf-sep">|</span>
          <a href="tel:+919025956834" className="conf-phone-link">+91 9025956834</a>
        </div>

        <div className="conf-top-socials" aria-hidden={false}>
          <a href="https://www.facebook.com/IntelMeet/" target="_blank" rel="noreferrer" aria-label="IntelMeet on Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noreferrer" aria-label="IntelMeet on Instagram"><FaInstagram /></a>
          <a href="https://x.com/intelmeet" target="_blank" rel="noreferrer" aria-label="IntelMeet on X"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank" rel="noreferrer" aria-label="IntelMeet on LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal" target="_blank" rel="noreferrer" aria-label="IntelMeet on YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* ---------- NAVBAR (matching ConferenceEvent.jsx) ---------- */}
      <header className="conf-navbar" role="banner" aria-label="Main navigation">
        <div className="conf-nav-left">
          <img src={intelmeet} alt="IntelMeet Logo" className="conf-logo" />
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <ul>
            {anchors.map((a, idx) => (
              <li key={a.id}>
                <Link
                  to={a.route}
                  onClick={() => setMobileNavOpen(false)}
                  ref={idx === 0 ? firstNavItemRef : null}
                >
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="conf-nav-right">
          <Link to="/registration-event" className="conf-btn-register">Registration</Link>

          <button
            className={`conf-hamburger ${mobileNavOpen ? "open" : ""}`}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((s) => !s)}
            type="button"
          >
            <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true">
              <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1h18" />
                <path d="M1 8h18" />
                <path d="M1 15h18" />
              </g>
            </svg>
          </button>
        </div>
      </header>

      {/* ---------- MOBILE PANEL (moved OUTSIDE header so fixed positioning works reliably) ---------- */}
      <div
        className={`conf-mobile-panel ${mobileNavOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="conf-mobile-backdrop" onClick={() => setMobileNavOpen(false)} />
        <div className="conf-mobile-inner centered" ref={mobilePanelRef}>
          <div className="conf-mobile-header">
            <div className="conf-mobile-brand">
              <img src={intelmeet} alt="IntelMeet" style={{ height: 34 }} />
              <strong className="conf-mobile-title">Paper Submission</strong>
            </div>

            <button
              className="conf-mobile-close"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
              title="Close"
            >
              ✕
            </button>
          </div>

          <nav className="conf-mobile-nav" aria-label="Mobile primary">
            <ul className="conf-mobile-list">
              {anchors.map((a, idx) => (
                <li key={a.id}>
                  <Link to={a.route} onClick={() => setMobileNavOpen(false)} ref={idx === 0 ? firstNavItemRef : null}>
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <hr className="mobile-sep" />

          <div className="conf-mobile-quick">
            <h4>Quick Registration</h4>
            {/* keep quick registration links or component minimal here; component not imported intentionally */}
            <div style={{ marginTop: 8 }}>
              <a className="conf-cta" href="/papersubmission">Submit Paper</a>
              <a className="conf-cta outline" href="/registration-event" style={{ marginLeft: 8 }}>Register</a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section
        className="conf-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div
          className="conf-hero-overlay"
          style={{ backgroundImage: `url(${heroPattern})` }}
        />

        <div className="conf-hero-content">
          <div className="conf-eyebrow">Submit Abstract • Join ICELS-25</div>
          <h1 className="conf-hero-title">Paper Submission – ICELS-25</h1>
          <p className="conf-hero-theme">
            Submit Your Research Abstract & Join the Global Environmental Science Community
          </p>
        </div>
      </section>

      {/* ---------- LAYOUT GRID ---------- */}
      <div className="conf-wrapper">
        <main className="conf-main">
          {/* ---------- FORM CARD (UNCHANGED) ---------- */}
          <section className="conf-card submission-card">
            <h2 className="form-title">Abstract / Paper Submission Form</h2>
            <p className="form-subtext">
              Fill in the details below and upload your abstract (PDF/DOC).  
              Ensure file size is under <strong>5 MB</strong>.
            </p>

            <form className="paper-form" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-grid">
                <div className="form-row">
                  <label>Full Name</label>
                  <input type="text" name="full_name" required placeholder="eg., Dr. Andrew Collins" />
                </div>

                <div className="form-row">
                  <label>Email Address</label>
                  <input type="email" name="email" required placeholder="eg., andrew@email.com" />
                </div>

                <div className="form-row">
                  <label>Country</label>
                  <input type="text" name="country" placeholder="eg., India" />
                </div>

                <div className="form-row">
                  <label>Phone Number</label>
                  <input type="text" name="phone" placeholder="eg., +1 9876543210" />
                </div>

                <div className="form-row wide">
                  <label>Paper Title</label>
                  <input type="text" name="paper_title" placeholder="Enter your research title" />
                </div>

                <div className="form-row wide">
                  <label>Upload Abstract (PDF / DOC / DOCX)</label>
                  <input type="file" name="abstract_file" required onChange={validateFileSize} />
                </div>

                <div className="form-row wide">
                  <label>Comments (Optional)</label>
                  <textarea name="comments" placeholder="Mention special requests, or presentation type..." />
                </div>
              </div>

              <button className="btn-submit" type="submit">Submit Abstract</button>
            </form>

            {status === "success" && (
              <p className="form-success">✔ Your abstract has been submitted successfully!</p>
            )}

            {status === "error" && (
              <p className="form-error">❌ Submission failed. Try again later.</p>
            )}
          </section>

          {/* ---------- GUIDELINES (UNCHANGED) ---------- */}
          <section className="conf-card guidelines-card">
            <h2>Submission Guidelines</h2>
            <ul className="guidelines-list">
              <li>Abstract must be between 150–300 words.</li>
              <li>Keywords: 3–5 mandatory.</li>
              <li>Upload only PDF/DOC/DOCX formats.</li>
              <li>Maximum file size allowed: 5 MB.</li>
              <li>Research must be original and unpublished.</li>
              <li>Accepted abstracts will be included in conference proceedings.</li>
            </ul>
          </section>
        </main>

        {/* ---------- SIDEBAR (UNCHANGED) ---------- */}
        <aside className="conf-sidebar">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
                          <li>
                            <Link to="/icels">ICELS-25 Home</Link>
                          </li>
                          <li>
                            <Link to="/papersubmissionevent">Submit Paper</Link>
                          </li>
                          <li>
                            <Link to="/registration-event">Registration Fees</Link>
                          </li>
                          <li>
                            <Link to="/contact-event">Contact</Link>
                          </li>
                        </ul>
          </div>

          <div className="conf-sidebar-card">
            <h3>Important Dates</h3>
            <ul className="conf-dates">
              <li><strong>Submission Deadline:</strong> 24 December 2025</li>
              <li><strong>Registration:</strong> 24 December 2025</li>
              <li><strong>Conference:</strong> 26 December 2025</li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
