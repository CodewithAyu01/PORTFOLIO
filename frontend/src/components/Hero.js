import { motion } from "framer-motion";
<section id="home" className="hero-container"></section>
function Hero() {
  return (
    <section className="hero-container">

      {/* LEFT IMAGE */}
      <motion.img
        src="/Ayushi_imagee2.jpeg"
        alt="Ayushi"
        className="profile-img"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* RIGHT TEXT */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span>Ayushi</span></h1>
        <h2>MERN Stack Developer</h2>

        <p>
          MERN Developer and Software Engineering student with strong skills in Java,
          Data Structures, and scalable web application development.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/CodewithAyu01" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/ayushi-sain123/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          {/* DOWNLOAD RESUME */}
          <a href="/Ayushi_Resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;