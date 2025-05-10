export default function Skills() {
    const skills = [
      { name: "Next.js", level: "Expert" },
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
    ];
  
    return (
      <div className="page">
        <h1>My Tech Stack</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>Level: {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }