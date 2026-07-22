import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="section-eyebrow">
        <span className="num">01</span> About
      </div>
      <h2>Building software that measures its own impact</h2>
      <p className="section-sub">
        Computer Science graduate targeting Software Development Engineer
        roles, with applied ML as a differentiator.
      </p>

      <div className="about-grid">
        <div className="about-photo">
          <img src="/Ayushi_desk.jpeg" alt="Ayushi Sain at her desk" />
        </div>

        <div className="card">
          <span className="status-chip">
            <span className="dot" /> Currently: AI/ML Intern @ Emerging India Analytics
          </span>
          <p>
            Comfortable across Flask and Node.js backends, RESTful API design,
            SQL/NoSQL databases, and React frontends — with measurable
            performance gains (15–25%) delivered across five shipped projects
            and a published machine learning research paper. I like taking a
            feature from API contract to production, then proving it worked
            with a number.
          </p>
          <p style={{ marginTop: "14px" }}>
            Recent work spans AI-powered full-stack apps (JWT/Google OAuth,
            role-based access), REST integrations with Supabase, Firestore and
            OpenRouter AI APIs, and load-testing pipelines with k6 and Locust.
            Outside of code, I led technical initiatives as Vice President of
            the Nebula Club and organized "Hack the Prompt" and "Tech Expo 3.0"
            for 200+ students.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
