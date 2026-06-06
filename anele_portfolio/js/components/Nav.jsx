import { useEffect, useState } from "react";
import styles from "../../styles/home.module.css";

const NAV_LINKS = ["about", "skills", "projects", "timeline", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scroll = (id) => {
    document.body.style.overflow = "";
    setMenuOpen(false);
    setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, 350);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`}>
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
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineTop : ""}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineMid : ""}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineBot : ""}`} />
          </button>
        </div>
      </div>

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
    </nav>
  );
}