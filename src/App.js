import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'
import React, {useState, useRef} from 'react';

function App() {
  const [todos, setTodo] = useState([{id: 1, name: 'Todo 1', complete: true}])
  const toDoNameRef = useRef();

  function addToDo(){
    const name = toDoNameRef.current.value
    // todos.push({id: todos.length + 1, name: toDoNameRef.current.value, complete: false})
    setTodo(prevState => {
     return [...prevState, {id: prevState.length + 1, name: name, complete: false}] 
    })
    toDoNameRef.current.value = null
  }

  function clearComplete(){
    setTodo(prevState => {
      return prevState.filter(todo => todo.complete === false)
    })
  }

  return (
    <>
    <ToDoList todos = {todos}/>
    <input ref={toDoNameRef} type="text"></input>
    <button onClick={addToDo}>Add Todo</button>
    <button onClick={clearComplete}>Clear Complete</button>
    <p>{todos.length} Todos Left</p>
    </>
  );
}

export default App;
