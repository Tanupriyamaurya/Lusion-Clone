import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import "./Header.css";

function Header({
  brandName = "LUSION",
  headlineText,
  ctaText,
  menuItems = [],
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const headerRef = useRef(null);
  const headlineRef = useRef(null);
  const talkBtnRef = useRef(null);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

  // Route mapping
  const routesMap = {
    HOME: "/",
    ABOUT: "/about",
    PROJECTS: "/projects",
    CONTACT: "/contact",
    LABS: "/labs",
  };

  /* -------------------------------
     Header entrance animation
  -------------------------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(headlineRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
        })
        .from(
          talkBtnRef.current,
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.6"
        )
        .from(
          menuBtnRef.current,
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.6"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* -------------------------------
     Menu open / close animation
     (NO pointer-events here)
  -------------------------------- */
  useEffect(() => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      opacity: menuOpen ? 1 : 0,
      y: menuOpen ? 0 : -10,
      duration: menuOpen ? 0.3 : 0.2,
      ease: menuOpen ? "power4.out" : "power4.in",
    });
  }, [menuOpen]);

  /* -------------------------------
     Close menu on route change
  -------------------------------- */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header" ref={headerRef}>
      {/* Brand */}
      <div className="header__brand">{brandName}</div>

      {/* Center headline */}
      <div className="header__center" ref={headlineRef}>
        {headlineText}
      </div>

      {/* Right controls */}
      <div className="header__right">
        <button ref={talkBtnRef} className="talk-btn">
          {ctaText}
        </button>

        <div className="menu-container" style={{ position: "relative" }}>
          <button
            ref={menuBtnRef}
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="menu-text">
              {menuOpen ? "CLOSE" : "MENU"}
            </span>

            <span className="menu-colon">
              <span />
              <span />
            </span>
          </button>

          <div
            ref={menuRef}
            className={`menu-overlay ${menuOpen ? "open" : ""}`}
          >
            {menuItems.map((item) => (
              <div
                key={item}
                className={`menu-item ${
                  location.pathname === routesMap[item] ? "active" : ""
                }`}
                onClick={() => {
                  navigate(routesMap[item]);
                  setMenuOpen(false);
                }}
              >
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
