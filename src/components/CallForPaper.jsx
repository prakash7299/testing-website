// CallForPaper.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./CallForPaper.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";
import Footer from "../components/Footer";
import QuickRegistration from "./QuickRegistration";

/*
  CallForPaper.jsx - improved styling for the right-side small panels:
  - Preserves all content/data.
  - Small panels now grouped and styled as unified premium cards.
  - Topbar + Navbar + Mobile menu updated to match ConferenceEvent.jsx exactly.
*/

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const page = {
  title: "Call for Papers — ICELS-25",
  subtitle:
    "Submit original abstracts for presentation at the International Conference on Environmental & Life Sciences",
  hero: heroImg,
  deadline: "15 December 2025",
  conferenceDate: "19 December 2025",
};

/* NAV ITEMS: exact same as ConferenceEvent.jsx */
const anchors = [
  { id: "home", label: "Home",  route: "/ICELS" },
  { id: "about", label: "About", route: "/about-event" },
  { id: "callforpaper", label: "Call for Papers", route: "/callforpaper" },
  { id: "papersubmission", label: "Paper Submission", route: "/papersubmissionevent" },
  { id: "speakers", label: "Speakers", route: "/speaker-event" },
  { id: "committee", label: "Committee", route: "/committee-event" },
  { id: "publications", label: "Publications", route: "/publications-event" },
  { id: "contact", label: "Contact", route: "/contact-event" },
];

