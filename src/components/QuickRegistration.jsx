// QuickRegistration.jsx
import React, { useState } from "react";
import "./QuickRegistration.css";
import { Link } from "react-router-dom";

/*
  QuickRegistration props:
    - compact (bool) -> renders a tighter UI for mobile panel
*/

const WEB3_ACCESS_KEY = "8d624c81-2acd-4ea9-b098-9f94d580d95e"; // replace if needed

export default function QuickRegistration({ compact = false }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: '' }

  async function submitForm(e) {
    e && e.preventDefault();
    setStatus(null);

    // basic validation
    if (!name.trim() || !email.trim()) {
      setStatus({ type: "error", message: "Please enter name & email." });
      return;
    }
    setBusy(true);

    try {
      const payload = {
        access_key: WEB3_ACCESS_KEY,
        name: name.trim(),
        email: email.trim(),
        // optional: add meta to help you track this source (page)
        subject: "Quick registration - ICES",
        redirect: "", // not using redirect, we'll show inline messages
      };

      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json();
      if (data.success || resp.ok) {
        setStatus({ type: "success", message: "Thanks — you’re registered for updates." });
        setName("");
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.message || "Submission failed — try again later." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error — please try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={`conf-quickreg ${compact ? "compact" : ""}`} aria-live="polite">
      <div className="qr-header">
        <div className="qr-badge">IQ</div>
        <div>
          <div className="qr-title">Quick Registration</div>
          <div style={{ fontSize: 12, color: "#2f5a50", marginTop: 4 }}>Name & email only — 10s to complete</div>
        </div>
      </div>

      <form onSubmit={submitForm} className="qr-form" aria-label="Quick registration form">
        <input
          name="name"
          type="text"
          placeholder="Full name"
          aria-label="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={busy}
          autoComplete="name"
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={busy}
          autoComplete="email"
        />

        <div className="qr-actions">
          <button
            type="submit"
            className="qr-btn"
            disabled={busy}
            aria-disabled={busy}
          >
            {busy ? "Sending..." : "Reserve Spot"}
          </button>

          <Link to="/registration-event" className="qr-ghost" title="Full registration">
            Full registration
          </Link>
        </div>
      </form>

      {status && (
        <div className={`qr-status ${status.type === "success" ? "qr-success" : "qr-error"}`} role="status">
          {status.message}
        </div>
      )}

      <div className="qr-note">
        We respect your privacy — we will only use this to send conference updates. You can unsubscribe anytime.
      </div>
    </div>
  );
}
