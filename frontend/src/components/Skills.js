import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section id="skills"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Technical Skills</h2>

      <div className="card">
        <p><b>Languages:</b> Core Java, JavaScript, SQL</p>
        <p><b>Web:</b> React, Node, Express</p>
        <p><b>Database:</b> MongoDB, MySQL</p>
      </div>
    </motion.section>
  );
}

export default Skills;