export default function CallForPaper() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePanelRef = useRef(null);

  useEffect(() => {
    document.title = `${page.title} | IntelMeet Global Conferences`;
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Call for Papers — ICELS-25. Submit abstracts (150–300 words). Topics in Environmental Science & Life Sciences. Submission deadline: " +
      page.deadline;
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);

    const ldId = "callforpapers-jsonld";
    if (document.getElementById(ldId)) document.getElementById(ldId).remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: meta.content,
    });
    document.head.appendChild(ld);
  }, []);

  // mobile panel close handlers
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

  /* lock body scroll when mobile menu open (prevents background scrolling pushing modal) */
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

  return (
    <div className="call-page conf-page page-container">
      <a href="#cfp-content" className="skip-link">
        Skip to content
      </a>

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

      {/* Navbar (updated to match ConferenceEvent.jsx exactly) */}
      <header className="conf-navbar" role="banner" aria-label="Main navigation">
        <div className="conf-nav-left">
          <img src={intelmeet} alt="IntelMeet Global Conferences" className="conf-logo" />
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <ul>
            {anchors.map((a) => (
              <li key={a.id}>
                <Link to={a.route} onClick={() => setMobileNavOpen(false)}>
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="conf-nav-right">
          <Link to="/registration-event" className="conf-btn-register">
            Registration
          </Link>

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

      {/* Mobile panel moved OUTSIDE the header so fixed positioning works reliably */}
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
              <strong className="conf-mobile-title">ICELS — Call for Papers</strong>
            </div>
            <button className="conf-mobile-close" onClick={() => setMobileNavOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>

          <nav aria-label="Mobile main navigation">
            <ul className="conf-mobile-list" role="menu">
              {anchors.map((a) => (
                <li role="none" key={a.id}>
                  <Link role="menuitem" to={a.route} onClick={() => setMobileNavOpen(false)}>
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="conf-mobile-quick">
            <h4>Quick Registration</h4>
            <QuickRegistration compact />
          </div>

          <div className="conf-mobile-cta">
            <Link to="/papersubmission" className="conf-cta">
              Submit Paper
            </Link>
            <Link to="/registration-fees" className="conf-cta outline">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="conf-hero" style={{ backgroundImage: `url(${page.hero})` }} aria-label="Call for Papers hero">
        <div className="conf-hero-overlay" style={{ backgroundImage: `url(${heroPattern})` }} />
        <div className="conf-hero-content">
          <div className="conf-eyebrow">Call for Papers • ICELS-25</div>
          <h1 className="conf-hero-title">{page.title}</h1>
          <p className="conf-hero-theme">{page.subtitle}</p>
        </div>
      </section>

      {/* Main wrapper */}
      <div className="conf-wrapper">
        <main id="cfp-content" className="conf-main">
          {/* Intro card */}
          <section className="conf-card section-card intro-card elevated">
            <header className="card-header">
              <h2>Call for Papers — ICELS-25</h2>
              <div className="card-decor" aria-hidden />
            </header>

            <div className="cfp-intro">
              <p>
                The International Conference on Environmental & Life Sciences (ICELS-25) invites researchers, academicians,
                scholars and industry professionals to submit original abstracts for presentation at our global virtual
                conference. We welcome interdisciplinary and emerging topics across Environmental Science and Life Sciences.
              </p>
            </div>
          </section>

          {/* Topics Covered card */}
          <section className="conf-card section-card">
            <h3 className="section-title">Topics Covered</h3>

            <div className="topics-two">
              <div className="topics-col">
                <h4>Environmental Science</h4>
                <ul className="cfp-list">
                  <li>Climate Change & Adaptation</li>
                  <li>Ecology & Biodiversity</li>
                  <li>Sustainable Development & Renewable Energy</li>
                  <li>Waste Management & Environmental Remediation</li>
                  <li>Water Resources & Hydrology</li>
                  <li>Pollution Control & Environmental Monitoring</li>
                </ul>
              </div>

              <div className="topics-col">
                <h4>Life Sciences</h4>
                <ul className="cfp-list">
                  <li>Biotechnology & Molecular Biology</li>
                  <li>Genetics & Genomics</li>
                  <li>Microbiology & Environmental Microbiology</li>
                  <li>Bioprocessing & Industrial Biotechnology</li>
                  <li>Environmental Biology</li>
                  <li>Agricultural & Plant Sciences</li>
                </ul>
              </div>
            </div>

            <p className="muted-note">Interdisciplinary and emerging research topics are also welcome.</p>
          </section>

          {/* Submission Guidelines card */}
          <section className="conf-card section-card">
            <h3 className="section-title">Submission Guidelines</h3>
            <ul className="cfp-list large-bullets">
              <li>
                <strong>Abstract:</strong> 150–300 words
              </li>
              <li>Format: PDF or Word</li>
              <li>Include: Title, Authors, Affiliation, Email, Keywords</li>
              <li>Only abstract required (full paper optional)</li>
            </ul>
          </section>

          {/* Important Dates card */}
          <section className="conf-card section-card">
            <h3 className="section-title">Important Dates</h3>
            <ul className="cfp-list large-bullets">
              <li>
                <strong>Submission Deadline:</strong> {page.deadline}
              </li>
              <li>
                <strong>Registration Closes:</strong> 17th December 2025
              </li>
              <li>
                <strong>Conference Date:</strong> {page.conferenceDate} — 3:00 PM UTC/GMT (virtual)
              </li>
            </ul>
          </section>

          {/* What Presenters Receive card */}
          <section className="conf-card section-card">
            <h3 className="section-title">What Presenters Receive</h3>
            <ul className="cfp-list large-bullets">
              <li>Conference certificate</li>
              <li>Abstract published in ICELS-25 proceedings (non-journal)</li>
              <li>Live online presentation</li>
              <li>Global research visibility</li>
            </ul>
          </section>

          {/* Submit card */}
          <section className="conf-card section-card submit-card elevated">
            <h3 className="section-title">Submit Your Abstract</h3>
            <p>Share your research with our global scientific community.</p>
            <div className="submit-row">
              <Link to="/papersubmission" className="conf-cta">
                Submit Your Paper Now
              </Link>
              <Link to="/registration-fees" className="conf-cta outline">
                Register
              </Link>
            </div>
          </section>

          {/* SIDE PANELS INLINE (desktop-right) - grouped and styled */}
          
            <aside className="conf-card section-card submit-card elevated">
              <h3 className="section-title">Submission Checklist</h3>
              <ul className="cfp-list">
                <li>Abstract 150–300 words</li>
                <li>PDF or Word file</li>
                <li>Title, authors, affiliations included</li>
                <li>Keywords and corresponding author email</li>
              </ul>
            </aside>

            <aside className="card-panel grouped-panel glass gold-left">
              <h3 className="section-title">Presentation Format</h3>
              <p className="muted-note">
                Presenters will present live online (synchronous session). Recording and slides will be part of the proceedings.
              </p>
            </aside>

            <aside className="card-panel grouped-panel gold-left">
              <h3 className="section-title">Need Help?</h3>
              <p className="muted-note">
                Contact the conference secretariat: <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
              </p>
            </aside>
        
        </main>

        {/* Sidebar (unchanged content) */}
        <aside className="conf-sidebar" aria-label="Quick links & actions">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/ICELS">ICELS-25 Home</Link>
              </li>
              <li>
                <Link to="/papersubmission">Submit Paper</Link>
              </li>
              <li>
                <Link to="/registration-fees">Registration Fees</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
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
              <li>
                <strong>Submission:</strong> {page.deadline}
              </li>
              <li>
                <strong>Conference:</strong> {page.conferenceDate}
              </li>
              <li>
                <strong>Registration Close:</strong> 17 Dec 2025
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
