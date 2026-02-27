import UserForm from "./component/UserForm";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>User Registration Portal</h1>
      </header>

      <main className="main">
        <UserForm />
      </main>

      <footer className="footer">
        <p>© 2026 React Form Lab Experiment</p>
      </footer>
    </div>
  );
}

export default App;
