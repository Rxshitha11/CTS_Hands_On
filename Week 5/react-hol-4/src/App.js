import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="App">
      <h1 style={{ color: color }}>React HOL-4</h1>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("black")}>
        Reset
      </button>
    </div>
  );
}

export default App;