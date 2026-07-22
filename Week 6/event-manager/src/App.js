import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Conference", date: "15 Aug 2026", venue: "Chennai" },
    { id: 2, name: "React Workshop", date: "22 Aug 2026", venue: "Bangalore" },
    { id: 3, name: "Hackathon", date: "30 Aug 2026", venue: "Hyderabad" }
  ]);

  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    venue: ""
  });

  const registerEvent = (name) => {
    setMessage(`✅ Successfully Registered for ${name}`);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const addEvent = () => {
    if (
      newEvent.name === "" ||
      newEvent.date === "" ||
      newEvent.venue === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const event = {
      id: Date.now(),
      ...newEvent
    };

    setEvents([...events, event]);

    setNewEvent({
      name: "",
      date: "",
      venue: ""
    });
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ textAlign: "center" }}>🎉 Event Manager</h1>

      <input
        type="text"
        placeholder="Search Event..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px"
        }}
      />

      <h2>Add New Event</h2>

      <input
        type="text"
        placeholder="Event Name"
        value={newEvent.name}
        onChange={(e) =>
          setNewEvent({ ...newEvent, name: e.target.value })
        }
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Date"
        value={newEvent.date}
        onChange={(e) =>
          setNewEvent({ ...newEvent, date: e.target.value })
        }
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Venue"
        value={newEvent.venue}
        onChange={(e) =>
          setNewEvent({ ...newEvent, venue: e.target.value })
        }
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <button
        onClick={addEvent}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Add Event
      </button>

      <hr />

      {filteredEvents.map((event) => (
        <div
          key={event.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginTop: "20px"
          }}
        >
          <h2>{event.name}</h2>

          <p>
            <b>Date:</b> {event.date}
          </p>

          <p>
            <b>Venue:</b> {event.venue}
          </p>

          <button
            onClick={() => registerEvent(event.name)}
            style={{
              marginRight: "10px",
              padding: "8px 15px"
            }}
          >
            Register
          </button>

          <button
            onClick={() => deleteEvent(event.id)}
            style={{
              padding: "8px 15px"
            }}
          >
            Delete
          </button>
        </div>
      ))}

      <h3
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        {message}
      </h3>
    </div>
  );
}

export default App;