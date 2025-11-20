import React from "react";
import "./Login.css";
import photo from "../assets/photo.avif";
import intelmeet from "../assets/intelmeet.jpeg";
import confimage1 from "../assets/confimage-1.jpeg";
import confimage2 from "../assets/confimage-2.jpeg";
import confimage3 from "../assets/confimage-3.jpeg";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./SidebarLinks.css"; // Add sidebar CSS file

export default function Header() {
  return (
    <div className="page-container">
    
          {/* Top bar */}
          <div className="top-bar">
            <div>
              <span>
                <a href="mailto:intelmeet@gmail.com">
                  intelmeet@gmail.com
                </a>
              </span>
              | <a href="tel:+917871929230" className="phone-link">+91 7871929230</a>
            </div>
            <div>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
    
          {/* Navbar */}
          <div className="navbar">
            <img src={intelmeet} alt="Logo" className="logo" />
            <ul>
              <li><a href="#">Home</a></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Upcoming Conferences</a></li>
              <li><a href="#">Paper Submission</a></li>
              <li><a href="#">Benefits</a></li>
              <li><a href="#">Speaker</a></li>
              <li><a href="#">Committee</a></li>
              <li><a href="#">Publications</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
    
            <a
              href="https://docs.google.com/forms/d/1cnm3AfTKKIBITCzCOMlnGouGa2qiuDbEiIjsozMQtTo/edit"
              className="btn-register"
            >
              Registration
            </a>
          </div>
    
          {/* Hero Section */}
          <section className="hero" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hero-content">
              <h1>
                International Conference on Emerging Technologies, Pharmacology
                Education and Business (ICETPEB-25)
              </h1>
              <p>
                November 20, 2025, in Barcelona, Spain, in Hybrid Mode (both
                in-person and online)
              </p>
            </div>
          </section>
    </div>
  );
}
