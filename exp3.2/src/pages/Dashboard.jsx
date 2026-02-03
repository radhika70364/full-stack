function Dashboard() {
  const skills = ['Python', 'React', 'SQL', 'ML', 'Problem Solving']

  return (
    <div className="container">
      <h2>My Skills</h2>
      <div className="grid">
        {skills.map((skill, i) => (
          <div className="card" key={i}>
            <h3>{skill}</h3>
            <p>Intermediate</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
