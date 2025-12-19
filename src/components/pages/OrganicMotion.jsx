import React from "react";
import { useNavigate } from "react-router-dom";
import aniimage2 from "../../assets/aniimage2.jpg";
import "./ProjectDetail.css";

const OrganicMotion = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projects");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section className="project-detail">
      <button onClick={handleBack} className="back-link">
        ← Back to Projects
      </button>

      <div className="project-wrapper">
        <div className="project-image">
          <img src={aniimage2} alt="Organic Motion" />
        </div>

        <div className="project-content">
          <h1>Organic Motion</h1>
          <span className="category">Concept · 3D Illustration · Video</span>
          <p className="description">
            Organic Motion is a creative project exploring fluid 3D forms and
            cinematic motion design. It blends organic animation with visual
            storytelling to create immersive and expressive experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganicMotion;
