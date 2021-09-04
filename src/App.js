import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'
import React, {useState} from 'react';

function App() {
  const [todos, setTodo] = useState(['todo 1', 'todo 2'])
  return (
    <>
    <ToDoList todos = {todos}/>
    </>
  );
}

export default App;
