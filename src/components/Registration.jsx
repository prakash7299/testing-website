// src/pages/Registration.jsx
import React, { useRef, useState } from "react";
import "./registration.css";
import { init, sendForm } from "@emailjs/browser";

// Initialize EmailJS
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Registration() {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // COUNTRY → CODE MAP
  const countryCodes = {
    India: "+91",
    "United States": "+1",
    "United Kingdom": "+44",
    Canada: "+1",
    Singapore: "+65",
    Malaysia: "+60",
    UAE: "+971",
    Germany: "+49",
    France: "+33",
    Japan: "+81",
    China: "+86",
    Bangladesh: "+880",
    Pakistan: "+92",
    Nepal: "+977",
    Other: "",
  };

  const [phoneCode, setPhoneCode] = useState("");
  const [whatsappCode, setWhatsappCode] = useState("");

  const handleCountryChange = (e) => {
    const code = countryCodes[e.target.value] || "";
    setPhoneCode(code);
    setWhatsappCode(code);
  };

  // Dynamic Co-Authors
  const [coAuthorCount, setCoAuthorCount] = useState(0);

  const handleCoAuthorChange = (e) => {
    let count = Number(e.target.value);
    if (count < 0) count = 0;
    if (count > 5) count = 5;
    setCoAuthorCount(count);
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      await sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      setStatus({ ok: true, msg: "Submission received successfully." });
      formRef.current.reset();
      setCoAuthorCount(0);
      setPhoneCode("");
      setWhatsappCode("");
    } catch (err) {
      console.error(err);
      setStatus({
        ok: false,
        msg: "Submission failed. Please try again or email support@intelmeetglobal.com",
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="reg-page">
      <div className="reg-container">
        <div className="reg-header-box">
          <h1 className="reg-header-title">
            Paper Submission – IntelMeet Global Conferences
          </h1>

          <p className="reg-header-desc">
            IntelMeet invites researchers, students, academicians, and professionals
            to submit original research abstracts for presentation at our upcoming
            conferences. Please provide the required details below.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="reg-form"
          encType="multipart/form-data"
        >
          {/* ---------------- AUTHOR INFORMATION ---------------- */}
          <div className="section">
            <h2 className="section-title">Author Information</h2>

            <div className="two-col">
              <label>
                Salutation *
                <select name="salutation" required>
                  <option value="">Select Salutation</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Dr.</option>
                  <option>Prof.</option>
                </select>
              </label>

              <label>
                First Name *
                <input type="text" name="first_name" placeholder="e.g., Mathew" required />
              </label>

              <label>
                Last Name *
                <input type="text" name="last_name" placeholder="e.g., William" required />
              </label>

              <label>
                Email Address *
                <input type="email" name="email" placeholder="e.g., name@mail.com" required />
              </label>

              <label>
                Country *
                <select name="country" required onChange={handleCountryChange}>
                  <option value="">Select Country</option>
                  {Object.keys(countryCodes).map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </label>

              {/* Mobile + Code */}
              <label className="full-width">
                Contact Number *
                <div className="phone-row">
                  <input className="code-box" value={phoneCode} readOnly />
                  <input
                    type="text"
                    name="contact_number"
                    placeholder="Enter Number"
                    required
                  />
                </div>
              </label>

              <label className="full-width">
                WhatsApp / Viber Number *
                <div className="phone-row">
                  <input className="code-box" value={whatsappCode} readOnly />
                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="Enter WhatsApp Number"
                    required
                  />
                </div>
              </label>

              <label className="full-width">
                University / Institution / Organization *
                <input
                  type="text"
                  name="institution"
                  placeholder="e.g., ABC Institute of Technology"
                  required
                />
              </label>

              <label className="full-width">
                Department / Area of Study *
                <input
                  type="text"
                  name="department"
                  placeholder="e.g., Computer Science & Engineering"
                  required
                />
              </label>

              <label className="full-width">
                Designation (Optional)
                <input type="text" name="designation" placeholder="e.g., Assistant Professor" />
              </label>


              <label className="full-width">
                How many co-authors are participants
                <input
                  type="number"
                  min="0"
                  max="5"
                  placeholder="Maximum allowed: 5"
                  onChange={handleCoAuthorChange}
                />
              </label>

              {Array.from({ length: coAuthorCount }).map((_, i) => (
                <label key={i} className="full-width">
                  Co-Author Name {i + 1} *
                  <input
                    type="text"
                    name={`coauthor_${i + 1}`}
                    placeholder={`Enter Co-Author ${i + 1} details`}
                    required
                  />
                </label>
              ))}
            </div>
          </div>

          {/* ---------------- PAPER DETAILS ---------------- */}
          <div className="section">
            <h2 className="section-title">Paper Details</h2>

            <div className="two-col">
              <label className="full-width">
                Title of the Paper *
                <input
                  type="text"
                  name="paper_title"
                  placeholder="Enter your paper title"
                  required
                />
              </label>

              <label>
                Previous Publication Status *
                <select name="previous_publication" required>
                  <option value="">Select Yes / No</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>

              <label>
                Submission Type *
                <select name="submission_type" required>
                  <option value="">Select</option>
                  <option>Abstract Submission</option>
                  <option>Full Paper Submission</option>
                </select>
              </label>

              <label className="full-width">
                Upload Full Paper (doc / docx) *
                <input type="file" name="paper_file" accept=".doc,.docx" required />
              </label>

              <label>
                Interested in Keynote / Invited Talk?
                <select name="invited_talk">
                  <option value="">Select Yes / No</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
            </div>
          </div>

          {/* ---------------- CONFERENCE INFO ---------------- */}
          <div className="section">
            <h2 className="section-title">Conference Information</h2>

            <div className="two-col">
              <label>
                Conference Date *
                <select name="conference_date" required>
                  <option value="">Select Date</option>
                  <option>18th November 2025</option>
                  <option>5th December 2025</option>
                  <option>8th December 2025</option>
                </select>
              </label>

              <label>
                Conference Name *
                <select name="conference_name" required>
                  <option value="">Choose Conference Name</option>
                  <option>ICT-25</option>
                  <option>ICET-25</option>
                  <option>ICSET-25</option>
                </select>
              </label>

              <label className="full-width">
                Preferred Presentation Type *
                <select name="presentation_type" required>
                  <option value="">Select Mode</option>
                  <option>Oral Presentation</option>
                  <option>Poster Presentation</option>
                  <option>Video Presentation</option>
                  <option>Online Presentation</option>
                </select>
              </label>

              <label className="full-width">
                Additional Notes / Requests
                <textarea
                  name="notes"
                  placeholder="Any special request"
                  rows="2"
                />
              </label>
            </div>
          </div>

          {/* ---------------- SUBMIT ---------------- */}
          <div className="form-actions">
            <button type="submit" className="btn-submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit"}
            </button>
            <button type="reset" className="btn-reset">Clear</button>
          </div>

          {status && (
            <div className={`status ${status.ok ? "ok" : "err"}`}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
