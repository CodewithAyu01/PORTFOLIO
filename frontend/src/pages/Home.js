import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Marquee from "../components/Marquee";

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <StatsBar />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="section-eyebrow">
          <span className="num">·</span> Explore
        </div>
        <h2>A quick tour</h2>
        <p className="section-sub">
          Three ways in: how I got here, what I've shipped, or just say hello.
        </p>

        <div className="explore-grid">
          <Link to="/about" className="explore-card">
            <span className="explore-icon">01</span>
            <h3>About &amp; Experience</h3>
            <p>My background, skills, and the two internships behind the projects below.</p>
            <span className="explore-arrow">View →</span>
          </Link>

          <Link to="/work" className="explore-card">
            <span className="explore-icon">02</span>
            <h3>Projects &amp; Research</h3>
            <p>Five shipped projects, live links, and a published ML research paper.</p>
            <span className="explore-arrow">View →</span>
          </Link>

          <Link to="/contact" className="explore-card">
            <span className="explore-icon">03</span>
            <h3>Get in Touch</h3>
            <p>Open to SDE and ML Engineer roles — email, LinkedIn, or GitHub.</p>
            <span className="explore-arrow">View →</span>
          </Link>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
