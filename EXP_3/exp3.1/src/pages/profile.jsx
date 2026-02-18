function Profile() {
return (
    <div style={pageStyle}>
        <img src="/me.jpeg" alt="Profile" style={{width: '150px', borderRadius: '50%'}} />
        <p>Name: Radhika</p>
        <p>Course: B.Tech CSE (AI & ML)</p>
    </div>
)
}

const pageStyle = {
  padding: '40px'
}

export default Profile
