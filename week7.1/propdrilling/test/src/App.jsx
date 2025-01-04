import { useContext, useState } from 'react';
import './App.css';
import { CountContext } from './context';


// Context Apis helps to pass props without passing it to everychild
// improves code readbility
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
      
      
    </div>
  );
}

function Count({ count,setCount }) {
  return <div>
    <Countrendered/>
  
    <Buttons setCount={setCount} />
  
  </div>;
}


function Countrendered() {
  const count = useContext(CountContext ); 

  return <div>
    {count}
  </div>
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1); // Corrected `onClick`
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1); // Corrected `onClick`
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
