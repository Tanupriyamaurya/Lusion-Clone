import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        
        {/* Left column */}
        <div className="footer-col">
          <h3 className="logo">STUDIOX</h3>
          <p>Creative Digital Studio</p>
          <p>Bristol, BS1 4AA</p>
          <p>United Kingdom</p>
        </div>

        {/* Middle column */}
        <div className="footer-col">
          <ul className="links">
            <li>X (Twitter)</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>

          <div className="emails">
            <p>General Enquiries</p>
            <a href="mailto:hello@studiox.co">hello@studiox.co</a>

            <p className="mt">New Business</p>
            <a href="mailto:business@studiox.co">business@studiox.co</a>
          </div>
        </div>

        {/* Right column */}
        <div className="footer-col newsletter">
          <h2>
  Design insights.<br />
  Delivered monthly.
</h2>

<p className="newsletter-desc">
  No spam. Only thoughtful updates on design, motion, and technology.
</p>

          <div className="input-box">
            <input type="email" placeholder="Your email" />
            <button>→</button>
          </div>
        </div>

      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <span>© 2025 STUDIOX Creative Studio</span>
        <span>R&D · labs.studiox.co</span>
        <span>Designed & built with care</span>
      </div>
    </footer>
  );
}
