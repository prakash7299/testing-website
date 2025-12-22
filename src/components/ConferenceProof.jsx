// src/components/ConferenceProof.jsx
import React from "react";
import "./ConferenceProof.css";

import img1 from "../assets/conference-proof/session-industry-comparison.jpg";
import img2 from "../assets/conference-proof/keynote-icset-2025.jpg";
import img3 from "../assets/conference-proof/presenter-green-corrosion.jpg";
import img4 from "../assets/conference-proof/international-participants-grid.jpg";
import img5 from "../assets/conference-proof/technology-commercialization-session.jpg";
import img6 from "../assets/conference-proof/sustainable-industrialization-session.jpg";

export default function ConferenceProof() {
  const gallery = [
    {
      img: img1,
      alt: "Live academic presentation at ICELS conference on industrial development",
      caption:
        "Live academic presentation delivered during ICELS international conference with global participants attending via Zoom.",
    },
    {
      img: img2,
      alt: "International keynote speaker session at ICSET 2025",
      caption:
        "International keynote session conducted live at ICSET-2025, organized by IntelMeet Global Conferences.",
    },
    {
      img: img3,
      alt: "Research presentation on green corrosion inhibition at ICELS",
      caption:
        "Research presentation on green corrosion inhibition of concrete reinforcements presented live by an international speaker.",
    },
    {
      img: img4,
      alt: "Global participants attending ICELS conference via Zoom",
      caption:
        "Live Zoom view showing international researchers, keynote speakers, and participants attending ICELS sessions.",
    },
    {
      img: img5,
      alt: "Technology commercialization session at ICELS conference",
      caption:
        "Expert talk on technology commercialization and sustainable innovation delivered during ICELS conference.",
    },
    {
      img: img6,
      alt: "Sustainable industrialization session at ICELS conference",
      caption:
        "Live academic session on sustainable industrialization and development presented by an international speaker.",
    },
  ];

  return (
    <section className="conf-proof-section">
      <div className="conf-wrapper">
        <div className="conf-card conf-proof-card-wrapper">
          <header className="conf-proof-header">
            <h2>ICELS Conferences in Action</h2>
            <p>
              Authentic screenshots from <strong>live international conferences</strong> conducted
              by IntelMeet Global Conferences with verified speakers and participants.
            </p>
          </header>

          <div className="conf-proof-grid">
            {gallery.map((item, idx) => (
              <figure key={idx} className="conf-proof-item">
                <img src={item.img} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>

          <p className="conf-proof-footer">
            All sessions are conducted <strong>live via Zoom</strong>. Participation certificates
            are issued only after verified attendance and presentation.
          </p>
        </div>
      </div>
    </section>
  );
}
