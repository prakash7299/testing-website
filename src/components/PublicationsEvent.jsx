// src/event-pages/PublicationsEvent.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./PublicationsEvent.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";

import Footer from "../components/FooterEvent";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function PublicationsEvent() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePanelRef = useRef(null);

  useEffect(() => {
    document.title =
      "Publications | IntelMeet Global Conferences – Event Publications";
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileNavOpen &&
        mobilePanelRef.current &&
        !mobilePanelRef.current.contains(e.target)
      ) {
        setMobileNavOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavOpen]);

  return (
    <div className="conf-page publications-event-page">
      {/* TOP BAR */}
      <div className="conf-topbar">
        <div className="conf-top-left">
          <a href="mailto:support@intelmeetglobal.com">
            support@intelmeetglobal.com
          </a>
          <span className="conf-sep">|</span>
          <a href="tel:+919025956834">+91 9025956834</a>
        </div>
        <div className="conf-top-right">
          <div className="conf-top-socials">
            <a href="https://www.facebook.com/IntelMeet/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="https://x.com/intelmeet"><FaTwitter /></a>
                                <a href="https://www.linkedin.com/in/intelmeet-global/"><FaLinkedinIn /></a>
                                <a href="https://www.youtube.com/@intelmeetglobal"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="conf-navbar">
        <img src={intelmeet} alt="IntelMeet" className="conf-logo" />

        <nav className="nav-links">
          <ul>
            <li><Link to="/icels">Home</Link></li>
            <li><Link to="/about-event">About</Link></li>
            <li><Link to="/callforpaper">Call for Papers</Link></li>
            <li><Link to="/papersubmission-event">Paper Submission</Link></li>
            <li><Link to="/speaker-event">Speakers</Link></li>
            <li><Link to="/committee-event">Committee</Link></li>
            <li><span className="conf-active-section">Publications</span></li>
            <li><Link to="/contact-event">Contact</Link></li>
          </ul>
        </nav>

        <div className="conf-nav-right">
          <Link to="/registration-event" className="conf-btn-register">
            Registration
          </Link>

          <button
            className="conf-hamburger"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`conf-mobile-panel ${mobileNavOpen ? "show" : ""}`}>
        <div className="conf-mobile-inner" ref={mobilePanelRef}>
          <button
            className="conf-mobile-close"
            onClick={() => setMobileNavOpen(false)}
          >
            ✕
          </button>

          <ul className="conf-mobile-list">
            <li><Link to="/icels">Home</Link></li>
            <li><Link to="/about-event">About</Link></li>
            <li><Link to="/callforpaper">Call for Papers</Link></li>
            <li><Link to="/papersubmission-event">Paper Submission</Link></li>
            <li><Link to="/speaker-event">Speakers</Link></li>
            <li><Link to="/committee-event">Committee</Link></li>
            <li><Link to="/publications-event">Publications</Link></li>
            <li><Link to="/contact-event">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* HERO */}
      <section
        className="conf-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div
          className="conf-hero-overlay"
          style={{ backgroundImage: `url(${heroPattern})` }}
        />
        <div className="conf-hero-content">
          <div className="conf-eyebrow">Publishing • Academic Impact</div>
          <h1 className="conf-hero-title">Conference Publications</h1>
          <p className="conf-hero-theme">
            Premium publication opportunities for ICELS-25 authors
          </p>
        </div>
      </section>

      {/* MAIN */}
      <main className="pub-wrapper">
        <header className="pub-header">
          <span className="pub-accent" />
          <div>
            <h2>Publication Opportunities</h2>
            <p>
              All accepted papers and abstracts from ICELS-25 are eligible for
              official conference publications and journal recommendations.
            </p>
          </div>
        </header>

        <div className="pub-grid">
          {[
            ["Conference Proceedings", "Official indexed proceedings enabling citation and academic recognition."],
            ["Journal Publication Opportunities", "Selected high-quality articles may be recommended to partnered journals."],
            ["Peer Review Process", "Each submission undergoes a structured internal peer review."],
            ["Digital Repository Access", "Permanent archiving in the IntelMeet digital library."],
            ["Research Discoverability", "Improved global visibility, indexing and citation impact."],
            ["Publication Certificates", "Official publication certificates for authors."],
            ["Publication Standards", "Original, plagiarism-free submissions following ethical guidelines."],
          ].map(([title, desc]) => (
            <article className="pub-card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}

          <article className="pub-card pub-support">
            <h3>Publication Support</h3>
            <p>Email: <b>support@intelmeetglobal.com</b></p>
            <p>Phone / WhatsApp: <b>+91 90259 56834</b></p>
          </article>
        </div>

        <div className="pub-cta">
          <Link to="/papersubmission-event" className="conf-cta">
            Submit Your Paper
          </Link>
          <Link to="/registration-event" className="conf-cta outline">
            Register Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
