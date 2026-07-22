import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 98, suffix: "%", label: "ML model accuracy (crop prediction)" },
  { value: 25, suffix: "%", label: "Faster load time shipped" },
  { value: 5, suffix: "+", label: "Full-stack & ML projects shipped" },
  { value: 12, suffix: "%", label: "Production bugs reduced" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-num">
      {display}
      {suffix}
    </span>
  );
}

function StatsBar() {
  return (
    <div className="stats-bar">
      {STATS.map((s, i) => (
        <motion.div
          className="stat-card"
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          viewport={{ once: true }}
        >
          <Counter value={s.value} suffix={s.suffix} />
          <div className="stat-label">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsBar;
