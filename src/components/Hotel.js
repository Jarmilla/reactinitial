import React, { useState } from "react";
import Subsription from "./Subscription";

function Hotel({ hotel }) {
  const [isShown, setIsShown] = useState(false);
  const [isEmaiInputShown, setIsEmaiInputShown] = useState(false);

  const [email, setEmail] = useState("");

  return (
    <div className="hotel">
      <p>{hotel.name}</p>
      <button onClick={() => setIsShown(!isShown)}>{isShown ? "Show less" : "Show more"}</button>
      {isShown && (
        <div>
          <p>
            {hotel.city} ({hotel.stars})
          </p>
          <button onClick={() => setIsEmaiInputShown(!isEmaiInputShown)}>Request more info about {hotel.name}</button>
        </div>
      )}
      {isEmaiInputShown && <Subsription email={email} setEmail={setEmail} hotel={hotel.name} />}
    </div>
  );
}

export default Hotel;
