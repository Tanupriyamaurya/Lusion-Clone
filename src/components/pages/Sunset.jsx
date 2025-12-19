import React from "react";
import { useNavigate } from "react-router-dom";
import sunset from "../../assets/sunset.jpg";
import "./ProjectDetail.css";

const Sunset = () => {
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
        ← Back to Work
      </button>

      <div className="project-wrapper">
        <div className="project-image">
          <img src={sunset} alt="Samurai Spirit" />
        </div>

        <div className="project-content">
          <h1>Samurai Spirit</h1>
          <span className="category">Japan · Character Design · 3D</span>
          <p className="description">
            Samurai Spirit is a character design project centered on traditional
            Japanese warriors. Using 3D modeling, it brings samurai characters to
            life while blending historical authenticity with artistic creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sunset;
