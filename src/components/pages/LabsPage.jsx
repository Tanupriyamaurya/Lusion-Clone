import "./LabsPage.css";

const LabsPage = () => {
  return (
    <section className="labs page">
      {/* HERO */}
      <div className="labs-hero">
        <h1>Studio X Labs</h1>
        <p>
          A playground for experiments, concepts, and creative explorations.
          Where ideas evolve before they become products.
        </p>
      </div>

      {/* LAB ITEMS */}
      <div className="labs-grid">
        <div className="labs-card">
          <span className="labs-tag">EXPERIMENT</span>
          <h2>Interactive Motion Systems</h2>
          <p>
            Real-time animations driven by user input, scroll behavior, and
            physics-based motion.
          </p>
        </div>

        <div className="labs-card">
          <span className="labs-tag">CONCEPT</span>
          <h2>Generative Visuals</h2>
          <p>
            Algorithmic art and procedural visuals built with WebGL, Canvas,
            and creative coding techniques.
          </p>
        </div>

        <div className="labs-card">
          <span className="labs-tag">R&D</span>
          <h2>AI-Driven Experiences</h2>
          <p>
            Exploring machine intelligence in storytelling, design automation,
            and adaptive user interfaces.
          </p>
        </div>

        <div className="labs-card">
          <span className="labs-tag">PROTOTYPE</span>
          <h2>Immersive Interfaces</h2>
          <p>
            Experimental UI patterns inspired by gaming, spatial computing,
            and cinematic interactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LabsPage;
