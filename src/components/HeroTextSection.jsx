import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroTextSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroTextSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".title-line", {
      y: 120,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.15,
    });

    gsap.from(descRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.4,
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section className="hero-text-section" ref={sectionRef}>
      <div className="hero-text-container">
        <h1 ref={titleRef} className="hero-text-title">
  <span className="title-line title-center">
    Ideas Beyond Limits
  </span>
  <span className="title-line title-left">
    Crafted for Impact
  </span>
</h1>



        <p ref={descRef} className="hero-text-description">
          We are a creative digital studio focused on building immersive
          experiences that connect brands with people. From concept to
          execution, we blend design, motion, and technology to transform
          ideas into meaningful digital products that stand out and perform.
        </p>
      </div>
    </section>
  );
}
