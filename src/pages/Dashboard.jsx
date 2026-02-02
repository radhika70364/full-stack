function Dashboard() {
  const skills = [
    'Python',
    'Data Analysis',
    'Machine Learning',
    'React',
    'SQL',
    'Problem Solving'
  ]

  return (
    <div className="page">
      <h2 className="section-title">My Skills</h2>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill}</h3>
            <p>Intermediate</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
