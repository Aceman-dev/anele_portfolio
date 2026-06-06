import { useEffect, useState } from "react";
import styles from "../../styles/home.module.css";

export default function Typewriter({ lines, speed = 38 }) {
  const [displayed, setDisplayed] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= lines.length) {
      setDone(true);
      return;
    }
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
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 320);
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