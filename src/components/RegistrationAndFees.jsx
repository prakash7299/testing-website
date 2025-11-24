// src/pages/RegistrationAndFees.jsx
import React, { useState, useRef } from "react";
import "./RegistrationAndFees.css";
import "./About.css";
import "./Login.css";
import "./UpcomingConferences.css";
import photo from "../assets/confimage-1.jpeg";
// Use the uploaded local logo path (developer instruction)
const logoUrl = "/mnt/data/intelmeet.jpeg";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function RegistrationAndFees() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [status, setStatus] = useState(null); // success | error | null
  const [showTerms, setShowTerms] = useState(false);
  const step2Ref = useRef(null);

  // Web3Forms PRO Access Key
  const WEB3FORMS_ACCESS_KEY = "c8d39d79-f4fb-4f53-9615-5572ece7334c";

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);

    setTimeout(() => {
      if (step2Ref.current) {
        step2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

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

  // TERMS & CONDITIONS (copied from your screenshots — pasted verbatim)
  const TERMS_TEXT = `
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
`;

  // ------------------------------------
  //     FORM SUBMIT → Web3Forms
  // ------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // simple client-side validation: ensure category and terms are present
    if (!selectedCategory) {
      alert("Please select a category from the table before submitting.");
      return;
    }

    const form = e.target;
    // ensure terms checkbox checked
    const termsChecked = form.querySelector('input[name="terms"]')?.checked;
    if (!termsChecked) {
      alert("Please read and accept the Terms & Conditions before submitting.");
      return;
    }

    try {
      const formData = new FormData(form);

      // Required Access Key
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "IntelMeet Registration Form");
      formData.append("subject", `Registration Form – ${formData.get("full_name") || "New Registration"}`);

      // Ensure category + conference name are included even if readOnly
      formData.set("category", selectedCategory);
      if (!formData.get("conference_name")) {
        formData.set("conference_name", "International Conference on Science, Engineering & Technology (ICSET-2025) – 28 November 2025");
      }

      // NOTE: files are included and will be sent (you have PRO)
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
        console.error("Web3Forms Error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("Form Upload Error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="page-container about-page">
      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>{" "}
          | <a href="tel:+919442417477" className="phone-link">+91 9442417477</a>
        </div>
        <div><span className="hidden-placeholder">f</span></div>
        <div className="top-icons">
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a><FaTwitter /></a>
          <a><FaLinkedinIn /></a>
          <a><FaYoutube /></a>
        </div>
      </div>

      {/* NAV */}
      <div className="navbar">
        <img src={logoUrl} alt="IntelMeet" className="logo" />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/upcoming-conferences">Upcoming Conferences</Link></li>

          <li className="dropdown">
            <span className="dropdown-toggle">Paper Submission ▾</span>
            <div className="dropdown-menu">
              <Link to="/papersubmission">📄 Submission Form</Link>
              <Link to="/papersubmission-guidelines">📘 Submission Guidelines</Link>
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

      {/* HERO */}
      <section className="uc-hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="uc-hero-content">
          <h1>Registration & Fees</h1>
          <p>Choose your participation category & complete your registration</p>
        </div>
      </section>

      <div className="content-sidebar-wrapper">
        {/* LEFT: MAIN */}
        <div className="content-main">
          <div className="about-section reg-section">
            <h2 className="cfp-title about-section-title">Registration Categories & Fees</h2>

            <p className="cfp-text">
              IntelMeet Global Conferences provides flexible registration options to support presenters,
              listeners, and contributors worldwide.
            </p>

            <p className="cfp-text">
              For bank transfer or PayPal instructions contact <strong>support@intelmeetglobal.com</strong> or <strong>+91 94424 17477</strong>.
            </p>

            <div className="reg-card">
              <div className="reg-table-wrap">
                <table className="reg-table">
                  <thead>
                    <tr>
                      <th>Participation Category</th>
                      <th>Early Registration<br /><span className="muted">Till 25th Nov 2025</span></th>
                      <th>General Registration<br /><span className="muted">Till 27th Nov 2025</span></th>
                    </tr>
                  </thead>
                  <tbody className="reg-table-mobile">
                    {categories.map(([cat, early, gen]) => (
                      <tr
                        key={cat}
                        className={selectedCategory === cat ? "selected-row" : ""}
                        onClick={() => handleSelectCategory(cat)}
                      >
                        <td>{cat}</td>
                        <td className="price-col">{early}</td>
                        <td className="price-col">{gen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="click-msg">Click any row to continue registration</p>

            {/* STEP 2 FORM */}
            {selectedCategory && (
              <div ref={step2Ref} className="step2-section">
                <h3 className="step-title">Step 2: Complete the Registration Form</h3>
                <p className="cfp-text">Selected Category: <strong>{selectedCategory}</strong></p>

                <form className="reg-form" onSubmit={handleSubmit} encType="multipart/form-data" style={{ maxWidth: 980, margin: "0 auto" }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "16px",
                    alignItems: "start"
                  }}>
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
                      <input type="text" name="qualification" required placeholder="eg., MSc / PhD / M.Tech" />
                    </div>

                    <div className="form-row">
                      <label>Full Address</label>
                      <input type="text" name="address" required placeholder="eg., 221B Baker Street…" />
                    </div>

                    <div className="form-row">
                      <label>Zip / Pin Code</label>
                      <input type="text" name="zip_code" required placeholder="eg., 560001" />
                    </div>

                    <div className="form-row" style={{ gridColumn: "1 / -1" }}>
                      <label>Paper Title (if applicable)</label>
                      <input type="text" name="paper_title" placeholder="(If applicable) eg., Deep Learning Approach…" />
                    </div>

                    <div className="form-row" style={{ gridColumn: "1 / -1" }}>
                      <label>Conference Name & Date</label>
                      <input
                        type="text"
                        name="conference_name"
                        readOnly
                        value="International Conference on Science, Engineering & Technology (ICSET-2025) – 28 November 2025"
                      />
                    </div>

                    {/* FILE UPLOADS — REQUIRED */}
                    <div className="form-row">
                      <label>Upload Professional Image</label>
                      <input type="file" name="professional_image" accept=".jpg,.jpeg,.png" required />
                      <small>Accepted formats: .jpg, .png</small>
                    </div>

                    <div className="form-row">
                      <label>Upload Identity Proof (Any one)</label>
                      <input type="file" name="identity_proof" accept=".pdf,.doc,.docx,.jpg,.png" required />
                      <small>Accepted formats: .pdf, .doc, .docx, .jpg, .png</small>
                    </div>

                    <div className="form-row" style={{ gridColumn: "1 / -1" }}>
                      <label>Additional Comments (Optional)</label>
                      <textarea name="comments" placeholder="eg., requesting afternoon session slot" />
                    </div>

                    {/* Terms link + hidden field */}
                    <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 12 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input type="checkbox" name="terms" value="accepted" required />
                        <span>I have read and agree to the of IntelMeet Global Conferences.<button type="button" className="link-button" onClick={() => setShowTerms(true)}>Terms & Conditions</button></span>
                      </label>
                    </div>

                    <input type="hidden" name="category" value={selectedCategory} />
                  </div>

                  <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                    <button type="submit" className="btn-submit">Submit</button>
                    <button type="button" className="btn-reset" onClick={() => setSelectedCategory(null)}>Reset</button>
                  </div>

                  <div style={{ marginTop: 22 }} className="covers-contact">
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
                      <p><strong>Phone:</strong> +91 94424 17477</p>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar-links">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/benefits">Key Benefits</Link></li>
            <li><Link to="/apply-speaker">Apply to Become a Speaker</Link></li>
            <li><Link to="/instructions">Instructions for Participants</Link></li>
            <li><Link to="/papersubmission-guidelines">Author Guidelines</Link></li>
            <li><Link to="/committee-application">Apply for Committee Member</Link></li>
            <li><Link to="/faq">Frequently Asked Questions</Link></li>
          </ul>
        </div>
      </div>

      <Footer />

      {/* SUCCESS MODAL */}
      {status === "success" && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setStatus(null)}>×</button>
            <h2 className="modal-title">✔ Registration Submitted</h2>
            <p>Your registration has been successfully sent. We will contact you shortly.</p>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {status === "error" && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setStatus(null)}>×</button>
            <h2 className="modal-title">❌ Submission Failed</h2>
            <p>Please try again or contact support@intelmeetglobal.com</p>
          </div>
        </div>
      )}

      {/* TERMS POPUP */}
      {showTerms && (
        <div className="modal-overlay" style={{ zIndex: 1100 }}>
          <div className="modal-box" style={{
            width: "90%",
            maxWidth: 1100,
            maxHeight: "86vh",
            overflow: "hidden",
            padding: 0,
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ padding: "18px 20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0 }}>Terms & Conditions – IntelMeet Global Conferences</h2>
              <button onClick={() => setShowTerms(false)} style={{ background: "#007bff", color: "#fff", border: "none", borderRadius: 6, padding: "8px 12px", cursor: "pointer" }}>Close</button>
            </div>

            <div style={{ padding: 20, overflowY: "auto", background: "#fff" }}>
              <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.6 }}>
                {TERMS_TEXT}
              </pre>
            </div>

            <div style={{ padding: 16, borderTop: "1px solid #eee", textAlign: "center" }}>
              <button onClick={() => setShowTerms(false)} style={{ background: "#007bff", color: "#fff", border: "none", borderRadius: 6, padding: "10px 20px", cursor: "pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
