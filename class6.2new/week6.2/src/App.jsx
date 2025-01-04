import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function Clicker() {
    console.log("hi bhai");
  }

  return (
    <div>
      <Butttoncomp onClick={Clicker} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

function Butttoncomp({ onClick }) { // Accept `onClick` as a prop
  console.log("render");
  return (
    <div>
      <button onClick={onClick}> {/* Use the passed `onClick` function */}
        Bsdka
      </button>
    </div>
  );
}

export default App;
