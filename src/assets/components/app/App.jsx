import { useState } from "react";
import Sheet from "../sheet/Sheet";
import "./App.css";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [count, setCount] = useState(0);

  const toogleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container">
      <Sheet isFlipped={isFlipped}></Sheet>
      <button onClick={toogleFlip}>Flip</button>
    </div>
  );
}

export default App;
