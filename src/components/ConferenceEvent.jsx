// ConferenceEvent.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./ConferenceEvent.css";

import intelmeet from "../assets/intelmeet.jpeg";
import heroImg from "../assets/hero-environment.png";
import heroPattern from "../assets/hero-pattern.png";
import speakerWalida from "../assets/speaker-walida.png";
import speakerSuraj from "../assets/speaker-suraj.png";
import speakerMahmoud from "../assets/committee-mahmoud.png";
import Footer from "../components/Footer";
import QuickRegistration from "./QuickRegistration";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

// add these (adjust extension if any file is .png instead of .jpg)
import confMeet2 from "../assets/conf-meet-2.jpg";
import confMeet7 from "../assets/conf-meet-7.jpg";
import confMeet8 from "../assets/conf-meet-8.jpg";


const conferenceData = {
  1: {
    id: 1,
    title: "International Conference on Environmental & Life Sciences(ICELS-25)",
    shortTitle: "Environmental & Life Sciences",
    date: "19 December 2025",
    theme: "Advancing Environmental Innovation and Life Science Research for a Sustainable Future",
    location: "Virtual (Global Online Conference)",
    hero: heroImg,
    summary:
      "ICELS-25 connects researchers, academics, scientists, environmentalists and industry experts from across the globe to share innovations in environmental science, life sciences, biotechnology, climate action and sustainable solutions.",
    submissionDeadline: "15 December 2025",
    notificationDate: "22 December 2025",
    priceUSD: 140,
    currency: "USD",
  },
};

const glimpses = [
  { id: "g2", src: confMeet2, alt: "Conference glimpse 1" },
  { id: "g7", src: confMeet7, alt: "Conference glimpse 6" },
  { id: "g8", src: confMeet8, alt: "Conference glimpse 7" },
];

