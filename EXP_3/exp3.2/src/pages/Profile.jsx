import myPhoto from './me.jpeg'

function Profile() {
  return (
    <div className="container">
      <div className="card">
         <img
          src={myPhoto}
          alt="Profile"
          className="profile-img"
        />
        <h2>Radhika Singla</h2>
        <h4>Data Analyst | SDE Aspirant</h4>
        <p>B.Tech CSE (AI & ML) student passionate about tech.</p>
        <a
          href="https://drive.google.com/file/d/1Ymjuyy1wRLbpguMB56vJE6mFOqEGL5uf/view?usp=drive_link"
          target="_blank"
        >
        <button className="resume-btn">View Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Profile
