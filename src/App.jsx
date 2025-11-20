import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
