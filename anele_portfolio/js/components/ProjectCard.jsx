import { motion } from "framer-motion";
import styles from "../../styles/home.module.css";

export default function ProjectCard({ project, index }) {
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