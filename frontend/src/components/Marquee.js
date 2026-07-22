const STACK = [
  "React", "Node.js", "Express", "Flask", "MongoDB", "MySQL",
  "Python", "Scikit-learn", "Supabase", "Firebase", "Docker", "REST APIs",
];

function Marquee() {
  const items = [...STACK, ...STACK]; // duplicated for seamless loop

  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-pill" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;