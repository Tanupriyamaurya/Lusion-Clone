import PageLayout from "../layout/PageLayout";
export default function About() {
  return (
    <PageLayout
      title="About StudioX"
      subtitle="Design-driven digital studio"
    >
      <section className="content-block">
        <p className="lead-text">
          StudioX is a creative digital studio crafting immersive,
          meaningful, and visually striking digital experiences.
        </p>

        <p>
          We believe great design is not just how something looks,
          but how it feels and functions. Our work blends strategy,
          creativity, motion, and modern technology.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h2>50+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-card">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h2>100%</h2>
          <p>Client Satisfaction</p>
        </div>
      </section>

      <section className="card-grid">
        <div className="info-card">
          <h3>Our Vision</h3>
          <p>
            To create digital experiences that inspire, engage,
            and elevate brands.
          </p>
        </div>
        <div className="info-card">
          <h3>Our Approach</h3>
          <p>
            User-first design, smooth motion, clean code,
            and attention to detail.
          </p>
        </div>
        <div className="info-card">
          <h3>Our Focus</h3>
          <p>
            Web applications, motion design, and creative campaigns.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
