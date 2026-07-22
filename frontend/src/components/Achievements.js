import { motion } from "framer-motion";

const BADGES = [
  { emoji: "🏆", text: "Vice President, Nebula Club", sub: "Led technical initiatives & mentorship for CSE-AIML students" },
  { emoji: "🎤", text: '"Hack the Prompt" & "Tech Expo 3.0"', sub: "Organized flagship technical events" },
  { emoji: "🎓", text: "Full Stack MERN Certification", sub: "200+ hours — Apna College" },
  { emoji: "☁️", text: "Oracle Cloud HCM Certification", sub: "Cloud platform fundamentals" },
  { emoji: "🤖", text: "Robo Soccer Finalist", sub: "Inter-college robotics competition" },
];

function Achievements() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="section-eyebrow"><span className="num">04</span> Achievements</div>
      <h2>Certifications & Leadership</h2>

      <div className="badge-grid">
        {BADGES.map((b, i) => (
          <motion.div
            className="badge-card"
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <span className="badge-emoji">{b.emoji}</span>
            <p>
              {b.text}
              <br />
              <span>{b.sub}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Achievements;
