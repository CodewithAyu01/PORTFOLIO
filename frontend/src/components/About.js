import { motion } from "framer-motion";
function About() {
  return (
    <motion.section id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <div className="card">
        <p>
           MERN Developer and Software Engineering student with a strong foundation in Core Java and Data Structures.
        Proven problem solver with experience leading technical teams as a Vice President and delivering scalable
        web applications with optimized API performance.
        </p>
      </div>
    </motion.section>
  );
}

export default About;