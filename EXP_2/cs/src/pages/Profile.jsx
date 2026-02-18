import React from "react";

export default function Profile() {
  const projects = [
    { id: 1, title: "Portfolio Website", desc: "React + Vite personal site" },
    { id: 2, title: "ToDo App", desc: "CRUD app with localStorage" },
  ];

  const internships = [
    { id: 1, company: "Acme Co.", role: "Frontend Intern", period: "Jun 2024 - Aug 2024" },
  ];

  return (
    <div>
      <h2>Profile</h2>

      <section className="mt-3">
        <h5>Name</h5>
        <p>John Doe</p>
      </section>

      <section className="mt-3">
        <h5>Job Role</h5>
        <p>Frontend Developer</p>
      </section>

      <section className="mt-3">
        <h5>Projects</h5>
        <ul className="list-group">
          {projects.map((p) => (
            <li key={p.id} className="list-group-item">
              <strong>{p.title}</strong> — {p.desc}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-3">
        <h5>Internships</h5>
        <ul className="list-group">
          {internships.map((i) => (
            <li key={i.id} className="list-group-item">
              <strong>{i.company}</strong> — {i.role} ({i.period})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
