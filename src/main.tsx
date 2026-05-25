import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";

import { initGA, trackPageView } from "./lib/analytics";
import { initClarity } from "./lib/clarity";

initGA();
trackPageView(window.location.pathname);

initClarity();

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);