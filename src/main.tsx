import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";

import { initGA, trackPageView } from "./lib/analytics";

initGA();
trackPageView(window.location.pathname);

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);