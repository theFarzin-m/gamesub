import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.rtl.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstarp icons
import "bootstrap-icons/font/bootstrap-icons.css";
// AOS library
import "aos/dist/aos.css";
// My styles
import "./styles/globalStyles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
