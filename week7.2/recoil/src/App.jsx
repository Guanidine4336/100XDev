import { useContext, useState } from 'react';
import './App.css';
import { CountContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';


// Context Apis helps to pass props without passing it to everychild
// improves code readbility


// RecoilRoot
// atom
// useRecoilState
// useRecoilValue
// useSetRecoilState
// selector=does usememo wala thing

// [count,setCount]=useState(0)
// useRecoilValue,useSetRecoilState,useRecoilState

function App() {
  

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      
    </div>
  );
}

function Count() {
  return <div>
    <Countrendered/>

    <Buttons />
  
  </div>;
}


function Countrendered() {
  const count = useRecoilValue(countAtom); 

  return <div>
    {count}
    <Evencountrenderer/>
  </div>
}


function Evencountrenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven?"it is even":null}
  </div>
}
function Buttons() {
  const [count,setCount]=useRecoilState(countAtom);

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
