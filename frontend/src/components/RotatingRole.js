import { useEffect, useState } from "react";

const ROLES = [
  "Software Development Engineer",
  "Machine Learning Engineer",
  "Full-Stack Developer",
  "API Architect",
];

function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!deleting && charCount === currentRole.length) {
      const pause = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(pause);
    }

    if (deleting && charCount === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const speed = deleting ? 28 : 45;
    const t = setTimeout(() => {
      setCharCount((c) => c + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charCount, deleting, roleIndex]);

  const currentText = ROLES[roleIndex].slice(0, charCount);

  return (
    <span className="hero-kicker">
      {currentText}
      <span className="rotating-cursor" />
    </span>
  );
}

export default RotatingRole;
