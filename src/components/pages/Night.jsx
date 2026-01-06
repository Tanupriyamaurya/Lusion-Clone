import React from "react";
import { useNavigate } from "react-router-dom";
import night from "../../assets/night.jpg";
import "./ProjectDetail.css";

const Night = () => {
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
          <img src={night} alt="Neo Tokyo Nights" />
        </div>

        <div className="project-content">
          <h1>Neo Tokyo Nights</h1>
          <span className="category">Anime · Japan · Digital Art</span>
          <p className="description">
            Neo Tokyo Nights is a digital art project inspired by anime and
            cyberpunk aesthetics. It portrays neon-lit cityscapes and futuristic
            Japan, emphasizing mood, light, and atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Night;
