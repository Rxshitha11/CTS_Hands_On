import './App.css';

function App() {

  const offices = [
    {
      id: 1,
      name: "Tech Park",
      location: "Chennai",
      rent: 25000,
      availability: "Available"
    },
    {
      id: 2,
      name: "Business Hub",
      location: "Bangalore",
      rent: 35000,
      availability: "Occupied"
    },
    {
      id: 3,
      name: "Innovation Tower",
      location: "Hyderabad",
      rent: 28000,
      availability: "Available"
    },
    {
      id: 4,
      name: "Corporate Plaza",
      location: "Pune",
      rent: 32000,
      availability: "Available"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>

      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Office Name</th>
            <th>Location</th>
            <th>Rent (₹)</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {offices.map((office) => (
            <tr key={office.id}>
              <td>{office.id}</td>
              <td>{office.name}</td>
              <td>{office.location}</td>
              <td>{office.rent}</td>
              <td>{office.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;