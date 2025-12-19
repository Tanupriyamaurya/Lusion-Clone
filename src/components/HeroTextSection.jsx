import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroTextSection.css";
import animation2 from "../assets/animation2.mp4"
gsap.registerPlugin(ScrollTrigger);

export default function HeroTextSection() {
  const sectionRef = useRef(null);
  const descRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const lines = sectionRef.current.querySelectorAll(".line-inner");

    // TEXT ANIMATION
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })
      .to(lines, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.18,
      })
      .to(
        descRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.45"
      );

    // ✅ VIDEO FULLSCREEN SCROLL ANIMATION
    gsap.to(videoWrapperRef.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".video-section",
        start: "top center",
        end: "+=100%",
        scrub: true,
         
      },
    });
  });


  return () => ctx.revert();
}, []);


  return (
    <>
      <section className="hero-text-section" ref={sectionRef}>
        <div className="hero-text-container">
          <h1 className="hero-text-title">
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

      <section className="video-section">
  <div className="video-container">
    <div className="video-wrapper" ref={videoWrapperRef}>
  <video
    src={animation2}
    autoPlay
    muted
    loop
    playsInline
    className="video-player"
  />
</div>

  </div>
</section>



    </>
  );
}
