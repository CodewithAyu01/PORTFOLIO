import { motion } from "framer-motion";
import { PaperIcon } from "./Icons";

function Publications() {
  return (
    <motion.section
      id="publications"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="section-eyebrow"><span className="num">02</span> Research</div>
      <h2>Published Research</h2>

      <div className="publication-card">
        <div className="publication-icon">
          <PaperIcon />
        </div>
        <div>
          <h3>Machine Learning-Driven Congestion Control in Computer Networks</h3>
          <p>
            Research publication exploring ML-based approaches to network
            congestion control, applying statistical analysis and predictive
            modeling to improve traffic management strategies.
          </p>
          <p className="publication-meta">Published research paper</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Publications;
