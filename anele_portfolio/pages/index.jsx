import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/home.module.css";

import Nav from "../js/components/Nav";
import Ticker from "../js/components/Ticker";
import Typewriter from "../js/components/Typewriter";
import SkillBar from "../js/components/SkillBar";
import ProjectCard from "../js/components/ProjectCard";
import RepoCard from "../js/components/RepoCard";
import EkasiCard from "../js/components/EkasiCard";

import {
  SKILLS,
  TICKER_TAGS,
  PROJECTS,
  TIMELINE,
  TERMINAL_LINES,
  CONTACT_ITEMS,
  STATS,
  CONFIG_ROWS,
  USERNAME,
} from "../js/data";

export default function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch("api/github");
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!ignore && Array.isArray(data)) setRepos(data.filter((r) => !r.fork));
      } catch {
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Nav />

      <section className={styles.heroGrid}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className={styles.heroMobileGrid}
          >
            <div>
              <div className={styles.mobilePhotoRow}>
                <div style={{ flex: 1, margin: 0, padding: 0 }}>
                  <h1 className={`${styles.heroHeading} ${styles.glowText}`} style={{ margin: 0, padding: 0 }}>
                    <span className={styles.hiLabel}>Hi, I'm</span>
                    <span className={styles.heroNameOffset}>ANELE</span><br /><span className={styles.textSky}>NQABENI</span>
                  </h1>
                </div>
                <div
                  className={styles.mobilePhotoRing}
                  style={{ width: isMobile ? "120px" : "160px", height: isMobile ? "120px" : "160px" }}
                >
                  <img src="/anele.jpeg" alt="Anele Nqabeni" className={styles.heroPhoto} />
                </div>
              </div>

              {!isMobile && (
                <div className={styles.desktopHeading} style={{ margin: 0, padding: 0 }}>
                  <h1 className={`${styles.heroHeading} ${styles.glowText}`} style={{ margin: 0, padding: 0 }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300, color: "#ffffff", letterSpacing: "0.05em", display: "block", marginBottom: "16px", textTransform: "none" }}>
                      Hi, I'm
                    </span>
                    <span className={styles.heroNameOffset}>ANELE</span><br /><span className={styles.textSky}>NQABENI</span>
                  </h1>
                </div>
              )}

              <div className={styles.mobileRole}>
                <span className={styles.roleAmpersand}>&amp;</span>
                <div>
                  <span className={styles.roleLabel}>I'm a</span>
                  <span className={styles.roleTitle}>
                    <span className={styles.roleTitleWhite}>FULL STACK </span>
                    <span className={styles.roleTitleBlue}>SOFTWARE ENGINEER</span>
                  </span>
                </div>
              </div>

              <div className={styles.heroDivider} />

              <div className={styles.heroBio}>
                <p className={styles.heroBioText}>
                  South Africa has millions of skilled artisans with no digital presence.{" "}
                  <span className={styles.heroBioHighlight}>I'm helping fix that</span>{" "}
                  as a Junior Developer Intern at{" "}
                  <span className={styles.heroBioHighlight}>Zaio Institute of Technology</span>,
                  {" "}building full stack solutions daily for the{" "}
                  <span className={styles.heroBioAccent}>iKhono Africa</span>
                  {" "}small business startup web & mobile applications and contributing to platforms that mitigates real world impact.
                </p>
              </div>

              <div className={styles.mobileTerminalFull}>
                <div className={styles.terminalHeader}>
                  <span className={styles.terminalDot} style={{ background: "#ff5f57" }} />
                  <span className={styles.terminalDot} style={{ background: "#febc2e" }} />
                  <span className={styles.terminalDot} style={{ background: "#28c840" }} />
                  <span className={styles.terminalTitle}>anele@ikhono.africa ~ zsh</span>
                </div>
                <div className={styles.terminalBody}>
                  <Typewriter lines={TERMINAL_LINES} speed={36} />
                </div>
              </div>

              <div className={styles.ctaButtons}>
                <motion.button
                  className={styles.ctaPrimary}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  ./view work
                </motion.button>
                <motion.a
                  href="/Anele-Nqabeni-Resume.pdf.pdf"
                  download
                  className={styles.ctaSecondary}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className={styles.ctaArrow}>↓</span> download cv
                </motion.a>
              </div>

              <div className={styles.statsRow}>
                {STATS.map(([val, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <p className={styles.statValue}>{val}</p>
                    <p className={styles.statLabel}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className={styles.heroImageWrap}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.3 }}
            >
              <div className={styles.heroPhotoRing}>
                <img src="/anele.jpeg" alt="Anele Nqabeni" className={styles.heroPhoto} />
              </div>
              <div className={styles.terminalBlock}>
                <div className={styles.terminalHeader}>
                  <span className={styles.terminalDot} style={{ background: "#ff5f57" }} />
                  <span className={styles.terminalDot} style={{ background: "#febc2e" }} />
                  <span className={styles.terminalDot} style={{ background: "#28c840" }} />
                  <span className={styles.terminalTitle}>anele@ikhono.africa ~ zsh</span>
                </div>
                <div className={styles.terminalBody}>
                  <Typewriter lines={TERMINAL_LINES} speed={36} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Ticker />

      <section id="about" className={styles.aboutSection}>
        <div style={{ marginBottom: "48px" }}>
          <p className={styles.sectionBreadcrumb}>
            ~/portfolio <span className={styles.sectionBreadcrumbDim}>on</span>{" "}
            <span className={styles.sectionBreadcrumbPurple}>main</span>
          </p>
          <p className={styles.sectionCommand}>
            <span className={styles.sectionCommandAccent}>$</span> cat about.md
          </p>
          <h2 className={styles.sectionHeading}>About Me</h2>
          <div className={styles.sectionDivider} />
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutTextCol}>
            <p className={styles.aboutPara}>
              I'm <span className={styles.aboutParaAccent}>Anele Nqabeni</span>, a Junior Developer Intern at{" "}
              <span className={styles.aboutParaHighlight}>Zaio Institute of Technology</span>, where I have deployed full stack solutions for{" "}
              <span className={styles.aboutParaHighlight}>iKhono Africa</span> a small business startup based in Durban which helps digitise South Africa's artisan economy, working remotely from Cape Town. I also contributed to the frontend development of the <span className={styles.aboutParaHighlight}>TEDxDurban</span> website, implementing UI enhancements and improving the overall user experience. I'm still early in my career, but I have made every opportunity count.
            </p>
            <p className={styles.aboutPara}>
              Day to day I work across the full stack at iKhono Africa: building PHP RESTful APIs/MySQL backend integrations, and JavaScript frontend features that power real world services. I am also architecting the{" "}
              <span className={styles.aboutParaHighlight}>iKhono Mobile</span> application using React Native (Expo), Supabase, and Node.js bringing the platform to mobile users. Alongside this, I build full stack solutions for Metrolink as a personal startup project. Previously, I interned at{" "}
              <span className={styles.aboutParaHighlight}>Plum Systems</span> contributing to two live commercial property platforms.
            </p>
            <p className={styles.aboutPara}>
              I hold an <span className={styles.aboutParaWhite}>Advanced Diploma in ICT in Applications Development</span> from <span className={styles.aboutParaWhite}>CPUT</span>. My drive is simple: write clean code, collaborate well, and keep improving.
            </p>
          </div>
          <div className={styles.configCard}>
            <p className={styles.configComment}>{"// anele.config.json"}</p>
            {CONFIG_ROWS.map(([k, v]) => (
              <div key={k} className={styles.configRow}>
                <span className={styles.configKey}>{k}</span>
                <span className={styles.configColon}>:</span>
                <span className={styles.configValue}>{v}</span>
                <span className={styles.configComma}>,</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={styles.skillsSection}>
        <div className={styles.skillsInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionHeaderLabel}>02 — Skills</span>
            <div className={styles.sectionHeaderLine} />
            <span className={styles.sectionHeaderTitle}>TECH STACK</span>
          </div>
          <div className={styles.skillsGrid}>
            {SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className={styles.tagsWrap}>
            {TICKER_TAGS.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.sectionHeader} style={{ marginBottom: "64px" }}>
          <span className={styles.sectionHeaderLabel}>03 — Projects</span>
          <div className={styles.sectionHeaderLine} />
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
        <div style={{ marginTop: "72px" }}>
          <p className={styles.repoSectionLabel}>Personal and Open Source Repos</p>
          {loading ? (
            <p className={styles.reposLoading}>fetching repos...</p>
          ) : (
            <motion.div
              className={styles.reposGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
            >
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <EkasiCard />
              </motion.div>
              {repos.map((r) => (
                <motion.div key={r.id} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  <RepoCard r={r} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section id="timeline" className={styles.timelineSection}>
        <div className={styles.timelineInner}>
          <div style={{ marginBottom: "64px" }}>
            <p className={styles.sectionBreadcrumb} style={{ marginBottom: "16px" }}>04 — Timeline</p>
            <h2 className={styles.sectionHeading}>Experience & Education</h2>
            <div className={styles.sectionDivider} style={{ marginTop: "12px" }} />
          </div>
          <div className={styles.timelineList}>
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className={`${styles.timelineDot} ${item.type === "work" ? styles.timelineDotWork : styles.timelineDotEdu}`} />
                <span className={styles.timelinePeriod}>{item.period}</span>
                <h3 className={styles.timelineRole}>{item.role}</h3>
                <p className={styles.timelineOrg}>{item.org} · {item.location}</p>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.sectionHeader} style={{ marginBottom: "48px" }}>
          <span className={styles.sectionHeaderLabel}>05 — Contact</span>
          <div className={styles.sectionHeaderLine} />
        </div>
        <motion.h2
          className={styles.contactHeading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className={styles.sectionDivider} style={{ marginBottom: "32px" }} />
        <p className={styles.contactBio}>
          I'm open to new opportunities, collaborations, or just a good conversation about tech. Reach out and I'll respond fast.
        </p>
        <div className={styles.contactGrid}>
          {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={styles.contactCard}
            >
              <span className={styles.contactIcon}>{icon}</span>
              <div>
                <p className={styles.contactLabel}>{label}</p>
                <p className={styles.contactValue}>{value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerText}>
            © {new Date().getFullYear()} Anele Nqabeni · Cape Town, South Africa
          </span>
          <span className={styles.footerTextRight}>
            · Deployed by Anele Nqabeni
          </span>
        </div>
      </footer>

      <button
        className={`${styles.backToTop} ${!showBackToTop ? styles.backToTopHidden : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}