import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <h1>COUNTER SPA</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
}

export default App;
