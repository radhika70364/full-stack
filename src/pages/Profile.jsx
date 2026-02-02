import profilePic from './me.jpeg';

function Profile() {
  return (
    <div className="page">
      <div className="profile-card">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-img"
        />

        <h2>Radhika Singla</h2>
        <h4>Data Analyst | SDE Aspirant</h4>

        <p>
          B.Tech CSE (AI & M    L) student passionate about data, problem-solving,
          and building impactful tech solutions.
        </p><a
          href="https://drive.google.com/file/d/1Ymjuyy1wRLbpguMB56vJE6mFOqEGL5uf/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-btn">View Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Profile
