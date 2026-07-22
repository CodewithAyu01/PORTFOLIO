import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
        Ayushi<span className="dot">.</span>
      </NavLink>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        ☰
      </button>

      <ul className={open ? "nav-links active" : "nav-links"}>
        {LINKS.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
