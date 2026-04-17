import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./context-engineering-guide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
