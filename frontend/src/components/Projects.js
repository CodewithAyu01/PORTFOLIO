import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

const PROJECTS = [
  {
    title: "Wanderlust",
    tag: "Full-Stack",
    description:
      "Full-stack travel listing platform with JWT authentication and RESTful CRUD APIs managing 50+ property listings. Improved performance by 25% through optimized Cloudinary image handling.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "https://wanderlust-2h8f.onrender.com/listings",
    githubLink: "https://github.com/CodewithAyu01/Wanderlust",
  },
  {
    title: "Stock Trading Platform",
    tag: "Full-Stack",
    description:
      "Secure MERN trading dashboard with protected routes and custom Express middleware. Improved frontend performance by 20% using React Hooks (useMemo, useCallback).",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://stock-trading-platform-49y0.onrender.com/",
    githubLink: "https://github.com/CodewithAyu01/STOCK-TRADING-PLATFORM",
  },
  {
    title: "Crop Recommendation System",
    tag: "ML",
    description:
      "Interactive Streamlit app predicting suitable crops from soil and weather inputs, achieving 98% prediction accuracy through feature engineering.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    liveLink: "https://farmer-dmkc.onrender.com/",
    githubLink: "https://github.com/CodewithAyu01/Farmer",
  },
  {
    title: "AI Resume Builder",
    tag: "AI / SaaS",
    description:
      "AI-powered resume builder SaaS with dynamic templates, JWT + Google OAuth, and role-based dashboards for students, teachers, and admins.",
    tech: ["React", "Supabase", "OpenRouter API"],
    liveLink: "https://portfolio-1-o3d9.onrender.com/",
    githubLink: "https://github.com/CodewithAyu01/Portfolio",
  },
];

const FILTERS = ["All", "Full-Stack", "ML", "AI / SaaS"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(0);

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  useEffect(() => setIndex(0), [filter]);

  const goTo = (i) => {
    const len = filtered.length;
    setIndex(((i % len) + len) % len);
  };

  return (
    <section id="projects">
      <div className="section-eyebrow"><span className="num">01</span> Projects</div>
      <h2>Selected Work</h2>
      <p className="section-sub">Filter by type, then slide through the details.</p>

      <div className="project-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="carousel-wrap">
        <button className="carousel-arrow" onClick={() => goTo(index - 1)} aria-label="Previous project">
          ‹
        </button>

        <div className="carousel-track-holder">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {filtered.map((p, i) => (
              <div className="carousel-slide" key={p.title}>
                <motion.div
                  className="project-card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === index ? 1 : 0.4 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="top-row">
                    <h3>{p.title}</h3>
                    <span className="project-tag">{p.tag}</span>
                  </div>

                  <p className="desc">{p.description}</p>

                  <div className="tech-row">
                    {p.tech.map((t) => (
                      <span className="tech-pill" key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    {p.liveLink && (
                      <a href={p.liveLink} target="_blank" rel="noreferrer" className="live-btn">
                        <ExternalLinkIcon /> Live
                      </a>
                    )}
                    {p.githubLink && (
                      <a href={p.githubLink} target="_blank" rel="noreferrer" className="github-btn">
                        <GitHubIcon /> Code
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow" onClick={() => goTo(index + 1)} aria-label="Next project">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {filtered.map((_, i) => (
          <button
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
