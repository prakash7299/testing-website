// SpeakerEvent.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SpeakerEvent.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";

import walidaPhoto from "../assets/speaker-walida.png";
import surajPhoto from "../assets/speaker-suraj.png";
import hebaPhoto from "../assets/speaker-heba.png";
import narinderjitPhoto from "../assets/speaker-narinderjit.png";

import Footer from "../components/Footer";
import QuickRegistration from "./QuickRegistration";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function SpeakerEvent() {
  const speakers = [
    {
      name: "Dr. Walida Ounruean",
      title: "International Education Ambassador",
      affiliation: "Thailand",
      photo: walidaPhoto,
    },
    {
      name: "Dr. Suraj Kumar Mukti",
      title: "Professor",
      affiliation: "National Institute of Technology Raipur, India",
      photo: surajPhoto,
    },
    {
      name: "Dr. Narinderjit Kaur",
      title: "Dept. of Chemistry",
      affiliation: "Kanya Maha Vidyalaya, India",
      photo: narinderjitPhoto,
    },
    {
      name: "Dr. Heba Mahmoud Mohamed Afify",
      title: "Professor",
      affiliation: "Cairo University, Egypt",
      photo: hebaPhoto,
    },
  ];

  /* NAV ITEMS (same as ConferenceEvent.jsx) */
  const anchors = [
    { id: "home", label: "Home", route: "/ICELS" },
    { id: "about", label: "About", route: "/about-event" },
    { id: "callforpaper", label: "Call for Papers", route: "/callforpaper" },
    { id: "papersubmission", label: "Paper Submission", route: "/papersubmissionevent" },
    { id: "speakers", label: "Speakers", route: "/speaker-event" },
    { id: "committee", label: "Committee", route: "/committee-event" },
    { id: "publications", label: "Publications", route: "/publications-event" },
    { id: "contact", label: "Contact", route: "/contact-event" },
  ];

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePanelRef = useRef(null);
  const firstNavItemRef = useRef(null);

  /* Focus first menu item when opened */
  useEffect(() => {
    if (mobileNavOpen && firstNavItemRef.current) {
      firstNavItemRef.current.focus();
    }
  }, [mobileNavOpen]);

  /* Close on outside click / ESC / resize */
  useEffect(() => {
    function onDocClick(e) {
      if (!mobileNavOpen) return;
      if (!mobilePanelRef.current) return;
      if (!mobilePanelRef.current.contains(e.target)) setMobileNavOpen(false);
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

  /* Lock body scroll when mobile menu opens */
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      };
    }
  }, [mobileNavOpen]);

  return (
    <div className="conf-page page-container">
      <a href="#content" className="skip-link">Skip to content</a>

      {/* ---------- TOP BAR ---------- */}
      <div className="conf-topbar" role="region" aria-label="Contact and registration">
        <div className="conf-contact-inline">
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
          <span className="conf-sep">|</span>
          <a href="tel:+919442417477" className="conf-phone-link">+91 9442417477</a>
        </div>

        <div className="conf-top-socials">
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank"><FaInstagram /></a>
          <a href="https://x.com/intelmeet" target="_blank"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal" target="_blank"><FaYoutube /></a>
        </div>
      </div>

      {/* ---------- NAVBAR ---------- */}
      <header className="conf-navbar" role="banner">
        <div className="conf-nav-left">
          <img src={intelmeet} className="conf-logo" alt="IntelMeet" />
        </div>

        <nav className="nav-links">
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
          <Link to="/papersubmissionevent" className="conf-btn-register">
            Submit Paper
          </Link>

          <button
            className={`conf-hamburger ${mobileNavOpen ? "open" : ""}`}
            aria-expanded={mobileNavOpen}
            aria-label="Toggle Menu"
            onClick={() => setMobileNavOpen((s) => !s)}
          >
            <svg width="20" height="16" viewBox="0 0 20 16">
              <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1h18" />
                <path d="M1 8h18" />
                <path d="M1 15h18" />
              </g>
            </svg>
          </button>
        </div>
      </header>

      {/* ---------- MOBILE PANEL (UNIFIED, OUTSIDE HEADER) ---------- */}
      <div
        className={`conf-mobile-panel ${mobileNavOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="conf-mobile-backdrop" onClick={() => setMobileNavOpen(false)} />

        <div className="conf-mobile-inner centered" ref={mobilePanelRef}>
          <div className="conf-mobile-header">
            <div className="conf-mobile-brand">
              <img src={intelmeet} alt="IntelMeet" style={{ height: 34 }} />
              <strong className="conf-mobile-title">ICELS — Speakers</strong>
            </div>

            <button className="conf-mobile-close" onClick={() => setMobileNavOpen(false)}>
              ✕
            </button>
          </div>

          <nav className="conf-mobile-nav">
            <ul className="conf-mobile-list">
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

          <hr className="mobile-sep" />

          <div className="conf-mobile-quick">
            <h4>Quick Registration</h4>
            <QuickRegistration compact />
          </div>

          <div className="conf-mobile-cta">
            <Link to="/papersubmissionevent" className="conf-cta">Submit Paper</Link>
            <Link to="/registration-event" className="conf-cta outline">Register</Link>
          </div>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="conf-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="conf-hero-overlay" />
        <div className="conf-hero-content">
          <h1 className="conf-hero-title">Conference Speakers – ICELS-25</h1>
          <p className="conf-hero-theme">Meet our distinguished global experts</p>
        </div>
      </section>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="conf-wrapper">
        <main id="content" className="conf-main">
          <div className="speaker-header premium-header">
            <div className="premium-h-leftAccent" />

            <div className="premium-h-text">
              <h2 className="premium-title">Featured Conference Speakers</h2>

              <p className="premium-sub">
                ICELS-25 proudly features an elite group of researchers, professors,
                innovators, and academic leaders who bring world-class expertise.
              </p>

              <Link to="/apply-speaker" className="premium-apply">Apply as Speaker</Link>
            </div>
          </div>

          <div className="speaker-grid">
            {speakers.map((sp, i) => (
              <div className="speaker-card luxury-card" key={i}>
                <div className="lux-avatar-box">
                  {sp.photo ? (
                    <img src={sp.photo} className="lux-avatar" alt={sp.name} />
                  ) : (
                    <div className="lux-avatar-fallback">{sp.name[0]}</div>
                  )}
                </div>

                <div className="lux-details">
                  <h3 className="lux-name">{sp.name}</h3>
                  {sp.title && <div className="lux-title">{sp.title}</div>}
                  {sp.affiliation && <div className="lux-affiliation">{sp.affiliation}</div>}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* ---------- SIDEBAR ---------- */}
        <aside className="conf-sidebar">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/benefits">Key Benefits</Link></li>
              <li><Link to="/apply-speaker">Apply Speaker</Link></li>
              <li><Link to="/instructions">Instructions</Link></li>
              <li><Link to="/papersubmission-guidelines">Author Guidelines</Link></li>
            </ul>
          </div>

          <div className="conf-sidebar-card conf-sidebar-quickreg">
            <h4>Quick Registration</h4>
            <QuickRegistration />
          </div>

          <div className="conf-sidebar-card">
            <h4>Actions</h4>
            <Link to="/papersubmissionevent" className="conf-sidebar-btn">Submit Paper</Link>
            <Link to="/registration-event" className="conf-sidebar-btn outline">Register</Link>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
