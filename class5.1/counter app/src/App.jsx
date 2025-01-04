import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}

// CustomButton Component
function CustomButton(props) {
  function handler() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={handler}>
      Counter {props.count}
    </button>
  );
}

export default App;
