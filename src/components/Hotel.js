import React, { useState } from "react";

function Hotel({ hotel }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="hotel">
      <p>{hotel.name}</p>
      <button onClick={() => setIsShown(!isShown)}>{isShown ? "Show less" : "Show more"}</button>
      {isShown && (
        <div>
          <p>
            {hotel.city} ({hotel.stars})
          </p>
          <button>Request more info about {hotel.name}</button>
        </div>
      )}
    </div>
  );
}

export default Hotel;
