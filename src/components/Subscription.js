import React, { useState } from "react";

function Subsription({ email, setEmail, hotel }) {
  function postData() {
    console.log(email, hotel);
    fetch("api/hotels/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, hotel: hotel }),
    })
      .then((resp) => resp.json().then((data) => console.log(data)))
      .catch((err) => console.log(err));
  }

  const [isValidEmail, setIsValidEmail] = useState(false);

  function validation(str) {
    if (str.includes("@") && str.includes(".")) return setIsValidEmail(true);
    else setIsValidEmail(false);
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validation(e.target.value);
        }}
        type="text"
      />
      <button onClick={postData} disabled={isValidEmail ? false : true}>
        Submit
      </button>
    </div>
  );
}

export default Subsription;
