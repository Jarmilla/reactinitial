import React, { useState } from "react";

function Hotel({ hotel }) {
  const [isShown, setIsShown] = useState(false);
  const [isEmaiInputShown, setIsEmaiInputShown] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState("");

  function validation(str) {
    if (str.includes("@") && str.includes(".")) return setIsValidEmail(true);
  }

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
      {isEmaiInputShown && (
        <div>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
              validation(email);
            }}
            type="email"
          />
          <button disabled={isValidEmail ? false : true} required>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Hotel;
