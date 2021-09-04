import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'
import React, {useState, useRef} from 'react';

function App() {
  const [todos, setTodo] = useState(['todo 1', 'todo 2'])
  const toDoNameRef = useRef();

  function addToDo(){
    console.log(toDoNameRef.current.value)
  }

  return (
    <>
    <ToDoList todos = {todos}/>
    <input ref={toDoNameRef} type="text"></input>
    <button onClick={addToDo}>Add Todo</button>
    <button>Clear Complete</button>
    <p>{todos.length} Todos Left</p>
    </>
  );
}

export default App;
