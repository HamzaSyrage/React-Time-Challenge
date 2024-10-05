import Player from "./components/Player.jsx";
import Challenge from "./components/Challenge.jsx";
import { useRef } from "react";

function App() {
  const dialog = useRef();
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title="easy" goal={1} />
        <Challenge title="med" goal={5} />
        <Challenge title="hard" goal={10} />
        <Challenge title="pro" goal={30} />
      </div>
    </>
  );
}

export default App;
