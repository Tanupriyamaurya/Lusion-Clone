// src/routes/routes.jsx

import DevinAI from "../components/pages/DevinAI.jsx";
import OrganicMotion from "../components/pages/OrganicMotion.jsx";
import TokyoStreetLife from "../components/pages/TokyoStreetLife.jsx";
import Sunset from "../components/pages/Sunset.jsx";
import Night from "../components/pages/Night.jsx";
import Night3 from "../components/pages/Night3.jsx";

import HomePage from "../components/pages/HomePage.jsx";
import AboutPage from "../components/pages/About.jsx";
import ProjectsPage from "../components/pages/Projects.jsx";
import ContactPage from "../components/pages/ContactUs.jsx";
import LabsPage from "../components/pages/LabsPage.jsx";

const routes = [
  { path: "/", element: <HomePage /> },

  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/labs", element: <LabsPage /> },
  { path: "/contact", element: <ContactPage /> },

  { path: "/projects/devin-ai", element: <DevinAI /> },
  { path: "/projects/organic-motion", element: <OrganicMotion /> },
  { path: "/projects/tokyo-street-life", element: <TokyoStreetLife /> },
  { path: "/projects/neo-tokyo-nights", element: <Night /> },
  { path: "/projects/samurai-spirit", element: <Sunset /> },
  { path: "/projects/kawaii-world", element: <Night3 /> },
];

export default routes;
