// Committee.jsx
import React from "react";
import "./Committee.css";
import "./Speaker.css"; // keeps shared token styles if present (safe)
import "./Login.css";
import "./UpcomingConferences.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroPhoto from "../assets/confimage-1.jpeg";

// Committee images (place these files in src/assets/)
import mahmoudPhoto from "../assets/committee-mahmoud.png";
import walidaPhoto from "../assets/speaker-walida.png";
import surajPhoto from "../assets/speaker-suraj.png";
import hebaPhoto from "../assets/speaker-heba.png";
import narinderjitPhoto from "../assets/speaker-narinderjit.png";
import osmanPhoto from "../assets/osman.jpg";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Committee() {
  const committee = [
    {
      name: "Dr. Osman Adiguzel",
      title: "Department of Physics",
      affiliation: "Firat University, Elazig",
      country: "Turkey",
      photo: osmanPhoto,
    },
    {
      name: "Dr. Suraj Kumar Mukti",
      title: "Professor",
      affiliation: "National Institute of Technology Raipur",
      country: "India",
      photo: surajPhoto,
    },
    {
      name: "Dr. Narinderjit Kaur",
      title: "Dept. of Chemistry",
      affiliation: "Kanya Maha Vidyalaya",
      country: "India",
      photo: narinderjitPhoto,
    },
    {
      name: "Prof. Andrew Collins",
      title: "",
      affiliation: "Western Coast University",
      country: "New Zealand",
      photo: null,
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "",
      affiliation: "Northview Academy",
      country: "Ireland",
      photo: null,
    },
    {
      name: "Ms. Olivia Harper",
      title: "",
      affiliation: "Academic Publishing Group",
      country: "United States",
      photo: null,
    },
    {
      name: "Mr. Ethan Clarke",
      title: "",
      affiliation: "International Academic Events Office",
      country: "United Kingdom",
      photo: null,
    },
  ];

  const initials = (name) => {
    if (!name) return "??";
    const parts = name.trim().split(" ");
    const i1 = parts[0]?.[0] || "";
    const i2 = parts[1]?.[0] || "";
    return (i1 + i2).toUpperCase();
  };

  return (
    <div className="page-container">
      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a> |
          <a href="tel:++919025956834" className="phone-link">+91 9025956834</a>
        </div>
        <div><span className="hidden-placeholder">f</span></div>
        <div className="top-icons" />
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <img src={intelmeet} alt="Logo" className="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><Link className="nav-link" to="/about">About Us</Link></li>
          <li><Link className="nav-link" to="/upcoming-conferences">Upcoming Conferences</Link></li>
          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
            <div className="dropdown-menu">
              <Link to="/papersubmission">📄 Submission Form</Link>
              <Link to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
            </div>
          </li>
          <li><Link className="nav-link" to="/benefits">Benefits</Link></li>
          <li><Link className="nav-link" to="/speaker">Speaker</Link></li>
          <li><Link className="nav-link" to="/committee">Committee</Link></li>
          <li><Link className="nav-link" to="/publications">Publications</Link></li>
          <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>

        <Link to="/registration-fees" className="btn-register">Registration</Link>
      </div>

      {/* HERO */}
      <section className="uc-hero" style={{ backgroundImage: `url(${heroPhoto})` }}>
        <div className="uc-hero-content">
          <h1>Our Organizing Committee Members</h1>
          <p>Meet the professionals supporting IntelMeet Global Conferences</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="content-sidebar-wrapper">
        <div className="content-main">
          {/* premium header (keeps style consistent with speaker) */}
          <div className="speaker-header premium-header" style={{ alignItems: "flex-start" }}>
            <div className="premium-h-leftAccent" aria-hidden />
            <div className="premium-h-text">
              <h2 className="premium-title">Our Organizing Committee Members</h2>
              <p className="premium-sub">
                If you are interested in joining the IntelMeet Organizing Committee, we welcome experienced
                professionals with a passion for research & events. Click apply to submit your interest.
              </p>
              <Link to="/committee-application" className="premium-apply">Apply Now</Link>
            </div>
          </div>

          {/* Committee cards — vertical premium cards, identical look to speakers */}
          <div className="speaker-grid">
            {committee.map((m, i) => (
              <article className="speaker-card luxury-card" key={i} aria-label={`Committee ${m.name}`}>
                <div className="lux-avatar-box">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="lux-avatar" />
                  ) : (
                    <div className="lux-avatar-fallback">{initials(m.name)}</div>
                  )}
                </div>

                <div className="lux-details">
                  <h3 className="lux-name">{m.name}</h3>
                  {m.title && <div className="lux-title">{m.title}</div>}
                  {m.affiliation && <div className="lux-affiliation">{m.affiliation}</div>}
                  {m.country && <div className="lux-country">{m.country}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar unchanged */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/benefits">Key Benefits of Participation</Link></li>
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
