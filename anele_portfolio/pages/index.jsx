import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useAnimationFrame } from "framer-motion";

const USERNAME = "AneleNqabeni220403635";

const SKILLS = [
  { name: "HTML / CSS", level: 93 },
  { name: "JavaScript", level: 88 },
  { name: "PHP / MySQL", level: 85 },
  { name: "SQL", level: 82 },
  { name: "React / React Native", level: 80 },
  { name: "C# / .NET 9 / PostgreSQL", level: 78 },
  { name: "Java / Spring Boot", level: 74 },
  { name: "Python", level: 65 },
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
    tech: ["React", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
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

// ── Typewriter ─────────────────────────────────────────────────────────────
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
    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px", lineHeight: 1.9 }}>
      {lines.map((line, i) => (
        <div key={i} style={{ display: "flex", gap: "8px", minHeight: "18px" }}>
          {(i < lineIdx || (i === lineIdx && charIdx > 0)) && (
            <>
              {i % 2 === 0 ? (
                <span style={{ color: "#22d3ee", flexShrink: 0 }}>$</span>
              ) : (
                <span style={{ width: "10px", flexShrink: 0 }} />
              )}
              <span style={{ color: i % 2 === 0 ? "#4a6080" : "#ffffff" }}>
                {displayed[i] ?? ""}
              </span>
              {i === lineIdx && !done && (
                <span style={{
                  display: "inline-block", width: "6px", height: "12px",
                  background: "#22d3ee", marginLeft: "2px",
                  animation: "blink 1s step-end infinite"
                }} />
              )}
            </>
          )}
        </div>
      ))}
      {done && (
        <span style={{
          display: "inline-block", width: "6px", height: "12px",
          background: "#22d3ee", marginTop: "4px",
          animation: "blink 1s step-end infinite"
        }} />
      )}
    </div>
  );
}

// ── Ticker ─────────────────────────────────────────────────────────────────
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
    if (Math.abs(next) >= singleWidth.current) {
      next = 0;
    }
    x.set(next);
  });

  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(34,211,238,0.12)", borderBottom: "1px solid rgba(34,211,238,0.12)", padding: "12px 0", background: "#071229", cursor: "grab", userSelect: "none" }}>
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
          <span key={i} style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.25em", color: "#dbe4ff", textTransform: "uppercase", padding: "0 24px" }}>
            {tag} <span style={{ color: "#7dd3fc", margin: "0 8px" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Skill bar ──────────────────────────────────────────────────────────────
function SkillBar({ name, level }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", color: "#22d3ee", letterSpacing: "0.05em" }}>{name}</span>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px", color: "#4a6080" }}>{level}%</span>
      </div>
      <div style={{ height: "6px", background: "#0d1a36", borderRadius: "999px", position: "relative", overflow: "hidden" }}>
        <motion.div
          style={{ position: "absolute", top: 0, left: 0, height: "100%", borderRadius: "999px", background: "linear-gradient(90deg, #22d3ee, #7dd3fc)" }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      </div>
    </div>
  );
}

// ── eKasi Board pinned card ────────────────────────────────────────────────
function EkasiCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, boxShadow: "0 0 0 1px rgba(34,211,238,0.35), 0 12px 40px rgba(34,211,238,0.12)" }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      style={{
        display: 'flex', flexDirection: 'column', padding: '32px',
        background: '#081327',
        border: `1px solid ${hovered ? '#7dd3fc' : '#0d1a36'}`,
        transition: 'border-color 0.15s',
        height: '100%',
      }}
    >
      {/* Mac dots */}
      <div style={{ display: 'flex', gap: '5px', marginBottom: '14px' }}>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
      </div>

      {/* Repo path */}
      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '9px', color: '#22d3ee', letterSpacing: '0.12em', marginBottom: '10px' }}>
        repo <span style={{ color: '#4a6080' }}>/ekasiboard</span>
      </p>

      {/* Name */}
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', color: hovered ? '#22d3ee' : '#ccc', transition: 'color 0.15s', marginBottom: '10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        eKasi Board
      </h3>

      {/* Description */}
      <p style={{ fontSize: '14px', color: '#9db9da', lineHeight: 1.7, marginBottom: '16px', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        Full stack community notice board for C-Section, Khayelitsha. Built with React & Supabase auth, real time data, file storage, and interactive maps.
      </p>

      {/* Language + stats */}
      <div style={{ display: 'flex', gap: '16px', fontFamily: "'Syne', sans-serif", fontSize: '9px', color: '#a8c1eb', marginBottom: '16px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee' }} />
          JavaScript
        </span>
        <span>★ 0</span>
        <span>⑂ 0</span>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <a
          href="https://github.com/AneleNqabeni220403635/ekasiboard"
          target="_blank"
          rel="noreferrer"
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #0d1a36', color: '#9db9da', fontSize: '9px', fontFamily: "'Syne', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', transition: 'border-color 0.15s, color 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#22d3ee55'; e.currentTarget.style.color = '#22d3ee'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#0d1a36'; e.currentTarget.style.color = '#9db9da'; }}
        >
          &lt;/&gt; code
        </a>
        <a
          href="https://ekasiboard.vercel.app"
          target="_blank"
          rel="noreferrer"
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #22d3ee', background: 'rgba(34,211,238,0.08)', color: '#22d3ee', fontSize: '9px', fontFamily: "'Syne', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', transition: 'background 0.15s, color 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#22d3ee'; e.currentTarget.style.color = '#000'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,0.08)'; e.currentTarget.style.color = '#22d3ee'; }}
        >
         {"↗\uFE0E"} live
        </a>
      </div>
    </motion.div>
  );
}

