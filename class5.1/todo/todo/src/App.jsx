import { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      desc: "at 7 am",
      comp: false,
    },
    {
      title: "Study DSA",
      desc: "for 3 hrs",
      comp: false,
    },
  ]);

  function addTodo() {

    // what is this syntax
    // ...array append krdega existing array me
    // [1 2 3]
    // [...array,4] => [1 2 3 4]
    setTodos([...todos, {
      title: "new todo",
      desc: "description",
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function (todo, index) {
        return <Todo key={index} title={todo.title} desc={todo.desc} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h1>{props.desc}</h1>
    </div>
  );
}

export default App;
