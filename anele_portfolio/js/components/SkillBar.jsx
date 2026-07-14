import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/home.module.css";


export default function SkillBar({ name, level, icon: Icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={styles.skillBarWrap}>
      <div className={styles.skillBarMeta}>
        <span className={styles.skillBarNameGroup}>
          {Icon && <Icon size={14} strokeWidth={2} className={styles.skillBarIcon} />}
          <span className={styles.skillBarName}>{name}</span>
        </span>
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