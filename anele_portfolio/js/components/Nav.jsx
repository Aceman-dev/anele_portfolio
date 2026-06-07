import { useEffect, useRef, useState } from "react";
import styles from "../../styles/home.module.css";

const NAV_LINKS = ["about", "skills", "projects", "timeline", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      if (!menuOpenRef.current) {
        setVisible(currentY < lastY || currentY < 80);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((o) => {
      if (!o) setVisible(true);
      return !o;
    });
  };

  const scroll = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`}
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s, border-color 0.3s",
        }}
      >
        <div className={styles.navGlow} />
        <div className={styles.navInner}>
          <span className={styles.navLogo}>
            AN<span className={styles.navLogoDot}>.</span>
            <span className={styles.navLogoSuffix}>dev</span>
          </span>

          <div className={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <button key={l} onClick={() => scroll(l)} className={styles.navLink}>
                ./{l}
                <span className={styles.navUnderline} />
              </button>
            ))}
          </div>

          <div className={styles.navRight}>
            <a href="/Anele-Nqabeni-Resume.pdf.pdf" download className={styles.navCv}>
              <span className={styles.navCvArrow}>↓</span> cv
            </a>
            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineTop : ""}`} />
              <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineMid : ""}`} />
              <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineBot : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l} onClick={() => scroll(l)} className={styles.mobileMenuLink}>
            <span className={styles.mobileMenuAccent}>./</span>{l}
          </button>
        ))}
        <a href="/Anele-Nqabeni-Resume.pdf.pdf" download className={styles.mobileMenuCv}>
          <span className={styles.navCvArrow}>↓</span> download cv
        </a>
      </div>
    </>
  );
}