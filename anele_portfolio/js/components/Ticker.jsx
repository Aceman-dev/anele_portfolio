import { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { TICKER_TAGS } from "../data";
import styles from "../../styles/home.module.css";

const SPEED = 1.1;
const repeated = [...TICKER_TAGS, ...TICKER_TAGS, ...TICKER_TAGS, ...TICKER_TAGS];

export default function Ticker() {
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const stripRef = useRef(null);
  const singleWidth = useRef(0);

  useEffect(() => {
    if (stripRef.current) {
      singleWidth.current = stripRef.current.scrollWidth / 4;
    }
  }, []);

  useAnimationFrame(() => {
    if (isDragging.current || singleWidth.current === 0) return;
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