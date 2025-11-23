import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Login from "./components/Login";
import About from "./components/About";
import Registration from "./components/Registration";
import PaperSubmission from "./components/PaperSubmission";
import Guidelines from "./components/Guidelines";
import Benefits from "./components/Benefits";
import UpcomingConferences from "./components/UpcomingConferences.jsx";
import ContactUs from "./components/ContactUs";
import ApplySpeaker from "./components/ApplySpeaker";
import FAQ from "./components/FAQ";
import ParticipantsInstructions from "./components/ParticipantsInstructions";
import CommitteeApplication from "./components/CommitteeApplication";
import Publications from "./components/Publications";
import Committee from "./components/Committee";
import Speaker from "./components/Speaker.jsx";
import RegistrationAndFees from "./components/RegistrationAndFees";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />   {/* <-- FIX: Scroll to top after every route change */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/papersubmission" element={<PaperSubmission />} />
        <Route path="/papersubmission-guidelines" element={<Guidelines />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/upcoming-conferences" element={<UpcomingConferences />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/apply-speaker" element={<ApplySpeaker />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/instructions" element={<ParticipantsInstructions />} />
        <Route path="/committee-application" element={<CommitteeApplication />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/registration-fees" element={<RegistrationAndFees />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
