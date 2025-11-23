import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

import img1 from "../assets/slider banner - image final.png";
import img3 from "../assets/slider-image.png";
import { Link } from "react-router-dom";

export default function HeroSlider({ showButtons = false }) {
  const images = [img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="hero-slider smart-hero"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="hero-overlay"></div>

      {showButtons && (
        <div className="hero-buttons-position">
          <Link to="/registration-fees" className="hero-btn primary-btn">
            Register Now
          </Link>

          {/* --- FIXED DOWNLOAD BUTTON --- */}
          <a
            href="/brochure.pdf"
            download="IntelMeet-Brochure.pdf"
            className="hero-btn secondary-btn"
          >
            Download Brochure
          </a>
        </div>
      )}
    </div>
  );
}
