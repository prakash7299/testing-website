// src/event-pages/PublicationsEvent.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./PublicationsEvent.css";

/* Reuse conference header UI */
import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";

import Footer from "../components/Footer";

export default function PublicationsEvent() {

  /* SEO meta setup */
  useEffect(() => {
    document.title = "Publications | IntelMeet Global Conferences – Event Publications";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore publication opportunities for ICELS-25 including conference proceedings, ISBN abstract book, and partner journals.";

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = window.location.href.split("#")[0];
  }, []);

  return (
    <div className="conf-page page-container publications-event-page">

      {/* ---------------- TOP BAR ---------------- */}
      <div className="conf-topbar">
        <div className="conf-top-left">
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
          <span className="conf-sep">|</span>
          <a href="tel:+919442417477" className="conf-phone-link">+91 9442417477</a>
        </div>

        <div className="conf-top-right">
          <Link to="/registration-event" className="conf-top-cta">Register</Link>
        </div>
      </div>

      {/* ---------------- NAVBAR ---------------- */}
      <header className="conf-navbar">
        <div className="conf-nav-left">
          <img src={intelmeet} alt="IntelMeet" className="conf-logo" />
        </div>

        <nav className="nav-links">
          <ul>
            <li><Link to="/ICELS">Home</Link></li>
            <li><Link to="/about-event">About</Link></li>
            <li><Link to="/callforpaper">Call for Papers</Link></li>
            <li><Link to="/papersubmission-event">Paper Submission</Link></li>
            <li><Link to="/speaker-event">Speakers</Link></li>
            <li><Link to="/committee-event">Committee</Link></li>
            <li><a className="conf-active-section">Publications</a></li>
            <li><Link to="/contact-event">Contact</Link></li>
          </ul>
        </nav>

        <div className="conf-nav-right">
          <Link to="/papersubmission-event" className="conf-btn-register">Submit Paper</Link>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section
        className="conf-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div
          className="conf-hero-overlay"
          style={{ backgroundImage: `url(${heroPattern})` }}
        />

        <div className="conf-hero-content">
          <div className="conf-eyebrow">Publishing • Recognition • Academic Impact</div>
          <h1 className="conf-hero-title">Conference Publications</h1>
          <p className="conf-hero-theme">Opportunities for high-impact academic dissemination</p>
        </div>
      </section>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="pub-wrapper">

        {/* HEADER BLOCK */}
        <div className="pub-header premium-header">
          <div className="premium-h-leftAccent"></div>

          <div className="premium-h-text">
            <h2 className="premium-title">Publication Opportunities</h2>
            <p className="premium-sub">
              All accepted papers/abstracts from ICELS-25 will be eligible for inclusion
              in official conference publications and partnering journals.
            </p>
          </div>
        </div>

        {/* 1 — ABSTRACT BOOK */}
        <section className="pub-card luxury-card">
          <h3 className="pub-title">📘 ISBN Abstract Book (Digital)</h3>

          <p className="pub-text">
            All accepted abstracts will be included in the official Abstract Book
            with **ISBN registration**, ensuring global academic visibility.
          </p>

          <ul className="pub-list">
            <li>Indexed in Google Scholar</li>
            <li>Softcopy distributed to all participants</li>
            <li>Certificate of publication provided</li>
          </ul>
        </section>

        {/* 2 — CONFERENCE PROCEEDINGS */}
        <section className="pub-card luxury-card">
          <h3 className="pub-title">📗 International Conference Proceedings</h3>

          <p className="pub-text">
            Full papers presented at the conference will be published in the
            **IntelMeet International Proceedings Series** (digital only).
          </p>

          <ul className="pub-list">
            <li>ISSN-based proceedings</li>
            <li>DOI assigned for each published paper</li>
            <li>CrossRef reference linking</li>
            <li>Indexed in ResearchGate & Academia.edu</li>
          </ul>
        </section>

        {/* 3 — JOURNAL PUBLICATION */}
        <section className="pub-card luxury-card">
          <h3 className="pub-title">📙 Partner International Journals</h3>

          <p className="pub-text">
            Selected high-quality papers will be recommended for publication in
            partnering **peer-reviewed international journals**.
          </p>

          <ul className="pub-list">
            <li>Scopus-indexed journals (subject to journal acceptance)</li>
            <li>UGC-CARE Listed Journals</li>
            <li>Open-access & Hybrid journals</li>
          </ul>

          <p className="pub-note">
            *Journal publications are based on editorial review and may require
            additional processing charges as per journal policy.*
          </p>
        </section>

        {/* CTA */}
        <div className="pub-cta">
          <Link to="/papersubmission-event" className="conf-cta">Submit Your Paper</Link>
          <Link to="/registration-event" className="conf-cta outline">Register Now</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
