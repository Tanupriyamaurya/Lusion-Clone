import PageLayout from "../layout/PageLayout";

export default function Contact() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Let’s build something meaningful together"
    >
      <section className="content-block">
        <p className="lead-text">
          Have a project in mind or just want to say hello?
          We’d love to hear from you.
        </p>

        <p>
          Whether you’re a startup, brand, or creator,
          StudioX is ready to collaborate and bring ideas to life.
        </p>
      </section>

      <section className="contact-grid">
        <div className="info-card">
          <h3>Email</h3>
          <p>hello@studiox.com</p>
        </div>

        <div className="info-card">
          <h3>Phone</h3>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="info-card">
          <h3>Location</h3>
          <p>India (Working Worldwide)</p>
        </div>
      </section>

      <div className="cta-center">
        <button className="primary-btn">Start a Project</button>
      </div>
    </PageLayout>
  );
}
