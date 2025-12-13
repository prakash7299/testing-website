import React from "react";
import "./Login.css";
import photo from "../assets/confimage-1.jpeg";
import intelmeet from "../assets/intelmeet.jpeg";
import confimage1 from "../assets/speaker-walida.png";
import confimage2 from "../assets/speaker-suraj.png";
import confimage3 from "../assets/committee-mahmoud.png";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";
import "./SidebarLinks.css"; // Add sidebar CSS file

export default function Login() {
  // speaker data only used for this section
  const speakers = [
    {
      id: 1,
      name: "Dr. Walida Ounruean",
      role: "International Education Ambassador — Thailand",
      image: confimage1,
    },
    {
      id: 2,
      name: "Dr. Suraj Kumar Mukti",
      role: "National Institute of Technology Raipur — India",
      image: confimage2,
    },
    {
      id: 3,
      name: "Dr. Mahmoud Magdy Abbas",
      role: "Agricultural & Biological Research — Egypt",
      image: confimage3,
    },
  ];

  return (

    <div className="page-container">

      {/* Top bar */}
      <div className="top-bar">
        <div>
          <span>
            <a href="mailto:support@intelmeetglobal.com">
              support@intelmeetglobal.com
            </a>
          </span>
          | <a href="tel:+919442417477" className="phone-link">+91 9442417477</a>
        </div>
        <div><span className="hidden-placeholder">f</span></div>
        <div>
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/intelmeet" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <img src={intelmeet} alt="Logo" className="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><Link className="nav-link" to="/about">About Us</Link></li>
          <li><Link className="nav-link" to="/upcoming-conferences">Upcoming Conferences</Link></li>
          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>

            <div className="dropdown-menu">
              <Link className="nav-link" to="/papersubmission">📄 Submission Form</Link>
              <Link className="nav-link" to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
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

      <HeroSlider
  title="ICETPEB-25 Conference"
  subtitle="20 Nov 2025 • Barcelona, Spain • Hybrid Mode"
  showButtons={true}
/>

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
            <h2 className="con-title">Upcoming International Conferences – 2025</h2>

            {/* Conference 1 */}
            <div className="conference-card">
              <h3 className="conf-name">
                <span className="icon"></span> International Conference on Environmental & Life Sciences (ICELS-25)
              </h3>
              <p className="conf-detail"><span className="icon">📅</span> 19 December 2025</p>
              <Link className="conf-link" to="/upcoming-conferences">
   View Details
</Link>
            </div>

            {/* Conference 2 */}
            <div className="conference-card">
              <h3 className="conf-name">
                <span className="icon"></span> International Conference on Science, Computing & Data Analytics (ICSDA)
              </h3>
              <p className="conf-detail"><span className="icon">📅</span> 5 December 2025</p>
              <Link className="conf-link" to="/upcoming-conferences">
   View Details
</Link>
            </div>

            {/* Conference 3 */}
            <div className="conference-card">
              <h3 className="conf-name">
                <span className="icon"></span> International Conference on Management, Business & Social Innovation (ICMBSI)
              </h3>
              <p className="conf-detail"><span className="icon">📅</span> 8 December 2025</p>
              <Link className="conf-link" to="/upcoming-conferences">
   View Details
</Link>
            </div>
              <Link className="view-all" to="/upcoming-conferences">[View All Conferences]</Link>
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

            <Link className="why-link" to="/benefits">[Know More]</Link>
          </section>

          {/* ---------------- Conference Speakers (REPLACED with luxury layout) ---------------- */}
          <section className="cfp-section speakers-section" aria-labelledby="speakers-heading">
            <div className="speakers-header">
              <h2 id="speakers-heading" className="speakers-title">Invited Speakers</h2>
              <p className="speakers-sub">Key invited speakers and high-impact presentations.</p>
            </div>

            <div className="speakers-grid" role="list">
              {speakers.map((s) => (
                <article key={s.id} className="speaker-card" role="listitem" itemScope itemType="https://schema.org/Person">
                  <div className="speaker-media">
                    <div className="speaker-photo-wrap">
                      <img src={s.image} alt={s.name} className="speaker-photo" itemProp="image" />
                      <div className="photo-glow" aria-hidden />
                    </div>
                  </div>

                  <div className="speaker-info">
                    <div className="speaker-name" itemProp="name">{s.name}</div>
                    <div className="speaker-role" itemProp="jobTitle">{s.role}</div>
                  </div>
                </article>
              ))}
            </div>

            <div className="speakers-cta">
              <Link to="/speaker" className="btn-view-speakers">View Full Speakers</Link>
            </div>

            <div className="info-divider"></div>
          </section>

          {/* ---------------- Conference Committee ---------------- */}
          <section className="cfp-section">
            <h2 className="info-title">Conference Committee</h2>

            <p className="info-text">
              Our conferences are supported by an experienced academic and professional committee
              representing leading institutions and research bodies.
            </p>
            <Link className="info-link" to="/committee">[Meet the Committee]</Link>

            <div className="info-divider"></div>
          </section>

          {/* ---------------- IntelMeet Publications ---------------- */}
          <section className="cfp-section">
            <h2 className="info-title">IntelMeet Publications</h2>

            <p className="info-text">
              Explore the full list of published and upcoming research articles from IntelMeet.
              View complete conference proceedings and individual research papers.
            </p>

            <Link className="info-link" to="/publications">— View Publications</Link>

            <div className="info-divider"></div>
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

        </div>

        {/* -------------------- RIGHT SIDEBAR (IMPORTANT LINKS) -------------------- */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link className="nav-link" to="/benefits">Key Benefits of Participation</Link></li>
            <li><Link className="nav-link" to="/apply-speaker">Apply to Become a Speaker</Link></li>
            <li><Link className="nav-link" to="/instructions">Instructions for Participants</Link></li>
            <li><Link className="nav-link" to="/papersubmission-guidelines">Author Guidelines</Link></li>
            <li><Link className="nav-link" to="/committee-application">Apply for Committee Member</Link></li>
            <li><Link className="nav-link" to="/faq">Frequently Asked Questions (FAQs)</Link></li>
          </ul>
        </div>

      </div>
      {/* -------------------- END CONTENT + SIDEBAR -------------------- */}

      <Footer />
    </div>
  );
}
