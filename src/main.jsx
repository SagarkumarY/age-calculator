import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AgeProvider } from "./context/AgeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AgeProvider>
      <App />
    </AgeProvider>
  </StrictMode>
);
