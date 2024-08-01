import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleOnInputChange() {
    setDisplayName(name);
  }

  return (
    <div className="container">
      <h1>Hello {displayName}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleOnInputChange}>Submit</button>
    </div>
  );
}

export default App;
