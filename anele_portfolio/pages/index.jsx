import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useAnimationFrame } from "framer-motion";
import styles from "../styles/home.module.css";

const USERNAME = "Aceman-dev";

const SKILLS = [
  { name: "HTML / CSS", level: 93 },
  { name: "JavaScript", level: 88 },
  { name: "PHP / REST APIs / MySQL", level: 85 },
  { name: "SQL", level: 82 },
  { name: "React / React Native", level: 80 },
  { name: "C# / .NET 9 / PostgreSQL", level: 78 },
  { name: "Java / Spring Boot / REST APIs", level: 80 },
  { name: "Python", level: 70 },
];

const TICKER_TAGS = [
  "React", "PHP", "PostgreSQL", "JavaScript", "C# .NET 9", "React Native",
  "Expo", "Railway", "Zustand", "Axios", "SignalR", "REST APIs", "Git", "GitLab", "FileZilla",
  "Bootstrap", "Joomla", "KonsoleH", "Apache", "MySQL", "Java", "Spring Boot", "Python",
  "HTML5", "CSS3", "VS Code", "Tailwind", "Node.js",
];

const PROJECTS = [
  {
    name: "API Property",
    index: "01",
    tech: ["React", "Joomla", "JavaScript", "Bootstrap", "MySQL", "GitLab"],
    period: "Jul 2024 – Jul 2025",
    badge: "PRODUCTION",
    desc: "Commercial and industrial property management platform at Plum Systems. Frontend features, UI consistency, responsive design, and GitLab based deployment pipeline.",
    link: null,
  },
  {
    name: "Officeplace",
    index: "02",
    tech: ["React", "Node.js", "MySQL", "GitLab"],
    period: "Jul 2024 – Jul 2025",
    badge: "PRODUCTION",
    desc: "Office space management platform at Plum Systems. Contributed to data migration, backend integration, and ongoing live production support.",
    link: null,
  },
  {
    name: "iKhono Africa",
    index: "03",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "REST APIs"],
    period: "Jan 2026 – Present",
    badge: "LIVE",
    desc: "South African home services platform connecting artisans and clients, formalising the minor building works sector. Full platform: service discovery, booking flow, professional profiles, client and admin dashboards, and secure backend endpoints.",
    link: "https://ikhono.africa",
  },
  {
    name: "Metrolink",
    index: "04",
    tech: ["C# .NET 9", "PostgreSQL", "React Native", "Expo", "Railway", "Zustand", "Axios", "SignalR", "REST APIs"],
    period: "Jan 2026 – Present",
    badge: "STARTUP",
    desc: "A Cape Town transit intelligence platform unifying MyCiTi, Metrorail, and Golden Arrow schedules with crowdsourced delay reporting - built on demo APIs as early development, with live agency integration on the roadmap.",
    link: null,
  },
  {
    name: "TESS7 LLC",
    index: "05",
    tech: ["React", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "REST APIs"],
    period: "May 2026 – Present",
    badge: "CONTRIBUTION",
    desc: "Recruiting and staffing agency website. Delivered dashboards for employers to advertise jobs, professionals to upload resumes, and subscribers to manage job loss packages. Also polished UI aesthetics and integrated database connections.",
    link: "https://tess7llc.com",
  },
];

const TIMELINE = [
  {
    period: "Jan 2026 – Present",
    role: "Junior Developer Intern (Full Stack)",
    org: "iKhono Africa",
    location: "Durban, South Africa · Remote",
    type: "work",
    desc: "Employed by Zaio Institute of Technology as a Junior Developer Intern, deployed full stack solutions for the iKhono Africa startup. Building client and professional(s) dashboards, booking systems, and backend integrations for a platform formalising South Africa's artisan services sector.",
  },
  {
    period: "Jan 2026 – Present",
    role: "Full Stack Developer",
    org: "Metrolink",
    location: "Cape Town · Startup · Remote · Continuous Development",
    type: "work",
    desc: "Actively contributing to the Metrolink startup. Building and optimising backend APIs using C# .NET 9 on Railway, while integrating with a React Native (Expo) mobile frontend.",
  },
  {
    period: "Jan 2025 – Dec 2025",
    role: "Advanced Diploma — ICT in Applications Development",
    org: "Cape Peninsula University of Technology",
    location: "Cape Town",
    type: "edu",
    desc: "Advanced software engineering, systems design, and development practices. Completed.",
  },
  {
    period: "Jul 2024 – Jul 2025",
    role: "Web Developer Intern",
    org: "Plum Systems",
    location: "Bellville, Cape Town",
    type: "work",
    desc: "Contributed to two live production commercial property platforms: API Property and Officeplace. Built frontend features with JavaScript and React, customised components via Joomla CMS, applied Bootstrap for responsive design, and shipped code through GitLab CI pipelines.",
  },
  {
    period: "Jan 2022 – Dec 2024",
    role: "Diploma — ICT in Applications Development",
    org: "Cape Peninsula University of Technology",
    location: "Cape Town",
    type: "edu",
    desc: "Software development, databases, networking, and IT systems fundamentals. Completed.",
  },
  {
    period: "Jan 2021 – Dec 2021",
    role: "Higher Certificate — ICT",
    org: "Cape Peninsula University of Technology",
    location: "Cape Town",
    type: "edu",
    desc: "Foundational qualifications in ICT and information systems. Completed.",
  },
];