export default function ConferenceEvent() {
  const { id } = useParams();
  const conf = conferenceData[id] || conferenceData[1];

  const [activeId, setActiveId] = useState("home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // move ref to the panel (so click-outside works reliably)
  const mobilePanelRef = useRef(null);

  const anchors = [
    { id: "home", label: "Home", route: "/ICELS" },
    { id: "about", label: "About", route: "/about-event" },
    { id: "callforpaper", label: "Call for Papers", route: "/callforpaper" },
    { id: "papersubmission", label: "Paper Submission", route: "/papersubmissionevent" },
    { id: "speakers", label: "Speakers", route: "/speaker-event" },
    { id: "committee", label: "Committee", route: "/committee-event" },
    { id: "publications", label: "Publications", route: "/publications-event" },
    { id: "contact", label: "Contact", route: "/contact-event" },
  ];

  /* ---------- SEO: title, meta, canonical, JSON-LD ---------- */
  useEffect(() => {
    const title = `${conf.title} — ${conf.date} | IntelMeet Global Conferences`;
    document.title = title;

    const description = `${conf.summary} Submit abstracts by ${conf.submissionDeadline}. Join ICELS-25 (${conf.shortTitle}) — ${conf.date} — ${conf.location}.`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement("meta");
      metaKw.setAttribute("name", "keywords");
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute(
      "content",
      "ICELS-25, environment conference, life sciences, biodiversity, climate, IntelMeet, virtual conference"
    );

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", window.location.href.split("#")[0]);

    const eventLdId = `conf-event-jsonld-${conf.id}`;
    if (document.getElementById(eventLdId)) {
      document.getElementById(eventLdId).remove();
    }
    const eventLd = document.createElement("script");
    eventLd.type = "application/ld+json";
    eventLd.id = eventLdId;
    eventLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: conf.title,
      startDate: "2025-12-19T09:00:00+00:00",
      endDate: "2025-12-19T20:00:00+00:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      description: conf.summary,
      image: [conf.hero],
      location: {
        "@type": "VirtualLocation",
        url: window.location.href,
      },
      organizer: {
        "@type": "Organization",
        name: "IntelMeet Global Conferences",
        url: window.location.origin,
      },
      offers: {
        "@type": "Offer",
        url: `${window.location.origin}/registration-event`,
        price: conf.priceUSD,
        priceCurrency: conf.currency,
        availability: "https://schema.org/InStock",
      },
    });
    document.head.appendChild(eventLd);
  }, [conf]);

  /* Scrollspy (in-page sections) */
  useEffect(() => {
    const observerSections = Array.from(
      document.querySelectorAll(".conf-page main.conf-main section[id]")
    );
    function onScroll() {
      const offset = window.scrollY + 140;
      let current = "home";
      for (const sec of observerSections) {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        if (offset >= top) current = sec.id;
      }
      setActiveId(current);
      document.querySelectorAll(".conf-page .nav-links a[href^='#']").forEach((a) => {
        const href = a.getAttribute("href")?.replace("#", "");
        if (href === current) a.classList.add("conf-active-section");
        else a.classList.remove("conf-active-section");
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Smooth anchors & mobile close (only native anchors) */
  useEffect(() => {
    function handler(e) {
      const el = e.target.closest("a[href^='#']");
      if (!el) return;
      const href = el.getAttribute("href");
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileNavOpen(false);
    }
    const nav = document.querySelector(".conf-page .conf-navbar");
    if (nav) nav.addEventListener("click", handler);
    return () => nav && nav.removeEventListener("click", handler);
  }, []);

  /* Close mobile nav when clicking outside / ESC / resize */
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMobileNavOpen(false);
    }
    function onDocClick(e) {
      if (!mobileNavOpen) return;
      if (!mobilePanelRef.current) return;
      // if click is outside panel -> close
      if (!mobilePanelRef.current.contains(e.target)) {
        setMobileNavOpen(false);
      }
    }
    function onResize() {
      if (window.innerWidth > 900) setMobileNavOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileNavOpen]);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    if (mobileNavOpen) {
      const prev = { overflow: document.body.style.overflow, touchAction: document.body.style.touchAction };
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.classList.add("conf-mobile-open");
      return () => {
        document.body.style.overflow = prev.overflow || "";
        document.body.style.touchAction = prev.touchAction || "";
        document.documentElement.classList.remove("conf-mobile-open");
      };
    }
    // ensure removal if menu closed
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    document.documentElement.classList.remove("conf-mobile-open");
    return;
  }, [mobileNavOpen]);

  /* ---------- Image slider: refs, autoplay and pause on hover ---------- */
  const trackRef = useRef(null);
  const slideRef = useRef(0); // index of current slide (0..glimpses.length-1)
  const autoRef = useRef(null);

  // start autoplay
  useEffect(() => {
    // helper to move track
    function goTo(n) {
      const idx = n % glimpses.length;
      slideRef.current = idx;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${idx * 100}%)`;
      }
    }

    // advance slide
    function advance() {
      goTo(slideRef.current + 1);
    }

    // start interval
    autoRef.current = setInterval(advance, 4000);

    // ensure initial position
    goTo(0);

    // cleanup
    return () => {
      if (autoRef.current) {
        clearInterval(autoRef.current);
        autoRef.current = null;
      }
    };
  }, []); // run once on mount

  // pause / resume helpers used in the JSX event handlers below
  function pauseAutoplay() {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }
  function resumeAutoplay() {
    if (!autoRef.current) {
      autoRef.current = setInterval(() => {
        slideRef.current = (slideRef.current + 1) % glimpses.length;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${slideRef.current * 100}%)`;
        }
      }, 4000);
    }
  }

  return (
    <div className="conf-page page-container">
      <a href="#home" className="skip-link">Skip to content</a>

      {/* Top info bar */}
      <div className="conf-topbar" role="region" aria-label="Contact and registration">
        <div className="conf-contact-inline">
          <a href="mailto:support@intelmeetglobal.com">support@intelmeetglobal.com</a>
          <span className="conf-sep">|</span>
          <a href="tel:+919442417477" className="conf-phone-link">+91 9442417477</a>
        </div>

        {/* Socials inside the topbar flow — aligned to right on desktop, stacked on mobile */}
        <div className="conf-top-socials" aria-hidden={false}>
          <a href="https://www.facebook.com/IntelMeetGlobal/" target="_blank" rel="noreferrer" aria-label="IntelMeet on Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/intelmeetglobal/" target="_blank" rel="noreferrer" aria-label="IntelMeet on Instagram"><FaInstagram /></a>
          <a href="https://x.com/intelmeet" target="_blank" rel="noreferrer" aria-label="IntelMeet on X"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/intelmeet-global/" target="_blank" rel="noreferrer" aria-label="IntelMeet on LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@intelmeetglobal" target="_blank" rel="noreferrer" aria-label="IntelMeet on YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Navbar */}
      <header className="conf-navbar" role="banner">
        <div className="conf-nav-left">
          <img src={intelmeet} alt="IntelMeet Global Conferences logo" className="conf-logo" loading="lazy" />
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <ul>
            {anchors.map((a) => (
              <li key={a.id}>
                {a.route ? (
                  <Link
                    to={a.route}
                    className={activeId === a.id ? "conf-active-section" : ""}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {a.label}
                  </Link>
                ) : (
                  <a href={`#${a.id}`} className={activeId === a.id ? "conf-active-section" : ""}>
                    {a.label}
                  </a>
                )}
              </li>
            ))}
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
            <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true" focusable="false">
              <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1h18" />
                <path d="M1 8h18" />
                <path d="M1 15h18" />
              </g>
            </svg>
          </button>
        </div>
      </header>

      {/* ----------------- MOBILE PANEL (MOVED OUTSIDE HEADER) -----------------
          The panel is intentionally placed here (sibling of header/hero) so it is not
          trapped by header stacking contexts. ref is attached to the panel for
          reliable click-outside detection.
      --------------------------------------------------------------------- */}
      <div
        className={`conf-mobile-panel ${mobileNavOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        ref={mobilePanelRef}
      >
        <div className="conf-mobile-inner">
          <div className="conf-mobile-header">
            <div className="conf-mobile-brand">
              <img src={intelmeet} alt="IntelMeet" style={{ height: 34 }} />
              <strong className="conf-mobile-title">ICELS — {conf.date}</strong>
            </div>
            <button className="conf-mobile-close" onClick={() => setMobileNavOpen(false)} aria-label="Close menu">✕</button>
          </div>

          <ul className="conf-mobile-list">
            {anchors.map((a) => (
              <li key={a.id}>
                {a.route ? (
                  <Link to={a.route} onClick={() => setMobileNavOpen(false)} className={activeId === a.id ? "active" : ""}>
                    {a.label}
                  </Link>
                ) : (
                  <a href={`#${a.id}`} onClick={() => setMobileNavOpen(false)} className={activeId === a.id ? "active" : ""}>
                    {a.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="conf-mobile-quick">
            <h4>Important Dates</h4>
            <ul className="conf-mobile-dates">
              <li><strong>Submission deadline:</strong> {conf.submissionDeadline}</li>
              <li><strong>Notification:</strong> {conf.notificationDate}</li>
              <li><strong>Conference:</strong> {conf.date}</li>
            </ul>
          </div>

          <div style={{ marginTop: 18 }}>
            <QuickRegistration compact />
          </div>

          <div className="conf-mobile-cta">
            <Link to="/papersubmissionevent" className="conf-cta" onClick={() => setMobileNavOpen(false)}>Submit Paper</Link>
            <Link to="/registration-event" className="conf-cta outline" onClick={() => setMobileNavOpen(false)}>Register</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="conf-hero" style={{ backgroundImage: `url(${conf.hero})` }} aria-label="Conference hero">
        <div className="conf-hero-overlay" style={{ backgroundImage: `url(${heroPattern})` }} />
        <div className="conf-hero-content">
          <div className="conf-eyebrow">Trusted • Peer-reviewed • Global</div>
          <h1 className="conf-hero-title">{conf.title}</h1>
          <p className="conf-hero-theme">{conf.theme}</p>
          <div className="conf-hero-meta">
            <span className="conf-date">{conf.date}</span>
            <span className="conf-location"> • {conf.location}</span>
          </div>

          <div className="conf-hero-actions">
            <Link to="/papersubmissionevent" className="conf-cta large">Submit Abstract</Link>
            <Link to="/registration-event" className="conf-cta large">Register</Link>
          </div>
        </div>
      </section>

      {/* Main wrapper */}
      <div className="conf-wrapper">
        <main className="conf-main">
          {/* Brochure area */}
          <section id="brochure" className="conf-card brochure-card">
            <div className="brochure-title-block">
              <h2 className="brochure-main-title">About the Conference</h2>
              <div className="brochure-meta">
                <p>
                  The International Conference on Environmental & Life Sciences (ICELS-25) is a premier global virtual
                  conference designed to connect researchers, academicians, scientists, environmentalists, and industry
                  experts from more than 10+ countries.
                </p>
                <p>
                  This international event focuses on advancing innovative research across environmental science, life
                  sciences, biotechnology, ecology, climate change, biodiversity, agriculture, water science, and
                  sustainability studies.
                </p>
                <p>
                  ICELS-25 provides a highly interactive platform for presenting research, discussing scientific
                  challenges, and exploring emerging innovations that shape a sustainable global future.
                </p>
              </div>
            </div>

            {/* Conference Theme */}
            <div className="brochure-section">
              <h3>Conference Theme</h3>
              <p className="theme-quote">
                <em>"Advancing Environmental Innovation and Life Science Research for a Sustainable Future"</em>
              </p>
              <p>
                This theme reflects our commitment to supporting impactful research and fostering global scientific
                collaboration for real-world environmental and biological solutions.
              </p>
            </div>

            {/* SDGs */}
            <div className="brochure-section">
              <h3>Alignment with UN Sustainable Development Goals (SDGs)</h3>
              <p>ICELS-25 supports global scientific innovations aligned with key United Nations SDGs, including:</p>
              <ul className="sdg-list">
                <li>SDG 3 – Good Health & Well-Being</li>
                <li>SDG 4 – Quality Education</li>
                <li>SDG 6 – Clean Water & Sanitation</li>
                <li>SDG 7 – Affordable & Clean Energy</li>
                <li>SDG 9 – Industry, Innovation & Infrastructure</li>
                <li>SDG 12 – Responsible Consumption & Production</li>
                <li>SDG 13 – Climate Action</li>
                <li>SDG 14 – Life Below Water</li>
                <li>SDG 15 – Life on Land</li>
              </ul>
              <p className="brochure-note">ICELS-25 encourages research that contributes to sustainable development and real-world ecological impact.</p>
            </div>

            {/* Why Join */}
            <div className="brochure-section">
              <h3>Why Join ICELS-25?</h3>
              <p>Participants gain access to a global academic and research-driven environment. Key benefits include:</p>
              <ul className="benefits-list">
                <li>Present your research to an international audience</li>
                <li>Receive an officially recognized conference certificate (Presenter / Listener / Keynote / Committee Member)</li>
                <li>Publish your abstract in our digital conference proceedings</li>
                <li>Opportunity to join as a Presenter, Keynote Speaker, Committee Member, or Listener</li>
                <li>Interact with global experts during dedicated Q&A sessions</li>
                <li>Improve academic visibility and networking opportunities</li>
                <li>Ideal for academics, PhD scholars, researchers, industry professionals, and students</li>
              </ul>
            </div>

            {/* Who Can Participate */}
            <div className="brochure-section">
              <h3>Who Can Participate?</h3>
              <p>ICELS-25 welcomes participants from every domain connected to environmental and life sciences, including:</p>
              <ul className="participants-list two-column">
                <li>Researchers & Academicians</li>
                <li>University Professors</li>
                <li>PhD Scholars</li>
                <li>Environmentalists</li>
                <li>Biotechnologists</li>
                <li>Life Science Experts</li>
                <li>Climate & Sustainability Specialists</li>
                <li>Industry Professionals</li>
                <li>UG/PG Students</li>
                <li>Research Enthusiasts</li>
              </ul>
            </div>

            {/* Important Dates & Highlights in two-column blocks */}
            <div className="brochure-section grid-2">
              <div>
                <h3>Important Dates</h3>
                <ul className="dates-list">
                  <li><strong>Conference Date:</strong> 19th December 2025</li>
                  <li><strong>Abstract / Paper Submission Deadline:</strong> 15th December 2025</li>
                  <li><strong>Registration Closes:</strong> 17th December 2025</li>
                  <li><em>(Registration closes 2 days before the event as per IntelMeet policy.)</em></li>
                </ul>
              </div>
              <div>
                <h3>Conference Highlights</h3>
                <ul className="highlights-list">
                  <li>Expert-led keynote sessions</li>
                  <li>Research presentation opportunities</li>
                  <li>Interactive discussions & networking</li>
                  <li>Best Presentation Recognition</li>
                  <li>Participation from multiple international institutions</li>
                </ul>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="brochure-section">
              <h3>Topics Covered</h3>
              <p>ICELS-25 includes (but is not limited to) the following research domains:</p>

              <div className="topics-grid">
                <div>
                  <h4>Environmental Science</h4>
                  <ul className="topic-list">
                    <li>Climate Change & Adaptation</li>
                    <li>Environmental Pollution & Remediation</li>
                    <li>Sustainability & Renewable Energy</li>
                    <li>Ecology & Biodiversity</li>
                    <li>Waste Management Technologies</li>
                  </ul>
                </div>
                <div>
                  <h4>Life Sciences</h4>
                  <ul className="topic-list">
                    <li>Biotechnology & Molecular Biology</li>
                    <li>Genetics & Genomics</li>
                    <li>Microbiology & Bioprocessing</li>
                    <li>Environmental Biology</li>
                    <li>Agricultural & Plant Sciences</li>
                  </ul>
                </div>
              </div>

              <p className="brochure-note">Any research related to environment, sustainability, or life sciences is welcome.</p>
            </div>

            {/* Call for Abstracts & Registration Categories */}
            <div className="brochure-section grid-2">
              <div>
                <h3>Call for Abstracts</h3>
                <p>Researchers are invited to submit original work related to the conference domains. Accepted abstracts will be included in the ICELS-25 online proceedings (non-journal format).</p>
              </div>

              <div>
                <h3>Registration Categories</h3>
                <ul className="reg-list">
                  <li>Presenter</li>
                  <li>Keynote Speaker (<em>PhD scholars or professionals with 6+ years experience</em>)</li>
                  <li>Committee Member</li>
                  <li>Listener (Non-Presenter)</li>
                </ul>
              </div>
            </div>

            {/* Glimpses & Testimonials */}
            <div className="brochure-section">
              <h3>Recent Conference Glimpses</h3>

              <div
                className="glimpses-slider"
                onMouseEnter={() => { pauseAutoplay(); }}
                onMouseLeave={() => { resumeAutoplay(); }}
                aria-label="Recent conference images"
              >
                <div className="glimpses-viewport">
                  <div className="glimpses-track" role="list" ref={trackRef}>
                    {/* render first pass */}
                    {glimpses.map((g) => (
                      <figure key={g.id} className="glimpse" role="listitem" aria-hidden="false">
                        <img src={g.src} alt={g.alt} loading="lazy" />
                        <div className="glimpse-vignette" aria-hidden="true" />
                      </figure>
                    ))}

                    {/* render duplicate pass for seamless loop */}
                    {glimpses.map((g) => (
                      <figure key={g.id + "-dup"} className="glimpse" role="presentation" aria-hidden="true">
                        <img src={g.src} alt="" loading="lazy" />
                        <div className="glimpse-vignette" aria-hidden="true" />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>

              <h3>Testimonials</h3>

              <div className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="quote">“A highly professional conference with strong international participation. Excellent platform for young researchers.”</p>
                <p className="author">— Dr. Aaron Mitchell, USA</p>
              </div>

              <div className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="quote">“Well organized and globally diverse. The Q&A sessions added immense value.”</p>
                <p className="author">— Prof. Lina Rodriguez, Spain</p>
              </div>

              <div className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="quote">“Great opportunity to present my work and interact with experts from multiple countries.”</p>
                <p className="author">— Dr. N. Yusuf, UAE</p>
              </div>
            </div>

          </section>
        </main>

        {/* Sidebar */}
        <aside className="conf-sidebar" aria-label="Quick links & actions">
          <div className="conf-sidebar-card">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/benefits">Key Benefits of Participation</Link></li>
              <li><Link to="/apply-speaker">Apply Speaker</Link></li>
              <li><Link to="/instructions">Instructions for Participants</Link></li>
              <li><Link to="/papersubmission-guidelines">Author Guidelines</Link></li>
            </ul>
          </div>

          <div className="conf-sidebar-card conf-sidebar-quickreg">
            <h4>Quick Registration</h4>
            <p className="conf-quick-sub">Register quickly to receive updates & early-bird alerts.</p>
            <QuickRegistration />
          </div>

          <div className="conf-sidebar-card">
            <h4>Quick Actions</h4>
            <Link to="/papersubmissionevent" className="conf-sidebar-btn">Submit Paper</Link>
            <Link to="/registration-event" className="conf-sidebar-btn outline">Register</Link>
          </div>

          <div className="conf-sidebar-card">
            <h4>Important Dates</h4>
            <ul className="conf-dates">
              <li><strong>Submission deadline:</strong> {conf.submissionDeadline}</li>
              <li><strong>Notification of acceptance:</strong> {conf.notificationDate}</li>
              <li><strong>Registration deadline:</strong> 17 Dec 2025</li>
              <li><strong>Conference:</strong> {conf.date}</li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
