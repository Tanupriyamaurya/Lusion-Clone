import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import night3 from "../../assets/night3.jpg";
import "./ProjectDetail.css";

const Night3 = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBack = () => {
    navigate("/"); // Go to homepage route
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
          <img src={night3} alt="Kawaii World" />
        </div>

        <div className="project-content">
          <h1>Kawaii World</h1>

          <span className="category">Cartoon · Japan · Illustration</span>

          <p className="description">
            Kawaii World is a colorful illustration project celebrating Japanese
            cute culture. It features charming characters, playful scenes, and
            whimsical environments that appeal to all ages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Night3;
