import { useEffect, useRef, useState } from "react";
import WorkCard from "./WorkCard";
import { featuredWork } from "../data/data";
import "./FeaturedWork.css";

export default function FeaturedWork() {
  const headingRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="featured-work">
      <div className="featured-header">
        <h2
          ref={headingRef}
          className={`featured-title ${isVisible ? "visible" : ""}`}
        >
          <span className="brand">STUDIOX</span>
          Featured Work
        </h2>

        <div className={`featured-info ${isVisible ? "visible" : ""}`}>
          <p>
            A curated selection of immersive digital experiences crafted in
            collaboration with visionary brands and creative partners. STUDIOX transforms ideas into experiences
    that captivate, inspire, and drive results.
          </p>
        </div>
      </div>

      <div className="featured-grid">
        {featuredWork.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
