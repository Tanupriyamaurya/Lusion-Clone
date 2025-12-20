import { useEffect, useRef, useState } from "react";
import "./UniqueCrafted.css";
import animation3 from "../../assets/animation3.mp4";

export default function UniqueCrafted() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="crafted-section">
      {/* HEADING */}
      <div className="crafted-heading">
        <h2 className={`crafted-title ${isVisible ? "visible" : ""}`}>
          Thoughtfully Designed <br />
          Digital Experiences <br />
          For Modern Brands
        </h2>
      </div>

      {/* VIDEO + TEXT GRID */}
      <div className="crafted-container">
        {/* VIDEO LEFT */}
        <div className={`crafted-media ${isVisible ? "visible" : ""}`}>
          <video src={animation3} autoPlay muted loop playsInline />
        </div>

        {/* TEXT RIGHT */}
        <div className={`crafted-content ${isVisible ? "visible" : ""}`}>
          <p>
            At StudioX, we believe meaningful digital experiences are never
            accidental. They are carefully designed through research,
            strategy, and a deep understanding of human behavior.
          </p>

          <p>
            Rather than following trends for the sake of relevance, we focus
            on creating work that feels intentional, timeless, and aligned
            with your brand’s identity and values.
          </p>

          <p>
            Every project begins with listening — understanding your
            audience, goals, and story — allowing us to design immersive,
            authentic, and emotionally engaging digital journeys.
          </p>
        </div>
      </div>
    </section>
  );
}