function Typewriter({ lines, speed = 38 }) {
  const [displayed, setDisplayed] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= lines.length) { setDone(true); return; }
    if (charIdx <= lines[lineIdx].length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[lineIdx] = lines[lineIdx].slice(0, charIdx);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setLineIdx((l) => l + 1); setCharIdx(0); }, 320);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, lines, speed]);

  return (
    <div className={styles.typewriterWrap}>
      {lines.map((line, i) => (
        <div key={i} className={styles.typewriterLine}>
          {(i < lineIdx || (i === lineIdx && charIdx > 0)) && (
            <>
              {i % 2 === 0 ? (
                <span className={styles.typewriterPrompt}>$</span>
              ) : (
                <span className={styles.typewriterSpacer} />
              )}
              <span className={i % 2 === 0 ? styles.typewriterTextCommand : styles.typewriterTextOutput}>
                {displayed[i] ?? ""}
              </span>
              {i === lineIdx && !done && <span className={styles.cursor} />}
            </>
          )}
        </div>
      ))}
      {done && <span className={styles.cursorDone} />}
    </div>
  );
}

function Ticker() {
  const repeated = [...TICKER_TAGS, ...TICKER_TAGS, ...TICKER_TAGS, ...TICKER_TAGS];
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const stripRef = useRef(null);
  const singleWidth = useRef(0);

  useEffect(() => {
    if (stripRef.current) {
      singleWidth.current = stripRef.current.scrollWidth / 4;
    }
  }, []);

  const SPEED = 1.1;
  useAnimationFrame(() => {
    if (isDragging.current) return;
    if (singleWidth.current === 0) return;
    let next = x.get() - SPEED;
    if (Math.abs(next) >= singleWidth.current) next = 0;
    x.set(next);
  });

  return (
    <div className={styles.ticker}>
      <motion.div
        ref={stripRef}
        style={{ display: "flex", gap: "0", whiteSpace: "nowrap", x }}
        drag="x"
        dragConstraints={{ left: -99999, right: 99999 }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => { isDragging.current = true; }}
        onDragEnd={() => {
          isDragging.current = false;
          if (singleWidth.current > 0) {
            const w = singleWidth.current;
            let normalised = ((x.get() % w) - w) % -w;
            if (normalised > 0) normalised -= w;
            x.set(normalised);
          }
        }}
        whileDrag={{ cursor: "grabbing" }}
      >
        {repeated.map((tag, i) => (
          <span key={i} className={styles.tickerTag}>
            {tag} <span className={styles.tickerDiamond}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={styles.skillBarWrap}>
      <div className={styles.skillBarMeta}>
        <span className={styles.skillBarName}>{name}</span>
        <span className={styles.skillBarLevel}>{level}%</span>
      </div>
      <div className={styles.skillBarTrack}>
        <motion.div
          className={styles.skillBarFill}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      </div>
    </div>
  );
}

function EkasiCard() {
  return (
    <motion.div
      className={styles.ekasiCard}
      whileHover={{ y: -6, boxShadow: "0 0 0 1px rgba(34,211,238,0.35), 0 12px 40px rgba(34,211,238,0.12)" }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <div className={styles.ekasiMacDots}>
        <span className={styles.ekasiMacDot} style={{ background: "#ff5f57" }} />
        <span className={styles.ekasiMacDot} style={{ background: "#febc2e" }} />
        <span className={styles.ekasiMacDot} style={{ background: "#28c840" }} />
      </div>

      <p className={styles.ekasiRepo}>
        repo <span className={styles.ekasiRepoDim}>/ekasiboard</span>
      </p>

      <h3 className={styles.ekasiName}>eKasi Board</h3>

      <p className={styles.ekasiDesc}>
        Full stack community notice board for C-Section, Khayelitsha. Built with React & Supabase auth, real time data, file storage, and interactive maps.
      </p>

      <div className={styles.ekasiMeta}>
        <span className={styles.ekasiLang}>
          <span className={styles.ekasiLangDot} />
          JavaScript
        </span>
        <span>★ 0</span>
        <span>⑂ 0</span>
      </div>

      <div className={styles.ekasiButtons}>
        <a href="https://github.com/Aceman-dev/ekasiboard" target="_blank" rel="noreferrer" className={styles.ekasiButtonCode}>
          &lt;/&gt; code
        </a>
        <a href="https://ekasiboard.vercel.app" target="_blank" rel="noreferrer" className={styles.ekasiButtonLive}>
          {"↗\uFE0E"} live
        </a>
      </div>
    </motion.div>
  );
}

function RepoCard({ r }) {
  return (
    <a href={r.html_url} target="_blank" rel="noreferrer" className={styles.repoCard}>
      <div className={styles.repoCardTop}>
        <h3 className={styles.repoName}>{r.name}</h3>
        <span className={styles.repoArrow}>/&gt;</span>
      </div>
      <p className={styles.repoDesc}>{r.description || "No description."}</p>
      <div className={styles.repoMeta}>
        {r.language && (
          <span className={styles.repoLang}>
            <span className={styles.repoLangDot} />
            {r.language}
          </span>
        )}
        <span>★ {r.stargazers_count}</span>
        <span>⑂ {r.forks_count}</span>
      </div>
    </a>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -8, boxShadow: "0 35px 90px rgba(34,211,238,0.16)" }}
    >
      <div className={styles.projectCardTop}>
        <span className={project.badge === "LIVE" ? styles.projectBadgeLive : styles.projectBadgeOther}>
          {project.badge}
        </span>
        <span className={styles.projectPeriod}>{project.period}</span>
      </div>
      <h3 className={styles.projectName}>{project.name}</h3>
      <p className={styles.projectTech}>{project.tech.join("  ·  ")}</p>
      <p className={styles.projectDesc}>{project.desc}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className={styles.projectLink}>
          Visit /&gt;
        </a>
      )}
    </motion.div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const links = ["about", "skills", "projects", "timeline", "contact"];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`}>
      <div className={styles.navGlow} />
      <div className={styles.navInner}>
        <span className={styles.navLogo}>
          AN<span className={styles.navLogoDot}>.</span>
          <span className={styles.navLogoSuffix}>dev</span>
        </span>
        <div className={styles.navLinks}>
          {links.map((l) => (
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

  const terminalLines = [
    "whoami",
    "Anele Nqabeni — Junior Developer Intern @ Zaio Institute of Technology ",
    "ls ~/stack",
    "PHP  MySQL  Xneelo  KonsoleH HTML CSS  JavaScript  REST APIs ",
    "cat status.txt",
    "Building real product apps for real businesses ✓",
    "git log --oneline -1",
    "feat: built core features for ikhono.africa",
  ];

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
                    ANELE<br /><span className={styles.textSky}>NQABENI</span>
                  </h1>
                </div>
                <div
                  className={styles.mobilePhotoRing}
                  style={{ width: isMobile ? "120px" : "160px", height: isMobile ? "120px" : "160px" }}
                >
                  <img
                    src="/anele.jpeg"
                    alt="Anele Nqabeni"
                    className={styles.heroPhoto}
                  />
                </div>
              </div>

              {!isMobile && (
                <div className={styles.desktopHeading} style={{ margin: 0, padding: 0 }}>
                  <h1 className={`${styles.heroHeading} ${styles.glowText}`} style={{ margin: 0, padding: 0 }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300, color: "#ffffff", letterSpacing: "0.05em", display: "block", marginBottom: "16px", textTransform: "none" }}>
                      Hi, I'm
                    </span>
                    ANELE<br /><span className={styles.textSky}>NQABENI</span>
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
                  {" "}startup web application and contributing to a platform that mitigates real world impact.
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
                  <Typewriter lines={terminalLines} speed={36} />
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
                {[["1+", "Years Exp."], ["5", "Projects"], ["8+", "Programming Languages"]].map(([val, label]) => (
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
                  <Typewriter lines={terminalLines} speed={36} />
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
              <span className={styles.aboutParaHighlight}>iKhono Africa</span> a Durban based startup which helps digitise South Africa's artisan economy, working remotely from Cape Town. I'm still early in my career, but I have made every opportunity count.
            </p>
            <p className={styles.aboutPara}>
              Day to day I work across the full stack at iKhono Africa: building PHP RESTful APIs/MySQL backend integrations together with JavaScript for the frontend, shipping features that real clients and professionals depend on. I am also crafting full stack solutions at Metrolink as a personal startup project. I previously interned at{" "}
              <span className={styles.aboutParaHighlight}>Plum Systems</span> on two live commercial property platforms.
            </p>
            <p className={styles.aboutPara}>
              I hold an Advanced Diploma in ICT in Applications Development from CPUT. My drive is simple: write clean code, collaborate well, and keep improving.
            </p>
          </div>
          <div className={styles.configCard}>
            <p className={styles.configComment}>{"// anele.config.json"}</p>
            {[
              ["name", '"Anele Nqabeni"'],
              ["role", '"Junior Developer Intern"'],
              ["company", '"Zaio Institute of Technology"'],
              ["location", '"Cape Town, ZA"'],
              ["email", '"anele.nqabeni01@gmail.com"'],
              ["phone", '"+27 67 876 2327"'],
              ["status", '"open to entry level or junior role opportunities"'],
              ["education", '"Advanced Dip. ICT — CPUT"'],
            ].map(([k, v]) => (
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
          {[
            { icon: "@", label: "Email", value: "anele.nqabeni01@gmail.com", href: "mailto:anele.nqabeni01@gmail.com" },
            { icon: "GH", label: "GitHub", value: "Aceman-dev", href: "https://github.com/Aceman-dev" },
            { icon: "in", label: "LinkedIn", value: "anele-nqabeni-b719691aa", href: "https://www.linkedin.com/in/anele-nqabeni-b719691aa" },
            { icon: "TEL", label: "Phone", value: "+27 67 876 2327", href: "tel:+27678762327" },
          ].map(({ icon, label, value, href }) => (
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