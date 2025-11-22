import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Registration from "./components/Registration";
import PaperSubmission from "./components/PaperSubmission";
import Guidelines from "./components/Guidelines";
import Benefits from "./components/Benefits";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/papersubmission" element={<PaperSubmission />} />
        <Route path="/papersubmission-guidelines" element={<Guidelines />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
