import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import aniimage1 from "../../assets/aniimage1.jpg";
import "./ProjectDetail.css";

const DevinAI = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBack = () => {
    navigate("/"); // Go to homepage
    setTimeout(() => {
      const section = document.getElementById("projects"); // target section
      section?.scrollIntoView({ behavior: "smooth" }); // scroll smoothly
    }, 50); // small delay to ensure DOM is rendered
  };

  return (
    <section className="project-detail">
      <button onClick={handleBack} className="back-link">
        ← Back to Projects
      </button>

      <div className="project-wrapper">
        <div className="project-image">
          <img src={aniimage1} alt="Devin AI" />
        </div>

        <div className="project-content">
          <h1>Devin AI</h1>

          <span className="category">Development · 3D · AI</span>

          <p className="description">
            Devin AI is a cutting-edge development project that combines advanced
            artificial intelligence with immersive 3D visuals. The project
            focuses on intelligent automation, modern UI experiences, and
            high-performance web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevinAI;
