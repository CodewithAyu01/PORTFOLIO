import { useEffect, useState } from "react";

function getInitialTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {theme === "light" ? "☾" : "☀"}
    </button>
  );
}

export default ThemeToggle;
