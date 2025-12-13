// src/components/TermsPopup.jsx
import React from "react";
import "./TermsPopup.css";

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

export default function TermsPopup({ onClose }) {
  return (
    <div className="terms-overlay" onClick={onClose}>
      <div
        className="terms-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="terms-close-btn" onClick={onClose}>×</button>

        <div className="terms-content">
          <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
            {TERMS_TEXT}
          </pre>
        </div>

        <div className="terms-bottom-close-container">
          <button className="terms-bottom-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
