import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from "./Icons";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("Ayushisain301@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="section-eyebrow"><span className="num">→</span> Contact</div>
      <h2>Let's Build Something</h2>
      <p className="section-sub">Open to SDE & ML Engineer roles — reach out any way that works for you.</p>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:Ayushisain301@gmail.com" onClick={copyEmail}>
          {copied && <span className="copy-toast">Copied!</span>}
          <span className="contact-icon"><MailIcon /></span>
          <div>
            <div className="contact-label">EMAIL</div>
            <div className="contact-value">Ayushisain301@gmail.com</div>
          </div>
        </a>

        <a className="contact-card" href="tel:+918384898652">
          <span className="contact-icon"><PhoneIcon /></span>
          <div>
            <div className="contact-label">PHONE</div>
            <div className="contact-value">+91 8384898652</div>
          </div>
        </a>

        <a className="contact-card" href="https://github.com/CodewithAyu01" target="_blank" rel="noreferrer">
          <span className="contact-icon"><GitHubIcon /></span>
          <div>
            <div className="contact-label">GITHUB</div>
            <div className="contact-value">CodewithAyu01</div>
          </div>
        </a>

        <a className="contact-card" href="https://www.linkedin.com/in/ayushi-sain123/" target="_blank" rel="noreferrer">
          <span className="contact-icon"><LinkedInIcon /></span>
          <div>
            <div className="contact-label">LINKEDIN</div>
            <div className="contact-value">ayushi-sain123</div>
          </div>
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
