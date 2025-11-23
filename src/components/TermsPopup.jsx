import React from "react";
import "./TermsPopup.css";

export default function TermsPopup({ onClose }) {
  return (
    <div className="terms-overlay" onClick={onClose}>
      <div
        className="terms-popup"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        {/* TOP CLOSE BUTTON */}
        <button className="terms-close-btn" onClick={onClose}>
          ×
        </button>

        {/* CONTENT */}
        <div className="terms-content">
          <h2 className="terms-heading">
            Terms & Conditions – IntelMeet Global Conferences
          </h2>

          <p>
            These Terms and Conditions apply to all participants, authors, presenters,
            and attendees of IntelMeet Global Conferences. By registering, submitting
            any material, or attending the event, you agree to follow all guidelines
            listed below.
          </p>

          <hr />

          <h3>1. Registration and Communication</h3>
          <p>1A. All participants must provide accurate and complete details...</p>
          <p>1B. Participants are responsible for checking their email inbox...</p>
          <p>1C. Participants must join using the same name and email...</p>
          <p>1D. IntelMeet is not responsible for missed updates...</p>

          <hr />

          <h3>2. Participation and Presentation Requirements</h3>
          <p>2A. Stable internet connection required...</p>
          <p>2B. IntelMeet not responsible for technical issues...</p>
          <p>2C. Speakers should join 30 minutes early...</p>
          <p>2D. Recorded presentations allowed...</p>
          <p>2E. Presenters who do not join will not be included...</p>

          <hr />

          <h3>3. Submission and Review Process</h3>
          <p>3A. Submissions must be original...</p>
          <p>3B. Review for clarity & relevance...</p>
          <p>3C. Only registered authors are included...</p>
          <p>3D. Submitting author is considered primary...</p>

          <hr />

          <h3>4. Conference Communications & Materials</h3>
          <p>4A. Sessions may be recorded...</p>
          <p>4B. Permission for non-sensitive materials...</p>
          <p>4C. Materials stored in digital library...</p>

          <hr />

          <h3>5. Professional Conduct</h3>
          <p>5A. Respectful communication required...</p>
          <p>5B. Harassment may result in removal...</p>
          <p>5C. Must follow moderator instructions...</p>

          <hr />

          <h3>6. Technical & Platform Conditions</h3>
          <p>6A. IntelMeet may update meeting platform...</p>
          <p>6B. Not responsible for third-party issues...</p>
          <p>6C. Participants must use compatible devices...</p>

          <hr />

          <h3>7. Event Modifications</h3>
          <p>7A. Schedule may be changed...</p>
          <p>7B. Updates communicated via email...</p>
          <p>7C. No refunds for schedule changes...</p>

          <hr />

          <h3>8. Plagiarism Policy</h3>
          <p>8A. All submissions undergo originality check...</p>
          <p>8B. Non-original work returned...</p>
          <p>8C. Plagiarism may result in removal...</p>
          <p>8D. Minor duplication corrections allowed...</p>

          <hr />

          <h3>9. Refund Policy</h3>
          <p>9A. All virtual registrations are non-refundable...</p>
          <p>9B. Rescheduling allowed if approved...</p>
          <p>9C. Discounted registrations are not refundable...</p>

          <hr />

          <h3>10. General Liability</h3>
          <p>10A. IntelMeet not responsible for losses...</p>
          <p>10B. Responsibility limited to hosting...</p>

          <hr />

          <h3>11. Acceptance of Terms</h3>
          <p>
            By registering or submitting, you agree to all terms above.
          </p>
        </div>

        {/* BOTTOM CLOSE BUTTON */}
        <div className="terms-bottom-close-container">
          <button className="terms-bottom-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
