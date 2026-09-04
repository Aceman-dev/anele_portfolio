import { motion } from "framer-motion";
import styles from "../../styles/home.module.css";

export default function RhassmbekiCard() {
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
        repo <span className={styles.ekasiRepoDim}>/rhass-mbeki-foundation</span>
      </p>

      <h3 className={styles.ekasiName}>Rhass Mbeki Foundation</h3>

      <p className={styles.ekasiDesc}>
        Static foundation website built with HTML, CSS, JavaScript, and React to share the Rhass Mbeki Foundation&apos;s mission and work.
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
        <a href="https://github.com/Aceman-dev/rhass-mbeki-foundation" target="_blank" rel="noreferrer" className={styles.ekasiButtonCode}>
          &lt;/&gt; code
        </a>
        <a href="https://rhassmbekifoundation.org/" target="_blank" rel="noreferrer" className={styles.ekasiButtonLive}>
          {"↗\uFE0E"} live
        </a>
      </div>
    </motion.div>
  );
}