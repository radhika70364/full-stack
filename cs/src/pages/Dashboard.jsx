import React from "react";

export default function Dashboard() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <div>
      <h2>Dashboard</h2>

      <section className="mt-3">
        <h5>Skills</h5>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {skills.map((s, idx) => (
            <span key={idx} className="badge bg-primary p-2">
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
