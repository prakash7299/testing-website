import React from "react";
import "./Login.css";
import photo from "../assets/photo.avif";
import intelmeet from "../assets/intelmeet.jpeg";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

export default function Login() {
  return (

    
    <div className="page-container">
      {/* Navbar */}
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
        <img src={intelmeet} alt="Logo" className="logo"/>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Committee Member</a></li>
          <li><a href="#">Speaker</a></li>
          <li><a href="#">Past Speaker</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        
        <a href="https://docs.google.com/forms/d/1cnm3AfTKKIBITCzCOMlnGouGa2qiuDbEiIjsozMQtTo/edit" className="btn-register">Registration</a>
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


      {/* Conference Overview */}
      <section className="content-section">
        <h2>Conference Overview</h2>
        <p>
          The <b>International Conference on Emerging Technologies, Pharmacology Education and Business (ICETPEB-25)</b> 
          will be held in <b>both physical and virtual modes</b>, ensuring accessibility for participants worldwide.
        </p>
        <p>
          This hybrid format enables <b>participants, keynote speakers, presenters, and volunteers</b> 
          to access top-tier resources, discussions, and networking opportunities.
        </p>
        <p>
          (ICETPEB-25) will feature a range of <b>knowledge-sharing sessions, networking opportunities, and social events</b>, 
          ensuring that both virtual and in-person attendees can connect, learn, and grow professionally.
        </p>
      </section>

      {/* Theme and Objective */}
      <section className="content-section">
        <h2>Conference Theme and Conference Objective</h2>
        <p>
          Addressing key challenges in the field with modern, practical solutions is the central focus of the conference.
          The goal is to bring together global experts and researchers to support collective priorities and advancement.
        </p>
        <p>
          Participants will gain access to insightful discussions, pioneering studies, and interactive networking opportunities.
        </p>
      </section>

      {/* Who Should Attend */}
      <section className="content-section">
        <h2>Who Should Attend (ICETPEB-25)?</h2>
        <p>
          All those engaged in <b>Computer Science, Technology, and Artificial Intelligence</b> 
          — including students, researchers, and professionals — will find this conference beneficial.
        </p>
        <p>
          Attendees will gain access to the global <b>Computer Science and Artificial Intelligence</b> community 
          through interactive sessions and networking opportunities.
        </p>
      </section>

      {/* Why Attend Virtually */}
      <section className="content-section">
        <h2>Why Attend Virtually?</h2>
        <ul>
          <li>🌐 Global Accessibility – Attend from anywhere in the world.</li>
          <li>💰 Cost-Effective – Save on travel and lodging costs.</li>
          <li>⏰ Flexible Participation – Watch sessions live or recorded.</li>
          <li>💬 Interactive Engagement – Participate in Q&A and discussions.</li>
          <li>🤝 Seamless Networking – Connect with experts and peers globally.</li>
        </ul>
      </section>

      {/* Delegates */}
      <section className="delegates-section">
        <h2>Our Respected Delegates</h2>
        <div className="delegate-grid">
          <div className="delegate">
            <h4>Online Presenter</h4>
            <img src="https://via.placeholder.com/250x250" alt="Dr. Blerat Cenaj" />
            <h5>Dr. Blerat Cenaj</h5>
            <p>Primary Health Care Center, Kosovo</p>
          </div>
          <div className="delegate">
            <h4>Keynote Speaker</h4>
            <video controls width="250">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <h5>Dr. Walida Ounruean</h5>
            <p>Assistant Professor, UTRU, Thailand</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
