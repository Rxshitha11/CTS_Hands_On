import './App.css';

function App() {
  const cohorts = [
    {
      id: 1,
      name: "Java FSE",
      trainer: "Mr. John",
      strength: 45,
    },
    {
      id: 2,
      name: "React",
      trainer: "Ms. Priya",
      strength: 38,
    },
    {
      id: 3,
      name: "Python",
      trainer: "Mr. Rahul",
      strength: 42,
    },
  ];

  return (
    <div className="App">
      <h1>Cohort Tracker</h1>

      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cohort</th>
            <th>Trainer</th>
            <th>Strength</th>
          </tr>
        </thead>

        <tbody>
          {cohorts.map((cohort) => (
            <tr key={cohort.id}>
              <td>{cohort.id}</td>
              <td>{cohort.name}</td>
              <td>{cohort.trainer}</td>
              <td>{cohort.strength}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;