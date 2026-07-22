import { useRef } from "react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import RotatingRole from "./RotatingRole";

const headlineWords = "Hi, I'm Ayushi — I build software that proves it works.".split(" ");

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function Hero() {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };

  const resetTilt = () => {
    if (frameRef.current) frameRef.current.style.transform = "rotateY(0) rotateX(0)";
  };

  return (
    <section id="home" className="hero-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <RotatingRole />

        <motion.h1
          className="hero-name"
          variants={wordVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordItem}
              className={word === "proves" ? "hero-highlight" : ""}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <p className="hero-desc">
          Full-stack engineer shipping AI-powered products end to end: REST
          APIs, React frontends, cloud deployment, and applied ML — currently
          building at Emerging India Analytics, with measurable performance
          gains across five shipped projects and a published ML research paper.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/CodewithAyu01" target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayushi-sain123/" target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="/Ayushi_Resume.pdf" download className="ghost-btn">
            ⬇ Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div
          className="hero-photo-frame"
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
        >
          <img src="/Ayushi_portrait.jpeg" alt="Ayushi Sain" />
          <span className="hero-photo-tag">Ghaziabad, India</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
