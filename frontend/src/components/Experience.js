import { motion } from "framer-motion";

const JOBS = [
  {
    role: "AI/ML Intern",
    company: "Emerging India Analytics — Noida, India",
    period: "May 2026 – Present",
    current: true,
    points: [
      "Built and deployed AI-powered full-stack applications (ResumeForge, ResumeElite) using Flask, Node.js, Firebase, Supabase, and MySQL — including JWT auth, Google OAuth, and RBAC.",
      "Designed and integrated REST APIs with Supabase Auth, Firestore, and OpenRouter AI APIs for scalable backend services, plus AI-assisted content enhancement and browser-based voice input.",
      "Ran load and scalability testing with k6 and Locust, identifying bottlenecks and proposing caching, autoscaling, and queue-based processing strategies.",
      "Managed cloud deployment workflows on Netlify, Render, and GitHub, resolving production API routing and environment-configuration issues to improve release reliability.",
    ],
  },
  {
    role: "Web and App Developer Intern",
    company: "QMANSYS Infosolutions LLP — Remote",
    period: "Jul 2025 – Oct 2025",
    current: false,
    points: [
      "Designed an AI-based weather prediction system using REST APIs, improving data retrieval efficiency by 15% for 100+ active users.",
      "Reduced production bugs by 12% through systematic debugging, testing, and backend optimization.",
      "Led API development for scalable REST endpoints while contributing to sprint planning and code reviews in an agile team.",
    ],
  },
];

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="section-eyebrow"><span className="num">03</span> Experience</div>
      <h2>Where I've Shipped</h2>
      <p className="section-sub">Two internships, one thread: ship it, measure it, harden it.</p>

      <div className="timeline">
        {JOBS.map((job, i) => (
          <motion.div
            className={`timeline-item ${job.current ? "current" : ""}`}
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="timeline-dot" />
            <div className="timeline-role">{job.role}</div>
            <div className="timeline-company">{job.company}</div>
            <span className="timeline-period">{job.period}{job.current ? " · active" : ""}</span>
            <ul>
              {job.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
