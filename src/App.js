import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

function App() {
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    fetch("api/hotels/")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div className="App">
      <h1>Hotels </h1>
      {hotels === null ? <LoadingMask /> : "" /* JSON.stringify(hotels) */}
      {hotels && hotels.map((hotel) => <Hotel key={hotel.name} hotel={hotel} />)}
    </div>
  );
}

export default App;
