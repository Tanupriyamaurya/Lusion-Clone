import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.css";
import App from "./App.jsx";

gsap.registerPlugin(ScrollTrigger);

// 🔑 GLOBAL SCROLLTRIGGER CONFIG
ScrollTrigger.config({
  ignoreMobileResize: true,
});

createRoot(document.getElementById("root")).render(
  <App />
);