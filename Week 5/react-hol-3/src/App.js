import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <h1>Live Text Preview</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name}</h2>
    </div>
  );
}

export default App;