// ── Repo card ──────────────────────────────────────────────────────────────
function RepoCard({ r }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={r.html_url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "block", padding: "20px", background: "#081327", border: `1px solid ${hovered ? "#7dd3fc" : "#0d1a36"}`, textDecoration: "none", transition: "border-color 0.15s" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "8px" }}>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "12px", color: hovered ? "#22d3ee" : "#ccc", transition: "color 0.15s", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {r.name}
        </h3>
        <span style={{ color: "#22d3ee", fontSize: "11px", opacity: hovered ? 1 : 0, transition: "opacity 0.15s", flexShrink: 0 }}>/&gt;</span>
      </div>
      <p style={{ fontSize: "11px", color: "#9db9da", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", marginBottom: "16px" }}>
        {r.description || "No description."}
      </p>
      <div style={{ display: "flex", gap: "16px", fontFamily: "'Syne', sans-serif", fontSize: "9px", color: "#a8c1eb" }}>
        {r.language && (
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22d3ee" }} />
            {r.language}
          </span>
        )}
        <span>★ {r.stargazers_count}</span>
        <span>⑂ {r.forks_count}</span>
      </div>
    </a>
  );
}

// ── Project card ───────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -8, boxShadow: "0 35px 90px rgba(34,211,238,0.16)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#081327",
        border: `1px solid ${hovered ? "#22d3ee44" : "#0d1a36"}`,
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "8px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "3px 10px", border: `1px solid ${project.badge === "LIVE" ? "#22d3ee" : "#0c1d3d"}`, color: project.badge === "LIVE" ? "#22d3ee" : "#9cb2ff" }}>
          {project.badge}
        </span>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", color: "#2a3a5a" }}>{project.period}</span>
      </div>
      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1, color: "#fff" }}>{project.name}</h3>
      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", color: "#9ecbff", letterSpacing: "0.08em" }}>{project.tech.join("  ·  ")}</p>
      <p style={{ fontSize: "12px", color: "#97b1d2", lineHeight: 1.85, fontWeight: 300, flex: 1 }}>{project.desc}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer"
          style={{ alignSelf: "flex-start", padding: "8px 16px", border: "1px solid #22d3ee", color: "#22d3ee", fontSize: "8px", fontFamily: "'Syne', sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.15s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#22d3ee"; e.currentTarget.style.color = "#000"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#22d3ee"; }}>
          Visit /&gt;
        </a>
      )}
    </motion.div>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────
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
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s",
      background: scrolled ? "rgba(3, 13, 35, 0.96)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(34,211,238,0.18)" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
    }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.35) 20%, rgba(34,211,238,0.35) 80%, transparent)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", letterSpacing: "0.25em", color: "#22d3ee" }}>
          AN<span style={{ color: "#ffffff", opacity: 0.35 }}>.</span><span style={{ fontFamily: "'Syne', sans-serif", fontSize: "13px", letterSpacing: "0.1em", color: "#ffffff", opacity: 0.5, fontWeight: 400 }}>dev</span>
        </span>
        <div className="nav-links" style={{ display: "flex", gap: "32px" }}>
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9acafc", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s", position: "relative", padding: "4px 0" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#22d3ee"; const line = e.currentTarget.querySelector(".nav-underline"); if (line) line.style.width = "100%"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#9acafc"; const line = e.currentTarget.querySelector(".nav-underline"); if (line) line.style.width = "0%"; }}
            >
              ./{l}
              <span className="nav-underline" style={{ position: "absolute", bottom: "-2px", left: 0, width: "0%", height: "1px", background: "#22d3ee", transition: "width 0.2s ease", display: "block" }} />
            </button>
          ))}
        </div>
        <a
          href="/Anele-Nqabeni-Resume.pdf.pdf" download
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "8px 16px", border: "1px solid rgba(34,211,238,0.4)", color: "#22d3ee", textDecoration: "none", transition: "background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s", display: "inline-flex", alignItems: "center", gap: "6px", boxShadow: "0 0 0 0 rgba(34,211,238,0)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#22d3ee"; e.currentTarget.style.color = "#020617"; e.currentTarget.style.borderColor = "#22d3ee"; e.currentTarget.style.boxShadow = "0 0 16px rgba(34,211,238,0.3)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#22d3ee"; e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 0 rgba(34,211,238,0)"; }}
        >
          <span style={{ fontSize: "11px" }}>↓</span> cv
        </a>
      </div>
    </nav>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 140]);
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
    const handleScroll = () => { setShowBackToTop(window.scrollY > 100); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const terminalLines = [
    "whoami",
    "Anele Nqabeni — Junior Developer Intern @ Zaio · iKhono Africa Startup",
    "ls ~/stack",
    "PHP  MySQL  Xneelo  KonsoleH HTML CSS  JavaScript  REST APIs ",
    "cat status.txt",
    "Building real product apps for real businesses ✓",
    "git log --oneline -1",
    "feat: built core features for ikhono.africa",
  ];

  return (
    <div style={{ background: "#040b1c", color: "#e5e5e5", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@700;800&family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Syne', sans-serif; background: #040b1c; color: #e5e5e5; }
        html { scroll-behavior: smooth; }
        ::selection { background: #22d3ee; color: #000; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0px); } }
        body::after {
          content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9998; opacity: 0.08;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }
        .hero-grid {
          background: radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 22%),
                      radial-gradient(circle at 88% 10%, rgba(59,130,246,0.18), transparent 18%),
                      linear-gradient(180deg, rgba(3,12,32,1) 0%, rgba(4,8,24,1) 100%);
          justify-content: flex-end;
        }
        .hero-panel { background: rgba(6,16,44,0.88); border: 1px solid rgba(34,211,238,0.2); box-shadow: 0 40px 120px rgba(0,0,0,0.36); }
        .soft-text { color: #96c8ef; }
        .hero-heading { font-family: 'Space Grotesk', sans-serif; font-size: clamp(58px, 7.5vw, 90px); font-weight: 800; line-height: 0.92; color: #fff; }
        .glow-text { text-shadow: 0 0 18px rgba(52,211,153,0.25), 0 0 54px rgba(16,185,129,0.2); }
        .text-sky-400 { color: #38bdf8; }
        .hero-grid::before {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background-image: linear-gradient(rgba(52,211,153,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%);
        }
        .hero-mobile-grid { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 48px; align-items: center; }
        .hero-image-wrap { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 24px; margin-top: -40px; }
        .hero-photo-ring { width: 220px; height: 220px; border-radius: 50%; padding: 10px; background: linear-gradient(135deg, rgba(34,211,238,0.25), rgba(99,102,241,0.2)); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 40px 80px rgba(0,0,0,0.25); flex-shrink: 0; }
        .terminal-block { width: 320px; background: #0d1117; border: 1px solid #1a2a4a; border-radius: 12px; }
        .desktop-heading { margin-bottom: 24px; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hero-heading { font-family: 'Space Grotesk', sans-serif !important; font-size: 44px !important; line-height: 0.95 !important; font-weight: 800 !important; }
          .hero-mobile-grid { grid-template-columns: 1fr !important; gap: 0px !important; }
          .cta-buttons { justify-content: center !important; }
          .stats-row { justify-content: center !important; }
          .hero-image-wrap { display: none !important; }
          .mobile-photo-row { display: flex !important; margin-bottom: 0 !important; }
          .mobile-terminal-full { display: block !important; }
          .hero-grid { justify-content: flex-start !important; padding: 100px 0 40px !important; min-height: auto !important; }
          .desktop-heading { display: none !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; }
          .mobile-photo-row .hero-heading { margin-bottom: 0 !important; line-height: 0.95 !important; }
          .mobile-photo-row { align-items: flex-start !important; }
          .mobile-role { margin-top: 0px !important; margin-bottom: 16px !important; }
        }
        .mobile-photo-row { display: none; align-items: flex-start; gap: 16px; margin-bottom: 0; }
        .mobile-terminal-full { display: none; width: 100%; background: #0d1117; border: 1px solid #1a2a4a; border-radius: 12px; margin-bottom: 28px; }
        .mobile-role { display: flex; align-items: baseline; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .cta-buttons button, .cta-buttons a { padding: 10px 18px !important; font-size: 9px !important; width: auto !important; flex: 0 1 auto !important; }
        }
      `}</style>

      <Nav />

      {/* ── HERO ── */}
      <section className="hero-grid" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "80px 0 48px", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(34,211,238,0.12)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="hero-mobile-grid">
            <div>
              <div className="mobile-photo-row" style={{ marginBottom: "0", alignItems: "flex-start", gap: isMobile ? "12px" : "16px" }}>
                <div style={{ flex: 1, marginBottom: "0", margin: "0", padding: "0" }}>
                  <h1 className="hero-heading glow-text" style={{ paddingBottom: "0", margin: "0", paddingTop: "0" }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "18px", fontWeight: 300, color: "#ffffff", letterSpacing: "0.05em", display: "block", marginBottom: "8px", textTransform: "none" }}>Hi, I'm</span>
                    ANELE<br /><span className="text-sky-400">NQABENI</span>
                  </h1>
                </div>
                <div style={{ width: isMobile ? "120px" : "160px", height: isMobile ? "120px" : "160px", borderRadius: "50%", padding: "6px", background: "linear-gradient(135deg, rgba(34,211,238,0.25), rgba(99,102,241,0.2))", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", flexShrink: 0, animation: "float 3s ease-in-out infinite" }}>
                  <img src="/anele.jpeg" alt="Anele Nqabeni" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", background: "#0b1226", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1) rotate(3deg)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}
                    onTouchStart={(e) => { e.currentTarget.style.transform = "scale(1.1) rotate(3deg)"; }}
                    onTouchEnd={(e) => { e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}
                  />
                </div>
              </div>

              {!isMobile && (
                <div className="desktop-heading" style={{ margin: "0", padding: "0" }}>
                  <h1 className="hero-heading glow-text" style={{ margin: "0", padding: "0" }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300, color: "#ffffff", letterSpacing: "0.05em", display: "block", marginBottom: "16px", textTransform: "none" }}>Hi, I'm</span>
                    ANELE<br /><span className="text-sky-400">NQABENI</span>
                  </h1>
                </div>
              )}

              <div className="mobile-role">
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300, color: "#ffffff", letterSpacing: "0.05em" }}>&amp;</span>
                <div>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(13px, 2vw, 20px)", fontWeight: 300, color: "#ffffff", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>I'm a</span>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 0.9, whiteSpace: "nowrap" }}>
                    <span style={{ color: "#ffffff" }}>FULL STACK </span>
                    <span style={{ color: "#38bdf8" }}>SOFTWARE ENGINEER</span>
                  </span>
                </div>
              </div>

              <div style={{ width: "48px", height: "1px", background: "linear-gradient(90deg, #22d3ee, rgba(34,211,238,0.2))", margin: "20px 0" }} />

              <div style={{ maxWidth: "540px", marginBottom: "32px" }}>
                <p style={{ color: "#8aa0d2", fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.75, fontWeight: 300 }}>
                  South Africa has millions of skilled artisans with no digital presence.{" "}
                  <span style={{ color: "#cdd7ff", fontWeight: 500 }}>I'm helping fix that</span>{" "}
                  as a Junior Developer Intern at{" "}
                  <span style={{ color: "#cdd7ff", fontWeight: 500 }}>Zaio Institute of Technology</span>,
                  {" "}building full stack solutions daily for the{" "}
                  <span style={{ color: "#22d3ee", fontWeight: 500 }}>iKhono Africa</span>
                  {" "}startup web application and contributing to a platform that mitigates real world impact.
                </p>
              </div>

              <div className="mobile-terminal-full">
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 14px", background: "#161b22", borderBottom: "1px solid #1a2a4a", borderRadius: "12px 12px 0 0" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px", color: "#e5e5e5", marginLeft: "8px" }}>anele@ikhono.africa ~ zsh</span>
                </div>
                <div style={{ padding: "16px", minHeight: "160px" }}>
                  <Typewriter lines={terminalLines} speed={36} />
                </div>
              </div>

              <div className="cta-buttons" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
                <motion.button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ padding: "13px 28px", background: "#22d3ee", color: "#020617", fontSize: "10px", fontFamily: "'Syne', sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #22d3ee", cursor: "pointer", fontWeight: 600, transition: "background 0.2s, color 0.2s, box-shadow 0.2s", boxShadow: "0 0 0 0 rgba(34,211,238,0)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#22d3ee"; e.currentTarget.style.boxShadow = "0 0 18px rgba(34,211,238,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#22d3ee"; e.currentTarget.style.color = "#020617"; e.currentTarget.style.boxShadow = "0 0 0 0 rgba(34,211,238,0)"; }}
                >
                  ./view work
                </motion.button>
                <motion.a
                  href="/Anele-Nqabeni-Resume.pdf.pdf" download
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ padding: "13px 28px", background: "transparent", color: "#22d3ee", fontSize: "10px", fontFamily: "'Syne', sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid rgba(34,211,238,0.4)", cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", transition: "background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s", boxShadow: "0 0 0 0 rgba(34,211,238,0)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(34,211,238,0.08)"; e.currentTarget.style.borderColor = "#22d3ee"; e.currentTarget.style.boxShadow = "0 0 18px rgba(34,211,238,0.18)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 0 rgba(34,211,238,0)"; }}
                >
                  <span style={{ fontSize: "12px", lineHeight: 1 }}>↓</span> download cv
                </motion.a>
              </div>

              <div className="stats-row" style={{ display: "flex", gap: "36px", flexWrap: "wrap" }}>
                {[["1+", "Years Exp."], ["4", "Projects"], ["8+", "Programming Languages"]].map(([val, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "44px", lineHeight: 1, color: "#22d3ee" }}>{val}</p>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "8px", letterSpacing: "0.22em", color: "#9ecbff", textTransform: "uppercase", marginTop: "4px" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.3 }} className="hero-image-wrap">
              <div className="hero-photo-ring" style={{ animation: "float 3s ease-in-out infinite" }}>
                <img src="/anele.jpeg" alt="Anele Nqabeni" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", background: "#0b1226", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1) rotate(3deg)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}
                  onTouchStart={(e) => { e.currentTarget.style.transform = "scale(1.1) rotate(3deg)"; }}
                  onTouchEnd={(e) => { e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}
                />
              </div>
              <div className="terminal-block">
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 14px", background: "#161b22", borderBottom: "1px solid #1a2a4a", borderRadius: "12px 12px 0 0" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px", color: "#e5e5e5", marginLeft: "8px" }}>anele@ikhono.africa ~ zsh</span>
                </div>
                <div style={{ padding: "16px", minHeight: "160px" }}>
                  <Typewriter lines={terminalLines} speed={36} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Ticker />

      {/* ── ABOUT ── */}
      <section id="about" style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px 100px" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", color: "#22d3ee", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "4px" }}>
            ~/portfolio <span style={{ color: "#4a6080" }}>on</span> <span style={{ color: "#a78bfa" }}>main</span>
          </p>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "12px", color: "#4a6080", marginBottom: "20px" }}>
            <span style={{ color: "#22d3ee" }}>$</span> cat about.md
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>About Me</h2>
          <div style={{ width: "48px", height: "2px", background: "#22d3ee" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ color: "#8aa0d2", fontSize: "14px", lineHeight: 1.85, fontWeight: 300 }}>
              I'm <span style={{ color: "#22d3ee", fontWeight: 600 }}>Anele Nqabeni</span>, a Junior Developer Intern at <span style={{ color: "#e5e5e5", fontWeight: 600 }}>Zaio Institute of Technology</span>, where I have deployed full stack solutions for <span style={{ color: "#e5e5e5", fontWeight: 600 }}>iKhono Africa</span> a Durban based startup which helps digitise South Africa's artisan economy, working remotely from Cape Town. I'm still early in my career, but I have made every opportunity count.
            </p>
            <p style={{ color: "#8aa0d2", fontSize: "14px", lineHeight: 1.85, fontWeight: 300 }}>
              Day to day I work across the full stack at iKhono Africa: building PHP/MySQL backend integrations together with JavaScript for the frontend, shipping features that real clients and professionals depend on. I am also crafting full stack solutions at Metrolink as a personal startup project. I previously interned at <span style={{ color: "#e5e5e5", fontWeight: 600 }}>Plum Systems</span> on two live commercial property platforms.
            </p>
            <p style={{ color: "#8aa0d2", fontSize: "14px", lineHeight: 1.85, fontWeight: 300 }}>
              I hold an Advanced Diploma in ICT in Applications Development from CPUT. My drive is simple: write clean code, collaborate well, and keep improving.
            </p>
          </div>
          <div style={{ background: "#081327", border: "1px solid #0d1a36", borderRadius: "12px", padding: "24px", fontFamily: "'Syne', sans-serif", fontSize: "12px" }}>
            <p style={{ color: "#4a6080", marginBottom: "16px" }}>{"// anele.config.json"}</p>
            {[
              ["name", '"Anele Nqabeni"', "#c084fc"],
              ["role", '"Junior Developer Intern"', "#fbbf24"],
              ["company", '"Zaio Institute of Technology · iKhono Africa"', "#fbbf24"],
              ["location", '"Cape Town, ZA"', "#fbbf24"],
              ["email", '"anele.nqabeni01@gmail.com"', "#fbbf24"],
              ["phone", '"+27 67 876 2327"', "#fbbf24"],
              ["status", '"open to entry level or junior role opportunities"', "#fbbf24"],
              ["education", '"Advanced Dip. ICT — CPUT"', "#fbbf24"],
            ].map(([k, v, color]) => (
              <div key={k} style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "6px" }}>
                <span style={{ color: "#c084fc" }}>{k}</span>
                <span style={{ color: "#4a6080" }}>:</span>
                <span style={{ color }}>{v}</span>
                <span style={{ color: "#4a6080" }}>,</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ background: "#081327", borderTop: "1px solid #0d1a36", borderBottom: "1px solid #0d1a36" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "64px" }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#22d3ee", textTransform: "uppercase", flexShrink: 0 }}>02 — Skills</span>
            <div style={{ flex: 1, height: "1px", background: "#12213a" }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 800, color: "#ffffff", lineHeight: 1, flexShrink: 0 }}>TECH STACK</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px 80px", marginBottom: "48px" }}>
            {SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {TICKER_TAGS.map((tag) => (
              <span key={tag} style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.12em", padding: "6px 14px", border: "1px solid #0d1a36", color: "#7b96c5", textTransform: "uppercase", background: "#061027", cursor: "default" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "64px" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#22d3ee", textTransform: "uppercase", flexShrink: 0 }}>03 — Projects</span>
          <div style={{ flex: 1, height: "1px", background: "#12213a" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
        <div style={{ marginTop: "72px" }}>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#7b96c5", textTransform: "uppercase", marginBottom: "28px" }}>
            Personal and Open Source Repos
          </p>
          {loading ? (
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", color: "#7b96c5" }}>fetching repos...</p>
          ) : (
            <motion.div
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
            >
              {/* eKasi Board — pinned */}
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

      {/* ── TIMELINE ── */}
      <section id="timeline" style={{ background: "#081327", borderTop: "1px solid #0d1a36", borderBottom: "1px solid #0d1a36" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", color: "#22d3ee", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>04 — Timeline</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>Experience & Education</h2>
            <div style={{ width: "48px", height: "2px", background: "#22d3ee" }} />
          </div>
          <div style={{ position: "relative", paddingLeft: "32px", borderLeft: "1px solid #0d1a36" }}>
            {TIMELINE.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ position: "relative", marginBottom: "48px" }}>
                <div style={{ position: "absolute", left: "-40px", top: "4px", width: "14px", height: "14px", borderRadius: "50%", border: `2px solid ${item.type === "work" ? "#22d3ee" : "#7dd3fc"}`, background: "#081327" }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", color: "#22d3ee", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.period}</span>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#e5e5e5", margin: "8px 0 4px", lineHeight: 1.3 }}>{item.role}</h3>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px", color: "#444", marginBottom: "10px" }}>{item.org} · {item.location}</p>
                <p style={{ fontSize: "12px", color: "#7b96c5", lineHeight: 1.85, fontWeight: 300, maxWidth: "600px" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#22d3ee", textTransform: "uppercase", flexShrink: 0 }}>05 — Contact</span>
          <div style={{ flex: 1, height: "1px", background: "#12213a" }} />
        </div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", color: "#fff", marginBottom: "16px" }}>
          Contact
        </motion.h2>
        <div style={{ width: "48px", height: "2px", background: "#22d3ee", marginBottom: "32px" }} />
        <p style={{ color: "#8aa0d2", fontSize: "13px", lineHeight: 1.85, maxWidth: "440px", fontWeight: 300, marginBottom: "48px" }}>
          I'm open to new opportunities, collaborations, or just a good conversation about tech. Reach out and I'll respond fast.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {[
            { icon: "@", label: "Email", value: "anele.nqabeni01@gmail.com", href: "mailto:anele.nqabeni01@gmail.com" },
            { icon: "GH", label: "GitHub", value: "AneleNqabeni220403635", href: "https://github.com/AneleNqabeni220403635" },
            { icon: "in", label: "LinkedIn", value: "anele-nqabeni-b719691aa", href: "https://www.linkedin.com/in/anele-nqabeni-b719691aa" },
            { icon: "TEL", label: "Phone", value: "+27 67 876 2327", href: "tel:+27678762327" },
          ].map(({ icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "20px", background: "#081327", border: "1px solid #0d1a36", textDecoration: "none", transition: "border-color 0.15s" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#22d3ee55"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#0d1a36"}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.08em", color: "#22d3ee", width: "28px", minWidth: "28px", textAlign: "center", flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "8px", color: "#4a6080", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>{label}</p>
                <p style={{ fontSize: "12px", color: "#8aa0d2" }}>{value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #0d1a36", padding: "28px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "8px", letterSpacing: "0.2em", color: "#1e2a4b", textTransform: "uppercase" }}>
            © {new Date().getFullYear()} Anele Nqabeni · Cape Town, South Africa
          </span>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "8px", letterSpacing: "0.2em", color: "#162d57", textTransform: "uppercase" }}>
            · Deployed by Anele Nqabeni
          </span>
        </div>
      </footer>

      {/* ── BACK TO TOP ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '28px', height: '28px', borderRadius: '50%', background: '#081327', border: '1px solid #22d3ee', color: '#22d3ee', fontSize: '12px', cursor: 'pointer', display: showBackToTop ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', zIndex: 1000 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#22d3ee'; e.currentTarget.style.color = '#000'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#081327'; e.currentTarget.style.color = '#22d3ee'; }}
      >
        ↑
      </button>
    </div>
  );
}