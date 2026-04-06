import { motion } from "framer-motion";

const projects = [
  {
    title: "Wanderlust (Full-Stack Marketplace)",
    description:
      "Engineered a scalable travel platform with CRUD functionality and JWT authentication, managing 50+ global listings. Optimized responsive UI using EJS, achieving 25% faster load time and 100% cloud-based image storage via Cloudinary.",
    liveLink: "https://wanderlust-2h8f.onrender.com/listings",
    githubLink: "https://github.com/CodewithAyu01/Wanderlust",
  },
  {
    title: "Stock Trading Platform",
    description:
      "Developed a real-time stock trading platform with live price updates, user authentication, and portfolio management. Implemented responsive UI and secure transaction handling for multiple users.",
    liveLink: "https://stock-trading-platform-49y0.onrender.com/",
    githubLink: "https://github.com/CodewithAyu01/STOCK-TRADING-PLATFORM",
  },
  {
    title: "Portfolio Website",
    description:
      "Built a personal portfolio website using React and Framer Motion, showcasing projects, skills, and resume. Fully responsive and modern design with smooth scrolling and animated UI.",
    liveLink: "https://portfolio-1-o3d9.onrender.com/",
    githubLink: "https://github.com/CodewithAyu01/Portfolio",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-container">
        {projects.map((p, index) => (
          <motion.div
            className="card"
            key={index}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            {/* BUTTONS */}
            <div className="project-buttons">
              {p.liveLink && (
                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  🔗 Live
                </a>
              )}
              {p.githubLink && (
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  💻 GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;