import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./PageLayout.css";

export default function PageLayout({ title, subtitle, children }) {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="page-layout" ref={pageRef}>
      <header className="page-header">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </header>

      <div className="page-content">{children}</div>
    </section>
  );
}
