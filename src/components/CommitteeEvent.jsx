// CommitteeEvent.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./CommitteeEvent.css";

import intelmeet from "../assets/intelmeet.jpeg";
// changed to the same hero used in SpeakerEvent.jsx
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";

import mahmoudPhoto from "../assets/committee-mahmoud.png";
import walidaPhoto from "../assets/speaker-walida.png";
import surajPhoto from "../assets/speaker-suraj.png";
import hebaPhoto from "../assets/speaker-heba.png";
import narinderjitPhoto from "../assets/speaker-narinderjit.png";

import QuickRegistration from "./QuickRegistration";
import Footer from "../components/Footer";

export default function CommitteeEvent() {
  const mobilePanelRef = useRef(null);
  const firstNavItemRef = useRef(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const conference = {
    id: 1,
    title: "International Conference on Environmental & Life Sciences (ICELS-25)",
    date: "19 December 2025",
    location: "Virtual (Global Online Conference)",
    hero: heroImg,
    summary:
      "ICELS-25 connects researchers, academics and industry experts to accelerate environmental and life science innovation.",
    submissionDeadline: "15 December 2025",
  };

  const committee = [
    { name: "Dr. Suraj Kumar Mukti", title: "Professor", affiliation: "National Institute of Technology Raipur", country: "India", photo: surajPhoto },
    { name: "Dr. Narinderjit Kaur", title: "Dept. of Chemistry", affiliation: "Kanya Maha Vidyalaya", country: "India", photo: narinderjitPhoto },
    { name: "Prof. Andrew Collins", title: "", affiliation: "Western Coast University", country: "New Zealand", photo: null },
    { name: "Dr. Sarah Mitchell", title: "", affiliation: "Northview Academy", country: "Ireland", photo: null },
    { name: "Ms. Olivia Harper", title: "", affiliation: "Academic Publishing Group", country: "United States", photo: null },
    { name: "Mr. Ethan Clarke", title: "", affiliation: "International Academic Events Office", country: "United Kingdom", photo: null },
  ];

  // SEO meta (same as before)
  useEffect(() => {
    const title = `Organizing Committee — ICELS-25 | IntelMeet Global Conferences`;
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      `Meet the organizing and technical committee for ICELS-25 — experienced academics and practitioners supporting the event. Submission deadline ${conference.submissionDeadline}.`
    );

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", window.location.href.split("#")[0]);

    const ldId = "intelmeet-org-jsonld";
    if (document.getElementById(ldId)) document.getElementById(ldId).remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "IntelMeet Global Conferences",
      "url": window.location.origin,
      "logo": intelmeet,
      "sameAs": [],
    });
    document.head.appendChild(ld);
  }, []);

  // close on ESC and outside click
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

  // accessibility focus + lock body when menu open
  useEffect(() => {
    if (mobileNavOpen) {
      // small delay to ensure panel is rendered before focusing
      const t = setTimeout(() => firstNavItemRef.current?.focus(), 60);
      // lock body scroll & prevent touch interactions behind modal
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      // add a class for hiding floating widgets if needed
      document.body.classList.add("mobile-menu-open");
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
        document.body.classList.remove("mobile-menu-open");
      };
    }
    return undefined;
  }, [mobileNavOpen]);

  const initials = (name) => {
    if (!name) return "??";
    const parts = name.trim().split(" ");
    const a = parts[0]?.[0] || "";
    const b = parts.length > 1 ? parts[1]?.[0] || "" : "";
    return (a + b).toUpperCase();
  };

  return (
    <div className="conf-page committee-page">
      <a href="#main" className="skip-link">Skip to content</a>

      {/* topbar */}
      <div className="conf-topbar">
        <div className="conf-top-left">
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
          <span className="conf-sep">|</span>
          <a href="tel:+919442417477" className="conf-phone-link">+91 9442417477</a>
        </div>
        <div className="conf-top-right">
          <Link to="/registration-event" className="conf-top-cta">Registration</Link>
        </div>
      </div>

      {/* navbar */}
      <header className="conf-navbar" role="banner">
        <div className="conf-nav-left"><img src={intelmeet} alt="IntelMeet logo" className="conf-logo" /></div>

        <nav className="nav-links" aria-label="Main navigation">
          <ul>
            <li><Link to="/ICELS" className="nav-link">Home</Link></li>
            <li><Link to="/about-event" className="nav-link">About</Link></li>
            <li><Link to="/callforpaper" className="nav-link">Call for Papers</Link></li>
            <li><Link to="/papersubmissionevent" className="nav-link">Paper Submission</Link></li>
            <li><Link to="/speaker-event" className="nav-link">Speakers</Link></li>
            <li><Link to="/committee-event" className="conf-active-section">Committee</Link></li>
            <li><Link to="/publications-event" className="nav-link">Publications</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
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
            <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden>
              <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1h18" />
                <path d="M1 8h18" />
                <path d="M1 15h18" />
              </g>
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE PANEL - placed OUTSIDE header so header + hamburger remain visible */}
      <div
        className={`conf-mobile-panel ${mobileNavOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileNavOpen}
      >
        <div className="conf-mobile-backdrop" onClick={() => setMobileNavOpen(false)} />
        <div className="conf-mobile-inner centered" ref={mobilePanelRef} role="menu" aria-label="Mobile navigation">
          <div className="conf-mobile-header">
            <div className="conf-mobile-brand">
              <img src={intelmeet} alt="IntelMeet" style={{ height: 34 }} />
              <strong className="conf-mobile-title">ICELS — {conference.date}</strong>
            </div>
            <button className="conf-mobile-close" onClick={() => setMobileNavOpen(false)} aria-label="Close menu">✕</button>
          </div>

          <ul className="conf-mobile-list">
            <li>
              <Link to="/ICELS" onClick={() => setMobileNavOpen(false)} ref={firstNavItemRef}>
                Home
              </Link>
            </li>
            <li><Link to="/about-event" onClick={() => setMobileNavOpen(false)}>About</Link></li>
            <li><Link to="/callforpaper" onClick={() => setMobileNavOpen(false)}>Call for Papers</Link></li>
            <li><Link to="/papersubmissionevent" onClick={() => setMobileNavOpen(false)}>Paper Submission</Link></li>
            <li><Link to="/speaker-event" onClick={() => setMobileNavOpen(false)}>Speakers</Link></li>
            <li><Link to="/committee-event" onClick={() => setMobileNavOpen(false)} className="active">Committee</Link></li>
            <li><Link to="/publications-event" onClick={() => setMobileNavOpen(false)}>Publications</Link></li>
            <li><Link to="/contact" onClick={() => setMobileNavOpen(false)}>Contact</Link></li>
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
              <li><strong>Submission:</strong> {conference.submissionDeadline}</li>
              <li><strong>Conference:</strong> {conference.date}</li>
            </ul>
          </div>

          <div style={{ marginTop: 16 }}>
            <QuickRegistration compact />
          </div>

          <div className="conf-mobile-cta">
            <Link to="/papersubmissionevent" className="conf-cta" onClick={() => setMobileNavOpen(false)}>Submit Paper</Link>
            <Link to="/registration-event" className="conf-cta outline" onClick={() => setMobileNavOpen(false)}>Register</Link>
          </div>
        </div>
      </div>

      {/* hero */}
      <section className="conf-hero" style={{ backgroundImage: `url(${conference.hero})` }} aria-label="Committee hero">
        <div className="conf-hero-overlay" style={{ backgroundImage: `url(${heroPattern})` }} />
        <div className="conf-hero-content">
          <div className="conf-eyebrow">Organizing & Technical Committee</div>
          <h1 className="conf-hero-title">Meet Our Committee</h1>
          <p className="conf-hero-theme">{conference.summary}</p>
          <div className="conf-hero-meta">
            <span className="conf-date">{conference.date}</span>
            <span className="conf-location"> • {conference.location}</span>
          </div>
        </div>
      </section>

      {/* main wrapper */}
      <div className="conf-wrapper" id="main">
        <main className="conf-main">
          <section className="conf-card">
            <div className="committee-intro">
              <h2>Organizing & Technical Committee</h2>
              <p className="conf-lead">Our committee includes international domain experts, researchers and practitioners who guide program and review quality.</p>
              <div className="committee-cta-row">
                <Link to="/committee-application" className="conf-cta">Apply for Committee</Link>
                <Link to="/contact" className="conf-cta outline">Contact Organizers</Link>
              </div>
            </div>

            <div className="committee-grid">
              {committee.map((m, idx) => (
                <article className="committee-card" key={idx} aria-label={`Committee member ${m.name}`}>
                  <div className="committee-avatar">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} />
                    ) : (
                      <div className="committee-initials">{initials(m.name)}</div>
                    )}
                  </div>

                  <div className="committee-body">
                    <h3 className="committee-name">{m.name}</h3>
                    {m.title && <div className="committee-title">{m.title}</div>}
                    {m.affiliation && <div className="committee-affiliation">{m.affiliation}</div>}
                    {m.country && <div className="committee-country">{m.country}</div>}
                    <div className="committee-actions">
                      <Link to={`/committee/${idx + 1}`} className="committee-link">View profile</Link>
                      <a href={`mailto:support@intelmeetglobal.com?subject=Committee inquiry: ${encodeURIComponent(m.name)}`} className="committee-link outline">Contact</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* sidebar */}
        <aside className="conf-sidebar" aria-label="Quick links & actions">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/benefits">Key Benefits of Participation</Link></li>
              <li><Link to="/apply-speaker">Apply to be Speaker</Link></li>
              <li><Link to="/papersubmission-guidelines">Author Guidelines</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          <div className="conf-sidebar-card conf-sidebar-quickreg">
            <h4>Quick Registration</h4>
            <p className="conf-quick-sub">Register to get event updates & early-bird alerts.</p>
            <QuickRegistration />
          </div>

          <div className="conf-sidebar-card">
            <h4>Important Dates</h4>
            <ul className="conf-dates">
              <li><strong>Submission deadline:</strong> {conference.submissionDeadline}</li>
              <li><strong>Conference:</strong> {conference.date}</li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
