import { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";
import LoginButton from "./components/LoginButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? <UserPage /> : <GuestPage />}

      <br />

      {isLoggedIn ? (
        <LoginButton
          text="Logout"
          onClick={() => setIsLoggedIn(false)}
        />
      ) : (
        <LoginButton
          text="Login"
          onClick={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
}

export default App;