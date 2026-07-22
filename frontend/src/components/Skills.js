import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = {
  Languages: ["Java", "Python", "JavaScript", "SQL"],
  "Frontend & Backend": ["React.js", "Node.js", "Express", "Flask", "REST APIs"],
  Databases: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  "Tools & Cloud": ["Git", "GitHub", "Docker", "Postman", "Netlify", "Render", "k6", "Locust"],
  "ML / Data": ["Pandas", "NumPy", "Scikit-learn", "Statistical Analysis"],
  "Core CS": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "System Design"],
};

function Skills() {
  const tabs = Object.keys(CATEGORIES);
  const [active, setActive] = useState(tabs[0]);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="section-eyebrow"><span className="num">02</span> Skills</div>
      <h2>Technical Toolbox</h2>
      <p className="section-sub">Grouped by where I use it most — click a category to filter.</p>

      <div className="skills-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={active === tab ? "active" : ""}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="skills-chip-grid"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -10 }}
          variants={{
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {CATEGORIES[active].map((skill) => (
            <motion.span
              className="skill-chip"
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.25 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

export default Skills;
