import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingMask from "./components/LoadingMask";
import mockerserver from "./api/mockserver";

function App() {
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    fetch(makeServer())
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  const data = [
    {
      name: "Hotel Nulla sit amet",
      stars: 3,
      city: "Los Angeles",
    },
    {
      name: "Hotel Curabitur suscipit suscipit",
      stars: 4,
      city: "Las Vegas",
    },
    {
      name: "Hotel Donec id justo",
      stars: 5,
      city: "San Francisco",
    },
  ];

  return (
    <div className="App">
      <h1>Hotels</h1>
      {hotels === null ? <LoadingMask /> : ""}
    </div>
  );
}

export default App;
