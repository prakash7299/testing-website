import React from "react";
import "./Login.css";
import photo from "../assets/photo.avif";
import intelmeet from "../assets/intelmeet.jpeg";
import confimage1 from "../assets/confimage-1.jpeg";
import confimage2 from "../assets/confimage-2.jpeg";
import confimage3 from "../assets/confimage-3.jpeg";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import "./SidebarLinks.css"; // Add sidebar CSS file

export default function Login() {
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
          <li><a href="#">About Us</a></li>
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

      {/* -------------------- MAIN CONTENT + SIDEBAR WRAPPER -------------------- */}
      <div className="content-sidebar-wrapper">

        {/* -------------------- LEFT MAIN CONTENT -------------------- */}
        <div className="content-main">

          {/* Conference Overview */}
          <section className="cfp-section">
            <h2 className="cfp-title">About IntelMeet Global Conferences</h2>
            <p className="cfp-text">
              IntelMeet Global Conferences is a professional conference organizing platform dedicated to advancing global research communication. 
              We enable authors and scholars to present original work, gain international recognition, and access publication opportunities through reputable indexed journals.
            </p>
            <p><br></br></p>
            <p className="cfp-text">
              Our conferences span a wide range of academic disciplines, specialized subjects, and departmental research areas, ensuring a comprehensive and inclusive environment for knowledge exchange.
            </p>
          </section>

          <section className="cfp-section">
  <h2 className="cfp-title">Call for Papers – Now Open</h2>

  <p className="cfp-text">
    IntelMeet Global Conferences invites <b>researchers, academicians, industry
    experts, and students</b> to submit original research for presentation and
    publication.
  </p>

  <p className="cfp-text">
    All submissions undergo a rigorous <b>double-blind peer-review process</b>
    to ensure high-quality academic contribution.
  </p>

  <h3 className="cfp-subtitle">Areas of Submission</h3>

  <ul className="cfp-list">
    <li>Engineering & Technology</li>
    <li>Computing, Artificial Intelligence & Data Science</li>
    <li>Management, Business & Economics</li>
    <li>Applied Sciences</li>
    <li>Arts, Humanities & Social Sciences</li>
    <li>Education, Psychology & Behavioural Sciences</li>
    <li>Life Sciences & Allied Domains</li>
  </ul>

  <p className="cfp-note">
    Authors may submit innovative studies, experimental findings, case analyses,
    or theoretical contributions aligned with the conference theme.
  </p>

  <div className="cfp-buttons">
    <a href="#" className="cfp-btn-primary">Submit Abstract</a>
    <a href="#" className="cfp-btn-secondary">View Author Guidelines</a>
  </div>
</section>

<section className="cfp-section">
  <h2 className="con-title">Upcoming International Conferences – 2025</h2>

  {/* Conference 1 */}
  <div className="conference-card">
    <h3 className="conf-name">
      <span className="icon">📌</span> International Conference on AI & Data Science (ICAIDS 2025)
    </h3>
    <p className="conf-detail"><span className="icon">📅</span> March 15, 2025</p>
    <p className="conf-detail"><span className="icon">📚</span> AI, Machine Learning, Deep Learning, Data Analytics</p>
    <a className="conf-link" href="#">🔗 View Details</a>
  </div>

  {/* Conference 2 */}
  <div className="conference-card">
    <h3 className="conf-name">
      <span className="icon">📌</span> International Conference on Engineering, Technology & Innovations (ICETI 2025)
    </h3>
    <p className="conf-detail"><span className="icon">📅</span> April 21, 2025</p>
    <p className="conf-detail">
      <span className="icon">📚</span> CSE, ECE, Mechanical, Civil, IT, Robotics
    </p>
    <a className="conf-link" href="#">🔗 View Details</a>
  </div>

  {/* Conference 3 */}
  <div className="conference-card">
    <h3 className="conf-name">
      <span className="icon">📌</span> International Conference on Business, Management & Humanities (ICBMH 2025)
    </h3>
    <p className="conf-detail"><span className="icon">📅</span> May 11, 2025</p>
    <p className="conf-detail">
      <span className="icon">📚</span> Management, Finance, HR, Psychology, Education
    </p>
    <a className="conf-link" href="#">🔗 View Details</a>
  </div>

  <a href="#" className="view-all">[View All Conferences]</a>
</section>

<section className="cfp-section">
  <h2 className="why-title">Why Participate in IntelMeet Conferences?</h2>

  <ul className="why-list">
    <li>Global platform for knowledge sharing</li>
    <li>Structured presentation opportunities</li>
    <li>Indexed journal publication support</li>
    <li>Networking with researchers and professionals</li>
    <li>Best Paper Awards</li>
    <li>Excellence in Presentation Recognition</li>
    <li>Inclusion in conference proceedings</li>
  </ul>

  <a href="#" className="why-link">[Know More]</a>
</section>

{/* ---------------- Conference Speakers ---------------- */}
<section className="cfp-section">
  <h2 className="info-title">Conference Speakers</h2>

  <p className="info-text">
    Featuring distinguished academicians, researchers, and professionals who 
    contribute expertise and insights to IntelMeet conferences.
  </p>

  <a href="#" className="info-link">[View All Speakers]</a>

  <div className="info-divider"></div>
</section>

{/* ---------------- Conference Committee ---------------- */}
<section className="cfp-section">
  <h2 className="info-title">Conference Committee</h2>

  <p className="info-text">
    Our conferences are supported by an experienced academic and professional committee 
    representing leading institutions and research bodies.
  </p>

  <a href="#" className="info-link">[Meet the Committee]</a>

  <div className="info-divider"></div>
</section>

{/* ---------------- IntelMeet Publications ---------------- */}
<section className="cfp-section">
  <h2 className="info-title">IntelMeet Publications</h2>

  <p className="info-text">
    Explore the full list of published and upcoming research articles from IntelMeet. 
    View complete conference proceedings and individual research papers.
  </p>

  <a href="#" className="info-link">— View Publications</a>

  <div className="info-divider"></div>
</section>

<section className="cfp-section">
  <h2 className="gallery-title">Recent Conference Images</h2>

  <div className="gallery-grid">
    <img src={confimage1} alt="Conference Image 1" className="gallery-img" />
    <img src={confimage2} alt="Conference Image 2" className="gallery-img" />
    <img src={confimage3} alt="Conference Image 3" className="gallery-img" />
  </div>
</section>

{/* ---------------- Participant Feedback ---------------- */}
<section className="cfp-section">
  <h2 className="feedback-title">Participant Feedback</h2>

  <div className="feedback-item">
    <p className="quote">“The conference was well-structured with clear communication throughout the process.”</p>
    <p className="author">— Faculty Member, India</p>
  </div>

  <div className="feedback-item">
    <p className="quote">“Appreciated the efficient review and publication guidance provided by the team.”</p>
    <p className="author">— Researcher, Malaysia</p>
  </div>

  <div className="feedback-item">
    <p className="quote">“A valuable platform for scholarly exchange and academic exposure.”</p>
    <p className="author">— Doctoral Scholar, UAE</p>
  </div>

  <div className="feedback-item">
    <p className="quote">“Professional session management and an excellent experience overall.”</p>
    <p className="author">— Industry Expert, Singapore</p>
  </div>

  <a href="#" className="feedback-link">[View More Testimonials]</a>

  <div className="info-divider"></div>
</section>

{/* ---------------- Connect With IntelMeet ---------------- */}
<section className="cfp-section">
  <h2 className="connect-title">Connect With IntelMeet</h2>

  <p className="connect-text">
    Stay informed about conference announcements, schedules, publication updates, and academic highlights by
    following our official social media channels.
  </p>

  <h4 className="follow-title">Follow us on:</h4>

  <ul className="connect-list">
    <li>🔗 LinkedIn</li>
    <li>📘 Facebook</li>
    <li>📷 Instagram</li>
    <li>🐦 X (Twitter)</li>
    <li>▶️ YouTube</li>
  </ul>

  <div className="info-divider"></div>
</section>






         

        </div>

        {/* -------------------- RIGHT SIDEBAR (IMPORTANT LINKS) -------------------- */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Key Benefits of Participation</a></li>
            <li><a href="#">Apply to Become a Speaker</a></li>
            <li><a href="#">Instructions for Participants</a></li>
            <li><a href="#">Author Guidelines</a></li>
            <li><a href="#">Apply for Committee Member</a></li>
            <li><a href="#">requently Asked Questions (FAQs)</a></li>
          </ul>
        </div>

      </div>
      {/* -------------------- END CONTENT + SIDEBAR -------------------- */}

      <Footer />
    </div>
  );
}
