import { useState, useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const name = useRef();
  function handleClick() {
    setPlayerName(name.current.value);
    name.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName === "" ? "unknown entity" : playerName}</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
