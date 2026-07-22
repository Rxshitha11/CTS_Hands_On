import './App.css';

function App() {

  const players = [
    {
      id: 1,
      name: "Virat Kohli",
      role: "Batsman",
      team: "India"
    },
    {
      id: 2,
      name: "Rohit Sharma",
      role: "Batsman",
      team: "India"
    },
    {
      id: 3,
      name: "Jasprit Bumrah",
      role: "Bowler",
      team: "India"
    },
    {
      id: 4,
      name: "Hardik Pandya",
      role: "All Rounder",
      team: "India"
    }
  ];

  return (
    <div className="App">
      <h1>Cricket Players</h1>

      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Player</th>
            <th>Role</th>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.role}</td>
              <td>{player.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;