import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";

import App from "./App.jsx";
import "./index.css";
import "./responsive.css";

// ✅ Initialize GA4
ReactGA.initialize("G-G8RT1VP59P"); // 👈 replace with your ID

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
