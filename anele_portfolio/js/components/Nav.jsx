import { useEffect, useState } from "react";
import styles from "../../styles/home.module.css";

const NAV_LINKS = ["about", "skills", "projects", "timeline", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
        <a href="/Anele-Nqabeni-Resume.pdf.pdf" download className={styles.navCv}>
          <span className={styles.navCvArrow}>↓</span> cv
        </a>
      </div>
    </nav>
  );
}