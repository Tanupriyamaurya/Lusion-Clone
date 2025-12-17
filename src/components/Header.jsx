


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Header.css";

function Header({ brandName = "LUSION", headlineText, ctaText, menuItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const headlineRef = useRef(null);
  const talkBtnRef = useRef(null);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(headlineRef.current, { y: 60, opacity: 0, duration: 1 })
        .from(talkBtnRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.6")
        .from(menuBtnRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.6");
    }, headerRef);

    return () => ctx.revert();
  }, []);


  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.to(menuRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power4.out" });
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -10, duration: 0.2, ease: "power4.in" });
    }
  }, [menuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__brand">{brandName}</div>

      <div className="header__center" ref={headlineRef}>
        {headlineText}
      </div>

      <div className="header__right">
        <button ref={talkBtnRef} className="talk-btn">
          {ctaText}
        </button>

        <div className="menu-container" style={{ position: "relative" }}>
          <button
            ref={menuBtnRef}
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>

          <div
            ref={menuRef}
            className={`menu-overlay ${menuOpen ? "open" : ""}`}
  //           
          >
            {menuItems.map((item, i) => (
              <div key={i} className="menu-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
