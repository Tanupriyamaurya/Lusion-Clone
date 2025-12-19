import WorkCard from "./WorkCard";
import { featuredWork } from "../data/data";
import "./FeaturedWork.css";

export default function FeaturedWork() {
  return (
    <section id="projects" className="featured-work">
      <div className="featured-header">
        <h2 className="featured-title">
          <span className="brand">STUDIOX</span>
          Featured Work
        </h2>

        <div className="featured-info">
          <p>
            A curated selection of immersive digital experiences crafted in
  collaboration with visionary brands and creative partners.

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
