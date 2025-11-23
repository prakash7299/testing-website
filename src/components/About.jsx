import React, { useEffect, useState } from "react";
import "./About.css";
import "./Login.css";

import intelmeet from "../assets/intelmeet.jpeg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

// ---------- Imported Slider Images ----------
import slide1 from "../assets/slider banner - image final.png";
import slide2 from "../assets/Virtual Background -  intelmeet.png";
import slide3 from "../assets/Virtual Background -  5th December 2025.png";

export default function About() {

  const slides = [slide1, slide2, slide3];
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-container">

      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">
            support@intelmeetglobal.com
          </a> | 
          <a href="tel:+919442417477" className="phone-link"> +91 9442417477</a>
        </div>

        <div><span className="hidden-placeholder">f</span></div>

        <div>
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <img src={intelmeet} alt="Logo" className="logo" />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About Us</Link></li>
          <li><Link className="nav-link" to="/upcoming-conferences">Upcoming Conferences</Link></li>

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

     <HeroSlider
  title="About IntelMeet Global Conferences"
  subtitle="Empowering Global Research & Innovation"
  showButtons={false}
/>


      {/* CONTENT */}
      <div className="content-sidebar-wrapper">

        <div className="content-main">
          
          <section className="cfp-section">
            <h2 className="cfp-title">Who We Are</h2>
            <p className="cfp-text">
              IntelMeet Global Conferences is a leading platform dedicated to promoting 
              high-quality research and global academic communication.
            </p>
          </section>

          <section className="cfp-section">
            <h2 className="cfp-title">Our Mission</h2>
            <p className="cfp-text">
              To support researchers by organizing international conferences with high academic value.
            </p>
          </section>

          <section className="cfp-section">
            <h2 className="cfp-title">Our Vision</h2>
            <p className="cfp-text">
              To become a trusted global organizer known for excellence and simplicity.
            </p>
          </section>

          <section className="cfp-section">
            <h2 className="cfp-title">What We Do</h2>
            <ul className="cfp-list">
              <li className="cfp-text">Organize international academic conferences</li>
              <li className="cfp-text">Provide research presentation opportunities</li>
              <li className="cfp-text">Support authors with submission and review</li>
            </ul>
          </section>

        </div>

        {/* SIDEBAR */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/benefits">Key Benefits of Participation</Link></li>
            <li><Link to="/apply-speaker">Apply Speaker</Link></li>
            <li><Link to="/instructions">Instructions for Participants</Link></li>
            <li><Link to="/papersubmission-guidelines">Author Guidelines</Link></li>
            <li><Link to="/committee-application">Committee Application</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
