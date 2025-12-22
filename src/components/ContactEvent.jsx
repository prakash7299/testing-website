// ContactEvent.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./ContactEvent.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";

import QuickRegistration from "./QuickRegistration";
import Footer from "./Footer";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function ContactEvent() {
  const [status, setStatus] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePanelRef = useRef(null);

  // SEO meta (event-scoped)
  useEffect(() => {
    document.title = "Contact — ICELS-25 | IntelMeet Global Conferences";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Contact IntelMeet Global Conferences about ICELS-25 — submissions, registration, sponsorship, and enquiries.";

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", window.location.href.split("#")[0]);
  }, []);

  // close mobile nav on outside click / ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMobileNavOpen(false);
    }
    function onDocClick(e) {
      if (!mobileNavOpen) return;
      if (!mobilePanelRef.current) return;
      if (!mobilePanelRef.current.contains(e.target)) setMobileNavOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [mobileNavOpen]);

  // Web3Forms submit handler (same access_key you provided)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);

    // append required Web3Forms params
    fd.append("access_key", "58ef904f-8ece-4b9a-bb6e-336d3bdbabb0");
    fd.append("from_name", "IntelMeet Contact Form (Event Page)");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="conf-page page-container contact-event-page">
      <a href="#main" className="skip-link">Skip to main content</a>

      {/* Topbar */}
      <div className="conf-topbar">
        <div className="conf-top-left">
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
          <span className="conf-sep">|</span>
          <a href="tel:+919025956834" className="conf-phone-link">+91 9025956834</a>
        </div>
        <div className="conf-top-right">
           <div className="conf-top-socials">
          <a href="https://www.facebook.com/IntelMeet/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://x.com/intelmeet" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="conf-navbar" role="banner">
        <div className="conf-nav-left">
          <img src={intelmeet} alt="IntelMeet Global Conferences logo" className="conf-logo" loading="lazy" />
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <ul>
            <li><Link to="/icels" className="nav-link">Home</Link></li>
            <li><Link to="/about-event" className="nav-link">About</Link></li>
            <li><Link to="/callforpaper" className="nav-link">Call for Papers</Link></li>
            <li><Link to="/papersubmissionevent" className="nav-link">Paper Submission</Link></li>
            <li><Link to="/speaker-event" className="nav-link">Speakers</Link></li>
            <li><Link to="/committee-event" className="nav-link">Committee</Link></li>
            <li><Link to="/publications-event" className="nav-link">Publications</Link></li>
            <li><Link to="/contact-event" className="conf-active-section">Contact</Link></li>
          </ul>
        </nav>

        <div className="conf-nav-right">
          <Link to="/registration-event" className="conf-btn-register">Registration</Link>

          <button
            className={`conf-hamburger ${mobileNavOpen ? "open" : ""}`}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(s => !s)}
            type="button"
          >
            <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true"><g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M1 1h18"/><path d="M1 8h18"/><path d="M1 15h18"/></g></svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div className={`conf-mobile-panel ${mobileNavOpen ? "show" : ""}`} role="dialog" aria-modal="true">
          <div className="conf-mobile-inner" ref={mobilePanelRef}>
            <div className="conf-mobile-header">
              <div className="conf-mobile-brand">
                <img src={intelmeet} alt="IntelMeet" style={{ height: 34 }} />
                <strong className="conf-mobile-title">ICELS — 19 Dec 2025</strong>
              </div>
              <button className="conf-mobile-close" onClick={() => setMobileNavOpen(false)} aria-label="Close menu">✕</button>
            </div>

            <ul className="conf-mobile-list">
              <li><Link to="/icels" onClick={() => setMobileNavOpen(false)}>Home</Link></li>
              <li><Link to="/about-event" onClick={() => setMobileNavOpen(false)}>About</Link></li>
              <li><Link to="/callforpaper" onClick={() => setMobileNavOpen(false)}>Call for Papers</Link></li>
              <li><Link to="/papersubmissionevent" onClick={() => setMobileNavOpen(false)}>Paper Submission</Link></li>
              <li><Link to="/speaker-event" onClick={() => setMobileNavOpen(false)}>Speakers</Link></li>
              <li><Link to="/committee-event" onClick={() => setMobileNavOpen(false)}>Committee</Link></li>
              <li><Link to="/publications-event" onClick={() => setMobileNavOpen(false)}>Publications</Link></li>
              <li><Link to="/contact-event" onClick={() => setMobileNavOpen(false)}>Contact</Link></li>
            </ul>

            <div className="conf-mobile-quick">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/benefits" onClick={() => setMobileNavOpen(false)}>Key Benefits</Link></li>
                <li><Link to="/apply-speaker" onClick={() => setMobileNavOpen(false)}>Apply Speaker</Link></li>
                <li><Link to="/papersubmission-guidelines" onClick={() => setMobileNavOpen(false)}>Author Guidelines</Link></li>
              </ul>

              <h4>Important Dates</h4>
              <ul className="conf-mobile-dates">
                <li><strong>Submission deadline:</strong> 15 Dec 2025</li>
                <li><strong>Conference:</strong> 19 Dec 2025</li>
              </ul>
            </div>

            <div style={{ marginTop: 16 }}>
              <QuickRegistration compact />
            </div>

            <div className="conf-mobile-cta">
              <Link to="/papersubmissionevent" className="conf-cta">Submit Paper</Link>
              <Link to="/registration-event" className="conf-cta outline">Register</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="conf-hero" style={{ backgroundImage: `url(${heroImg})` }} aria-label="Contact hero">
        <div className="conf-hero-overlay" style={{ backgroundImage: `url(${heroPattern})` }} />
        <div className="conf-hero-content">
          <div className="conf-eyebrow">Get in Touch</div>
          <h1 className="conf-hero-title">Contact & Support — ICELS-25</h1>
          <p className="conf-hero-theme">Reach out about submissions, sponsorship, registration, or technical help.</p>
        </div>
      </section>

      {/* Main wrapper */}
      <div className="conf-wrapper" id="main">
        <main className="conf-main">
          <section className="conf-card">
            <h2>Contact Us</h2>
            <p className="conf-lead">We welcome inquiries about submissions, registration, sponsorship and support. Use the quick form below and our team will respond promptly.</p>

            <div className="contact-grid">
              <div className="contact-left">
                <h3>Primary Contact</h3>
                <p><strong>Email:</strong> <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a></p>
                <p><strong>Phone / WhatsApp:</strong> +91 9025956834</p>

                <h3 style={{ marginTop: 18 }}>Working hours</h3>
                <p>Support is available 24/7 for conference-related queries. Response times may vary for non-urgent requests.</p>

                <h3 style={{ marginTop: 18 }}>Quick Contact Form</h3>
                <form className="conf-contact-form" onSubmit={handleSubmit} aria-label="Quick contact form">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required placeholder="e.g., Mathew William" />

                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="e.g., mathew.william@example.com" />

                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" placeholder="e.g., +1-202-555-0147" />

                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>

                  <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="submit" className="conf-btn-primary">Send Message</button>
                    <button type="button" className="conf-btn-ghost" onClick={() => { setStatus(null); }}>
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="conf-sidebar" aria-label="Quick links & actions">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
                                   <li><Link to="/about-event">About Event</Link></li>
                                        <li><Link to="/callforpaper">Call For Paper</Link></li>
                                        <li><Link to="/papersubmissionevent">Paper Submission</Link></li>
                                        <li><Link to="/registration-event">Registration</Link></li>
            </ul>
          </div>

          <div className="conf-sidebar-card conf-sidebar-quickreg">
            <h4>Quick Registration</h4>
            <p className="conf-quick-sub">Register quickly to receive updates & early-bird alerts.</p>
            <QuickRegistration />
          </div>

          <div className="conf-sidebar-card">
            <h4>Important Dates</h4>
            <ul className="conf-dates">
              <li><strong>Submission deadline:</strong> 24 Dec 2025</li>
              <li><strong>Conference:</strong> 26 Dec 2025</li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />

      {/* Modal overlay for status */}
      {status && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setStatus(null)}>×</button>
            {status === "success" ? (
              <>
                <h2 className="modal-title">✔ Message Sent</h2>
                <p>Thank you. We received your message and will respond shortly.</p>
              </>
            ) : (
              <>
                <h2 className="modal-title">❌ Submission Failed</h2>
                <p>Please try again or email support@intelmeetglobal.com</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
