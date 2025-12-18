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

    gsap.fromTo(
      ".line-inner",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        immediateRender: false,
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section className="hero-text-section" ref={sectionRef}>
      <div className="hero-text-container">
        <h1 ref={titleRef} className="hero-text-title">
  <span className="title-line title-center">
    <span className="line-inner">Ideas Beyond Limits</span>
  </span>

  <span className="title-line title-left">
    <span className="line-inner">Crafted for Impact</span>
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