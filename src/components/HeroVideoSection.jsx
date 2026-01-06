import React from "react";
import "./HeroVideoSection.css";
import animation from "../assets/animation.mp4";

export default function HeroVideoSection() {
  return (
    <section className="hero-video-section">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={animation} type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1>We Create Stunning Digital Experiences</h1>
          <p>3D, UI, Web Animations & More</p>
        </div>
      </div>
    </section>
  );
}
