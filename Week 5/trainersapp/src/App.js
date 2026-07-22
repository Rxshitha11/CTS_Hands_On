import './App.css';

function App() {

  const trainers = [
    {
      id: 1,
      name: "John",
      technology: "Java",
      experience: "8 Years"
    },
    {
      id: 2,
      name: "Priya",
      technology: "React",
      experience: "6 Years"
    },
    {
      id: 3,
      name: "Rahul",
      technology: "Python",
      experience: "10 Years"
    },
    {
      id: 4,
      name: "Sneha",
      technology: "Spring Boot",
      experience: "7 Years"
    }
  ];

  return (
    <div className="App">
      <h1>Trainer Details</h1>

      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Technology</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer.id}>
              <td>{trainer.id}</td>
              <td>{trainer.name}</td>
              <td>{trainer.technology}</td>
              <td>{trainer.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;