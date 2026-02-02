import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import be from './be.webp';
import police from './police.webp';
import smiths from './smiths.webp';
import ldr from './ldr.webp';
function App() {
  const artists = [
    {
      name: "Billie Eilish",
      description: "Known for her unique voice and genre-defying pop hits like 'Bad Guy'.",
      image: be,
      genre: "Alternative Pop"
    },
    {
      name: "The Police",
      description: "A legendary rock band led by Sting, famous for 'Every Breath You Take'.",
      image: police,
      genre: "New Wave / Rock"
    },
    {
      name: "The Smiths",
      description: "Iconic 80s indie rock band known for Morrissey's lyrics and Marr's guitar.",
      image: smiths,
      genre: "Indie Rock"
    },
    {
      name: "Lana Del Rey",
      description: "Acclaimed for her cinematic style and exploration of tragic romance.",
      image: ldr,
      genre: "Dream Pop"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-uppercase fw-bold">Musical Legends</h2>

      <div className="row">
        {artists.map((artist, index) => (
          /* col-lg-3 ensures 4 cards fit in one row on large screens */
          <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow border-0">
              <div className="img-container">
                <img
                  src={artist.image}
                  className="card-img-top profile-img mt-3 mx-auto"
                  alt={artist.name}
                  style={{ width: "140px", height: "140px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{artist.name}</h5>
                <span className="badge bg-secondary mb-2">{artist.genre}</span>
                <p className="card-text small text-secondary">{artist.description}</p>
                <button className="btn btn-dark btn-sm mt-auto">Listen Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;