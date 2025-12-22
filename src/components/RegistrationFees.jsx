import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegistrationFees.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import Footer from "../components/FooterEvent";
import QuickRegistration from "./QuickRegistration";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

/*
  RegistrationFees.jsx
  - Premium style matched to ConferenceEvent.jsx
  - Route: /registration-event or /registration-fees (your router should point accordingly)
*/

export default function RegistrationFees() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [status, setStatus] = useState(null);
  const [showTerms, setShowTerms] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePanelRef = useRef(null);
  const step2Ref = useRef(null);

  const WEB3FORMS_ACCESS_KEY = "c8d39d79-f4fb-4f53-9615-5572ece7334c";

  // conference meta (matching ConferenceEvent)
  const conferenceMeta = {
    title: "International Conference on Environmental & Life Sciences (ICELS-25)",
    shortTitle: "Environmental & Life Sciences",
    date: "26 December 2025",
    theme:
      "Advancing Environmental Innovation and Life Science Research for a Sustainable Future",
    location: "Virtual (Global Online Conference)",
    hero: heroImg,
  };

  /* Lock body scroll while mobile nav is open (SAME AS PaperSubmissionEvent) */
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
}, [mobileNavOpen]);


  useEffect(() => {
    document.title = `Registration & Fees — ${conferenceMeta.shortTitle} | IntelMeet Global Conferences`;
    const ldId = "registrationfees-jsonld";
    if (document.getElementById(ldId)) document.getElementById(ldId).remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Registration & Fees – " + conferenceMeta.shortTitle,
      description: `Registration categories and fees for ${conferenceMeta.title} — ${conferenceMeta.date}`,
    });
    document.head.appendChild(ld);
  }, []);

  

  // categories
  const categories = [
    ["Presenter (Paper Presentation)", "USD 120", "USD 150"],
    ["Poster Presenter", "USD 90", "USD 120"],
    ["Video Presentation", "USD 85", "USD 110"],
    ["Listener / Attendee", "USD 40", "USD 60"],
    ["Extra Paper (Same Author)", "USD 50", "USD 70"],
    ["Co-Author Participation", "USD 30", "USD 45"],
    ["Keynote Speaker", "USD 150", "USD 200"],
    ["Session Chair", "USD 100", "USD 140"],
  ];

  // file size validation
  const validateFileSize = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 500 * 1024) {
      alert("File size must be below 500 KB");
      e.target.value = "";
    }
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      if (step2Ref.current) {
        step2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 160);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!selectedCategory) {
      alert("Please select a category from the table before submitting.");
      return;
    }

    const form = e.target;
    const termsChecked = form.querySelector('input[name="terms"]')?.checked;
    if (!termsChecked) {
      alert("Please read and accept the Terms & Conditions before submitting.");
      return;
    }

    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "IntelMeet Registration Form");
      formData.append("subject", `Registration Form – ${formData.get("full_name") || "New Registration"}`);
      formData.set("category", selectedCategory);

      if (!formData.get("conference_name")) {
        formData.set(
          "conference_name",
          "International Conference on Environmental & Life Sciences (ICELS-25) – 26 December 2025"
        );
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.success) {
        setStatus("success");
        form.reset();
        setSelectedCategory(null);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form Upload Error:", err);
      setStatus("error");
    }
  };

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

  return (
    <div className="conf-page page-container registration-fees-page">
      <a href="#regcontent" className="skip-link">Skip to content</a>

      {/* TOPBAR */}
      <div className="conf-topbar" role="region" aria-label="Contact and registration">
        <div className="conf-top-left">
          <div className="conf-contact-inline">
            <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
            <span className="conf-sep">|</span>
            <a href="tel:+919025956834" className="conf-phone-link">+91 9025956834</a>
          </div>
        </div>

        <div className="conf-top-right">
          <div className="conf-top-socials">
                              <a href="https://www.facebook.com/IntelMeet/" target="_blank"><FaFacebookF /></a>
                              <a href="https://www.instagram.com/intelmeetglobal/" target="_blank"><FaInstagram /></a>
                              <a href="https://x.com/intelmeet" target="_blank"><FaTwitter /></a>
                              <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank"><FaLinkedinIn /></a>
                              <a href="https://www.youtube.com/@intelmeetglobal" target="_blank"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* NAVBAR (same premium as ConferenceEvent) */}
      <header className="conf-navbar" role="banner" aria-label="Main navigation">
        <div className="conf-nav-left">
          <img src={intelmeet} alt="IntelMeet Global Conferences" className="conf-logo" />
        </div>

        <nav className="nav-links" aria-label="Main navigation">
         <ul>
                     <li><Link to="/icels" className="nav-link">Home</Link></li>
                     <li><Link to="/about-event" className="nav-link">About</Link></li>
                     <li><Link to="/callforpaper" className="nav-link">Call for Papers</Link></li>
                     <li><Link to="/papersubmissionevent" className="nav-link">Paper Submission</Link></li>
                     <li><Link to="/speaker-event" className="nav-link">Speakers</Link></li>
                     <li><Link to="/committee-event" className="nav-link">Committee</Link></li>
                     <li><Link to="/publications-event" className="nav-link">Publications</Link></li>
                     <li><Link to="/contact-event" className="conf-active-section">Contact</Link></li>
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

      {/* Mobile panel */}
        <div className={`conf-mobile-panel ${mobileNavOpen ? "show" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="conf-mobile-backdrop" onClick={() => setMobileNavOpen(false)} />
          <div className="conf-mobile-inner centered" ref={mobilePanelRef}>
            <div className="conf-mobile-header">
              <div className="conf-mobile-brand">
                <img src={intelmeet} alt="IntelMeet" style={{ height: 34 }} />
                <strong className="conf-mobile-title">Registration — {conferenceMeta.shortTitle}</strong>
              </div>
              <button className="conf-mobile-close" onClick={() => setMobileNavOpen(false)} aria-label="Close menu">✕</button>
            </div>

            <nav aria-label="Mobile main navigation">
              <ul className="conf-mobile-list" role="menu">
                <li role="none"><Link role="menuitem" to="/icels" onClick={() => setMobileNavOpen(false)}>Home</Link></li>
                <li role="none"><Link role="menuitem" to="/about-event" onClick={() => setMobileNavOpen(false)}>About</Link></li>
                <li role="none"><Link role="menuitem" to="/callforpaper" onClick={() => setMobileNavOpen(false)}>Call for Papers</Link></li>
                <li role="none"><Link role="menuitem" to="/papersubmission" onClick={() => setMobileNavOpen(false)}>Paper Submission</Link></li>
                <li role="none"><Link role="menuitem" to="/registration-event" onClick={() => setMobileNavOpen(false)}>Registration</Link></li>
                <li role="none"><Link role="menuitem" to="/speaker" onClick={() => setMobileNavOpen(false)}>Speakers</Link></li>
                <li role="none"><Link role="menuitem" to="/contact" onClick={() => setMobileNavOpen(false)}>Contact</Link></li>
              </ul>
            </nav>

            <div className="conf-mobile-quick">
              <h4>Quick Registration</h4>
              <QuickRegistration compact />
            </div>

            <div className="conf-mobile-cta">
              <Link to="/papersubmission" className="conf-cta">Submit Paper</Link>
              <Link to="/registration-event" className="conf-cta outline">Register</Link>
            </div>
          </div>
        </div>

      {/* Hero */}
      <section className="conf-hero" style={{ backgroundImage: `url(${conferenceMeta.hero})` }} aria-label="Registration hero">
        <div className="conf-hero-overlay" />
        <div className="conf-hero-content">
          <div className="conf-eyebrow">Registration & Fees • ICELS-25</div>
          <h1 className="conf-hero-title">Registration & Fees</h1>
          <p className="conf-hero-theme">{conferenceMeta.theme}</p>
          <div className="conf-hero-meta">
            <span className="conf-date">{conferenceMeta.date}</span>
            <span className="conf-location"> • {conferenceMeta.location}</span>
          </div>
        </div>
      </section>

      {/* Main wrapper */}
      <div className="conf-wrapper">
        <main id="regcontent" className="conf-main">
          <section className="conf-card section-card premium-card">
            <header className="card-header">
              <h2>Registration Categories & Fees</h2>
              <div className="card-decor" aria-hidden />
            </header>

            <p className="cfp-text">
              IntelMeet Global Conferences provides flexible registration options to support presenters,
              listeners, and contributors worldwide. For bank transfer or PayPal instructions contact
              <strong> support@intelmeetglobal.com</strong> or <strong>+91 9025956834</strong>.
            </p>
            <p className="click-msg">Click any row to continue registration</p>
            <div className="reg-card">
              <div className="reg-table-wrap">
                <table className="reg-table" role="table" aria-label="Registration categories and fees">
                  <thead>
                    <tr>
                      <th>Participation Category</th>
                      <th>Early Registration<br /><span className="muted">Till 20th Dec 2025</span></th>
                      <th>General Registration<br /><span className="muted">Till 24st Dec 2025</span></th>
                    </tr>
                  </thead>
                  <tbody className="reg-table-mobile">
                    {categories.map(([cat, early, gen]) => (
                      <tr
                        key={cat}
                        className={selectedCategory === cat ? "selected-row" : ""}
                        onClick={() => handleSelectCategory(cat)}
                        role="row"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter") handleSelectCategory(cat); }}
                      >
                        <td role="cell">{cat}</td>
                        <td className="price-col" role="cell">{early}</td>
                        <td className="price-col" role="cell">{gen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedCategory && (
              <div ref={step2Ref} className="step2-section premium-card">
                <h3 className="step-title">Step 2: Complete the Registration Form</h3>
                <p className="cfp-text">Selected Category: <strong>{selectedCategory}</strong></p>

                <form className="reg-form" onSubmit={handleSubmit} encType="multipart/form-data" aria-label="Registration form">
                  <div className="grid-form">
                    <div className="form-row">
                      <label>Full Name</label>
                      <input type="text" name="full_name" required placeholder="eg., David Mathew" />
                    </div>

                    <div className="form-row">
                      <label>Email Address</label>
                      <input type="email" name="email" required placeholder="eg., david@email.com" />
                    </div>

                    <div className="form-row">
                      <label>Country</label>
                      <input type="text" name="country" required placeholder="Select Country" />
                    </div>

                    <div className="form-row">
                      <label>Phone Number</label>
                      <input type="text" name="phone" required placeholder="eg., +1-9876543210" />
                    </div>

                    <div className="form-row">
                      <label>Highest Qualification</label>
                      <input type="text" name="qualification" placeholder="eg., MSc / PhD / M.Tech" />
                    </div>

                    <div className="form-row">
                      <label>Full Address</label>
                      <input type="text" name="address" placeholder="eg., 221B Baker Street…" />
                    </div>

                    <div className="form-row">
                      <label>Zip / Pin Code</label>
                      <input type="text" name="zip_code" placeholder="eg., 560001" />
                    </div>

                    <div className="form-row full-width">
                      <label>Paper Title (if applicable)</label>
                      <input type="text" name="paper_title" placeholder="(If applicable)" />
                    </div>

                    <div className="form-row full-width">
                      <label>Conference Name & Date</label>
                      <input
                        type="text"
                        name="conference_name"
                        readOnly
                        value="International Conference on Environmental & Life Sciences (ICELS-25) – 26 December 2025"
                      />
                    </div>

                    <div className="form-row">
                      <label>Upload Professional Image</label>
                      <input type="file" name="professional_image" onChange={validateFileSize} />
                      <small>Accepted formats: .jpg, .png</small>
                    </div>

                    <div className="form-row">
                      <label>Upload Identity Proof (Any one)</label>
                      <input type="file" name="identity_proof" onChange={validateFileSize} />
                      <small>Accepted formats: .pdf, .doc, .docx, .jpg, .png</small>
                    </div>

                    <div className="form-row full-width">
                      <label>Additional Comments (Optional)</label>
                      <textarea name="comments" placeholder="eg., requesting afternoon session slot" />
                    </div>

                    <div className="form-row full-width terms-row">
                      <label className="terms-line">
                        <input type="checkbox" name="terms" value="accepted" required />
                        <span>I have read and agree to the Terms & Conditions of IntelMeet Global Conferences.
                          <button type="button" className="link-button" onClick={() => setShowTerms(true)}> Terms & Conditions</button>
                        </span>
                      </label>
                    </div>

                    <input type="hidden" name="category" value={selectedCategory} />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-submit">Submit</button>
                    <button type="button" className="btn-reset" onClick={() => setSelectedCategory(null)}>Reset</button>
                  </div>

                  <div className="covers-contact">
                    <div className="covers">
                      <h4>What Your Registration Covers</h4>
                      <ul>
                        <li>Access to all conference sessions</li>
                        <li>Expert talks & keynote sessions</li>
                        <li>Conference agenda & session information</li>
                        <li>Technical assistance</li>
                        <li>Inclusion in conference schedule</li>
                        <li>Session materials post-event</li>
                      </ul>
                    </div>

                    <div className="contact-support">
                      <h4>Contact Support</h4>
                      <p>If you prefer bank transfer or PayPal, request account details:</p>
                      <p><strong>Email:</strong> support@intelmeetglobal.com</p>
                      <p><strong>Phone:</strong> +91 90259 56834</p>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </section>
        </main>

        {/* Sidebar */}
        <aside className="conf-sidebar" aria-label="Quick links & actions">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/icels">ICELS-25 Home</Link></li>
              <li><Link to="/papersubmissionevent">Submit Paper</Link></li>
              <li><Link to="/registration-event">Registration</Link></li>
              <li><Link to="/contact-event">Contact</Link></li>
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
              <li><strong>Submission:</strong> 24 December 2025</li>
              <li><strong>Conference:</strong> 26 December 2025</li>
              <li><strong>Registration Close:</strong> 24 Dec 2025</li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />

      {/* status modals */}
      {status === "success" && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setStatus(null)}>×</button>
            <h2 className="modal-title">✔ Registration Submitted</h2>
            <p>Your registration has been successfully sent. We will contact you shortly.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setStatus(null)}>×</button>
            <h2 className="modal-title">❌ Submission Failed</h2>
            <p>Please try again or contact support@intelmeetglobal.com</p>
          </div>
        </div>
      )}

      {/* Terms popup */}
      {showTerms && (
        <div className="modal-overlay" style={{ zIndex: 1200 }}>
          <div className="modal-box" style={{ width: "90%", maxWidth: 1100, maxHeight: "86vh", overflow: "hidden", padding: 0 }}>
            <div style={{ padding: "18px 20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0 }}>Terms & Conditions – IntelMeet Global Conferences</h2>
              <button onClick={() => setShowTerms(false)} style={{ background: "#0f8a6a", color: "#fff", border: "none", borderRadius: 6, padding: "8px 12px", cursor: "pointer" }}>Close</button>
            </div>

            <div
  style={{
    padding: "24px",
    background: "#ffffff",
    maxHeight: "70vh",
    overflowY: "auto",
    borderRadius: "16px",
    boxShadow: "0 18px 48px rgba(16,24,40,0.08)",
    border: "1px solid rgba(0,0,0,0.06)",
  }}
>
  <pre
    style={{
      whiteSpace: "pre-wrap",
      fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont",
      fontSize: "15px",
      lineHeight: 1.7,
      color: "#1f2937",
      margin: 0,
    }}
  >{`
Terms & Conditions – IntelMeet Global Conferences

These Terms and Conditions apply to all participants, authors, presenters, and attendees of IntelMeet Global Conferences. By registering, submitting any material, or attending the event, you agree to follow all guidelines listed below.

1. Registration and Communication
1A. All participants must provide accurate and complete details during registration, as all communication, instructions, and meeting links will be sent to the email provided.
1B. Participants are responsible for checking their email inbox and spam folders regularly, as missing communication may affect participation.
1C. Participants must join the event using the same name and email used during registration so that the organizing team can verify their identity and attendance.
1D. IntelMeet is not responsible for missed updates, delays, or communication gaps resulting from the participant not checking or responding to official emails.

2. Participation and Presentation Requirements
2A. Participants must ensure they have a stable internet connection, functioning audio and video devices, and the latest version of the virtual meeting platform to participate without technical issues.
2B. IntelMeet is not responsible for technical problems — including network failure, device malfunction, or software errors — occurring on the participant's side.
2C. Speakers should join the conference session at least thirty minutes before their scheduled presentation for verification and technical checks.
2D. If a presenter is unable to join live due to unavoidable or technical reasons, they may submit their PPT or a recorded video presentation, which will be accepted as valid participation.
2E. If a presenter neither joins live nor submits the required PPT or video, their participation will not be recorded, and they will not be included in conference records.

3. Submission and Review Process
3A. All submissions must be original, properly referenced, and free from plagiarism. IntelMeet reserves the right to reject any submission that does not meet basic academic standards.
3B. Submitted materials undergo a basic review for structure, clarity, and relevance, and revisions may be requested before acceptance.
3C. Only authors who complete registration and either present live or submit approved presentation materials will be considered as having participated in the conference.
3D. The submitting author is considered the primary author. IntelMeet will not be involved in resolving authorship disputes between contributors.
3E. Withdrawn or rejected submissions will not be reconsidered for future conferences without resubmission as a new entry.

4. Conference Communications and Materials
4A. IntelMeet may record conference sessions for documentation and archive purposes.
4B. By participating, individuals grant IntelMeet permission to use non-sensitive materials such as screenshots, group photos, abstract details, and voluntarily submitted presentation videos.
4C. These materials may be stored in IntelMeet's digital library or used for academic-related communication and conference documentation.

5. Professional Conduct
5A. Participants must maintain respectful communication and appropriate behavior throughout the event.
5B. Any form of harassment, offensive communication, or disruption may result in immediate removal from the conference.
5C. Participants must follow instructions from moderators and organizing staff to ensure smooth session management.

6. Technical and Platform-Related Conditions
6A. IntelMeet may update or change the virtual meeting platform, links, or session flow if required for operational purposes.
6B. IntelMeet is not responsible for downtime, disruptions, or issues caused by third-party virtual meeting platforms.
6C. Participants must use compatible devices and updated applications to avoid technical problems during the event.

7. Event Modifications
7A. IntelMeet may adjust the conference schedule, speaker order, or session timings based on event requirements or technical needs.
7B. Such modifications will be communicated to participants via the registered email, and all participants are expected to follow the updated schedule.
7C. No refunds or compensations will be provided due to schedule changes.

8. Plagiarism and Academic Integrity Policy
8A. All submitted papers and presentation materials will undergo an originality check using plagiarism detection tools to ensure academic integrity and originality.
8B. Papers that do not meet originality criteria will be returned to authors for correction. Authors must revise the content and resubmit as instructed.
8C. If plagiarism or false authorship is suspected after submission, the work may be temporarily removed from IntelMeet's digital records until verification is completed.
8D. If major plagiarism or unethical copying is confirmed, the submission will be permanently removed, and the author may be restricted from future IntelMeet events.
8E. Self-plagiarism, including republishing previously published work without proper reference, is not allowed and will be treated as a violation.

9. Refund and Cancellation Policy
9A. All virtual participation registrations are non-refundable.
9B. If a participant cannot attend the event for any reason, IntelMeet may allow the registration to be shifted to a future conference, subject to approval.
9C. Registrations taken under discounts or promotional offers cannot be cancelled, transferred, or refunded.
9D. Changes in conference date, schedule, or session flow do not qualify for refunds.
9E. IntelMeet does not provide refunds for technical issues such as internet failure or connectivity problems on the participant's side.

10. General Liability
10A. IntelMeet is not responsible for any losses, delays, or missed opportunities caused by technical issues, participant-side errors, or communication gaps.
10B. IntelMeet's responsibility is limited to hosting and facilitating the virtual conference and ensuring that scheduled sessions are delivered.

11. Acceptance of Terms
By registering, submitting a paper, or participating in IntelMeet Global Conferences, you confirm that you have read, understood, and agreed to all terms stated above.
;`}
              </pre>
            </div>

            <div style={{ padding: 16, borderTop: "1px solid #eee", textAlign: "center" }}>
              <button onClick={() => setShowTerms(false)} style={{ background: "#0f8a6a", color: "#fff", border: "none", borderRadius: 6, padding: "10px 20px", cursor: "pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
