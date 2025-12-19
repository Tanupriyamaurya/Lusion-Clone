// routes.js
import DevinAI from "../components/pages/DevinAI.jsx";
import OrganicMotion from "../components/pages/OrganicMotion.jsx";
import TokyoStreetLife from "../components/pages/TokyoStreetLife.jsx";
import Sunset from "../components/pages/Sunset.jsx";
import Night from "../components/pages/Night.jsx";
import Night3 from "../components/pages/Night3.jsx"
import HomePage from "../components/pages/HomePage.jsx";

const routes = [
      { path: "/", element: <HomePage /> },

  
  {
    path: "/projects/devin-ai",
    element: <DevinAI />,
  },
  {
    path: "/projects/organic-motion",
    element: <OrganicMotion />,
  },
  {
    path: "/projects/tokyo-street-life",
    element: <TokyoStreetLife />,
  },
  {
    path: "/projects/neo-tokyo-nights",
    element: <Night />,
  },
  {
    path: "/projects/samurai-spirit",
    element: <Sunset />,
  },
  {
    path: "/projects/kawaii-world",
    element: <Night3 />,
  },
];

export default routes;
