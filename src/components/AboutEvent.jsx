// AboutEvent.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./AboutEvent.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";
import Footer from "../components/Footer";
import QuickRegistration from "./QuickRegistration";

/*
  AboutEvent.jsx - Luxury responsive About page
  - Uses the exact Topbar + Navbar + Mobile menu markup & behavior from ConferenceEvent.jsx
  - Preserves all original About content, sidebar, and quick registration
*/

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const pageData = {
  title: "About — ICELS-25 & IntelMeet Global Conferences",
  subtitle: "About the conference, organisation, vision, mission and offerings",
  hero: heroImg,
  date: "19 December 2025",
};

/* NAV ITEMS: exactly the same as ConferenceEvent.jsx */
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

export default function AboutEvent() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePanelRef = useRef(null);
  const firstNavItemRef = useRef(null);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    document.title = `${pageData.title} | IntelMeet Global Conferences`;
    const description = "About ICELS-25 and IntelMeet Global Conferences. Learn mission, vision, values, offerings, and why to choose IntelMeet.";
    const existing = document.querySelector('meta[name="description"]');
    if (!existing) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    } else {
      existing.content = description;
    }

    const ldId = "about-page-jsonld";
    if (document.getElementById(ldId)) document.getElementById(ldId).remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageData.title,
      description,
    });
    document.head.appendChild(ld);
  }, []);

  /* Close mobile panel when clicking outside or pressing ESC; focus management */
  useEffect(() => {
    function handleOutside(e) {
      if (!mobileNavOpen) return;
      if (!mobilePanelRef.current) return;
      if (!mobilePanelRef.current.contains(e.target)) setMobileNavOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setMobileNavOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileNavOpen]);

  /* when mobile opens, move focus into panel for accessibility */
  useEffect(() => {
    if (mobileNavOpen && firstNavItemRef.current) {
      firstNavItemRef.current.focus();
    }
  }, [mobileNavOpen]);

  /* Smooth anchors (for in-page links) */
  useEffect(() => {
    function handler(e) {
      const el = e.target.closest("a[href^='#']");
      if (!el) return;
      const href = el.getAttribute("href");
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileNavOpen(false);
    }
    const nav = document.querySelector(".conf-page .conf-navbar");
    if (nav) nav.addEventListener("click", handler);
    return () => nav && nav.removeEventListener("click", handler);
  }, []);

  /* lock body scroll when mobile menu open (prevents background scroll pushing modal) */
  useEffect(() => {
    if (mobileNavOpen) {
      const prevOverflow = document.body.style.overflow;
      const prevTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.classList.add("conf-mobile-open");
      return () => {
        document.body.style.overflow = prevOverflow || "";
        document.body.style.touchAction = prevTouchAction || "";
        document.documentElement.classList.remove("conf-mobile-open");
      };
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.classList.remove("conf-mobile-open");
    }
    return;
  }, [mobileNavOpen]);

  return (
    <div className="about-page conf-page page-container">
      <a href="#content" className="skip-link">Skip to content</a>

      {/* Topbar (REPLACED to match ConferenceEvent.jsx exactly) */}
      <div className="conf-topbar" role="region" aria-label="Contact and registration">
        <div className="conf-contact-inline">
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
          <span className="conf-sep">|</span>
          <a href="tel:+919442417477" className="conf-phone-link">+91 9442417477</a>
        </div>

        <div className="conf-top-socials" aria-hidden={false}>
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noreferrer" aria-label="IntelMeet on Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noreferrer" aria-label="IntelMeet on Instagram"><FaInstagram /></a>
          <a href="https://x.com/intelmeet" target="_blank" rel="noreferrer" aria-label="IntelMeet on X"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank" rel="noreferrer" aria-label="IntelMeet on LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal" target="_blank" rel="noreferrer" aria-label="IntelMeet on YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Navbar */}
      <header className="conf-navbar" role="banner" aria-label="Main navigation">
        <div className="conf-nav-left">
          <img src={intelmeet} alt="IntelMeet Global Conferences" className="conf-logo" />
        </div>

        <nav className="nav-links" aria-label="Primary">
          <ul>
            {anchors.map((a, idx) => (
              <li key={a.id}>
                <Link
                  to={a.route}
                  className={activeId === a.id ? "conf-active-section" : ""}
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

          {/* Hamburger for mobile */}
          <button
            className={`conf-hamburger ${mobileNavOpen ? "open" : ""}`}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(s => !s)}
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

      {/* ----------------- MOBILE PANEL (MOVED OUTSIDE HEADER) -----------------
          Placed here as a sibling of header so fixed positioning behaves correctly.
      --------------------------------------------------------------------- */}
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
              <strong className="conf-mobile-title">About ICELS</strong>
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

          {/* FULL navigation list (same as desktop) - keyboard focusable */}
          <nav className="conf-mobile-nav" aria-label="Mobile primary">
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
            <Link to="/papersubmission" className="conf-cta" onClick={() => setMobileNavOpen(false)}>Submit Paper</Link>
            <Link to="/registration-fees" className="conf-cta outline" onClick={() => setMobileNavOpen(false)}>Register</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        className="conf-hero"
        style={{ backgroundImage: `url(${pageData.hero})` }}
        aria-label="About hero"
      >
        <div className="conf-hero-overlay" style={{ backgroundImage: `url(${heroPattern})` }} />
        <div className="conf-hero-content">
          <div className="conf-eyebrow">About • IntelMeet</div>
          <h1 className="conf-hero-title">{pageData.title}</h1>
          <p className="conf-hero-theme">{pageData.subtitle}</p>
        </div>
      </section>

      {/* Main wrapper */}
      <div className="conf-wrapper">
        <main id="content" className="conf-main" aria-live="polite">
          {/* About Conference */}
          <section className="conf-card about-card elevated">
            <header className="card-header">
              <h2>About the Conference</h2>
              <div className="card-decor" aria-hidden />
            </header>

            <div className="about-block">
              <h3>International Conference on Environmental & Life Sciences (ICELS-25)</h3>
              <p>
                The International Conference on Environmental & Life Sciences (ICELS-25) is a premier global virtual
                conference designed to connect researchers, academicians, scientists, environmentalists, and industry
                experts from more than 10+ countries.
              </p>
              <p>
                This international event focuses on advancing innovative research across environmental science, life
                sciences, biotechnology, ecology, climate change, biodiversity, agriculture, water science, and
                sustainability studies.
              </p>
            </div>

            <div className="about-section-grid">
              <div className="about-left">
                <h3>Why Attend ICELS-25?</h3>
                <ul>
                  <li>Present research to an international audience</li>
                  <li>Learn from global keynote speakers</li>
                  <li>Participate in expert-led discussions</li>
                </ul>

                <h3>Benefits of Attending</h3>
                <ul>
                  <li>Official conference certificate</li>
                  <li>Abstract publication in ICELS-25 proceedings (non-journal)</li>
                  <li>Global networking opportunities</li>
                  <li>Eligibility to join as presenter, listener, keynote, or committee member</li>
                </ul>

                <h3>Who Can Attend?</h3>
                <ul>
                  <li>Researchers & Academicians</li>
                  <li>PhD Scholars</li>
                  <li>Professors & Students</li>
                  <li>Environmentalists & Biotechnologists</li>
                  <li>Industry Professionals</li>
                </ul>
              </div>

              <aside className="about-right">
                <div className="card-panel glass">
                  <h3>Global Participation</h3>
                  <p>ICELS-25 welcomes participants from 10+ countries, offering a diverse and collaborative international research ecosystem.</p>
                </div>

                <div className="card-panel glass">
                  <h3>Outcomes & Opportunities</h3>
                  <ul>
                    <li>Present research</li>
                    <li>Receive recognition</li>
                    <li>Explore global collaborations</li>
                    <li>Enhance academic portfolio</li>
                  </ul>
                </div>

                <div className="join-cta">
                  <h4>Join ICELS-25 Today</h4>
                  <p>Be part of a global scientific community shaping the future of environmental and life science research.</p>
                  <Link to="/registration-fees" className="conf-cta small">Register Now</Link>
                </div>
              </aside>
            </div>
          </section>

          {/* About IntelMeet */}
          <section className="conf-card about-card elevated">
            <header className="card-header">
              <h2>About IntelMeet Global Conferences</h2>
              <div className="card-decor" aria-hidden />
            </header>

            <div className="about-block">
              <p>
                IntelMeet Global Conferences is a professional international conference organizer committed to creating
                high-quality academic and research-driven global events. We focus on providing virtual and hybrid platforms
                that connect researchers, academicians, scientists, industry professionals, and innovators from multiple countries.
              </p>

              <h3>Our Vision</h3>
              <p>To become a trusted global conference organizer that empowers research, supports innovation, and builds strong academic communities across the world.</p>

              <h3>Our Mission</h3>
              <ul>
                <li>Create globally accessible research platforms</li>
                <li>Encourage interdisciplinary knowledge sharing</li>
                <li>Organize high-quality virtual conferences</li>
                <li>Support academicians, scholars, and industry professionals</li>
              </ul>

              <h3>What We Offer</h3>
              <ul>
                <li>International academic conferences</li>
                <li>Keynote and invited speaker opportunities</li>
                <li>Committee memberships for experienced professionals</li>
                <li>Digital abstract proceedings</li>
                <li>Virtual presentation platforms</li>
                <li>Networking and global research interaction</li>
              </ul>

              <h3>Our Values</h3>
              <ul>
                <li><strong>Integrity</strong> – Transparent and ethical academic practices</li>
                <li><strong>Innovation</strong> – New conference experiences</li>
                <li><strong>Inclusivity</strong> – Welcoming researchers from all regions</li>
                <li><strong>Quality</strong> – Professional event execution and communication</li>
                <li><strong>Accessibility</strong> – Global participation without travel barriers</li>
              </ul>

              <h3>Why Choose IntelMeet?</h3>
              <ul>
                <li>Global participation from multiple countries</li>
                <li>Professional virtual conference platforms</li>
                <li>Academically structured sessions</li>
                <li>Recognized certificates (Presenter / Listener / Keynote / Committee)</li>
                <li>Smooth registration and presentation experience</li>
              </ul>

              <h3>Our Tagline</h3>
              <p className="italic">"Innovation Meets Intelligence" — Reflecting our commitment to supporting smart, impactful, and future-driven research.</p>

              <h3>Connect With IntelMeet</h3>
              <p>Join our upcoming events and be part of a global scientific community.</p>
              <ul>
                <li>Explore Our Conferences</li>
                <li><Link to="/ICELS" className="conf-link">Register ICELS-25</Link></li>
              </ul>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="conf-sidebar" aria-label="Quick links & actions">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/ICELS">ICELS-25 Home</Link></li>
              <li><Link to="/papersubmission">Submit Paper</Link></li>
              <li><Link to="/registration-fees">Registration Fees</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
              <li><strong>Conference:</strong> {pageData.date}</li>
              <li><strong>Submission deadline:</strong> 15 Dec 2025</li>
              <li><strong>Registration deadline:</strong> 17 Dec 2025</li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
