import React, { useState } from 'react';

const FunctionalGreet = () => {
  const [message, setMessage] = useState("Hello");

  const toggleMessage = () => {
    setMessage(message === "Hello" ? "Goodbye" : "Hello");
  };

  return (
    <div>
      <h1>{message} from a Functional Component!</h1>
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
};

export default FunctionalGreet;
