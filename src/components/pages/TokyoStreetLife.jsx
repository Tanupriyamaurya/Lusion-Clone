import React from "react";
import { useNavigate } from "react-router-dom";
import cartoon from "../../assets/cartoon.jpg";
import "./ProjectDetail.css";

const TokyoStreetLife = () => {
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
          <img src={cartoon} alt="Tokyo Street Life" />
        </div>

        <div className="project-content">
          <h1>Tokyo Street Life</h1>
          <span className="category">Japan · Cartoon · Illustration</span>
          <p className="description">
            Tokyo Street Life is an illustration project capturing the vibrant
            life of Tokyo streets. Using cartoon-style graphics, it highlights
            the culture, fashion, and dynamic urban environment of Japan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TokyoStreetLife;
