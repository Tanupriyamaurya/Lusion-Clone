import PageLayout from "../layout/PageLayout";
export default function Projects() {
  return (
    <PageLayout
      title="Our Projects"
      subtitle="Selected works that define our craft"
    >
      <section className="content-block">
        <p className="lead-text">
          Each project at StudioX is built with a balance of creativity,
          usability, and performance.
        </p>
      </section>

      <section className="card-grid">
        <div className="project-card">
          <h3>Creative Website</h3>
          <p>
            A visually rich, motion-driven website focused on storytelling
            and user engagement.
          </p>
        </div>

        <div className="project-card">
          <h3>Web Application</h3>
          <p>
            A scalable, high-performance web app built with modern
            frontend technologies.
          </p>
        </div>

        <div className="project-card">
          <h3>Brand Campaign</h3>
          <p>
            A digital campaign combining design, animation, and
            interactive experiences.
          </p>
        </div>

        <div className="project-card">
          <h3>Portfolio Experience</h3>
          <p>
            A clean and modern portfolio with smooth transitions
            and micro-interactions.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
