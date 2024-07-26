import './App.css';
import Todo from './Todo';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const storedTodo = localStorage.getItem('todo');
    if (storedTodo) {
      try {
        const parsedTodo = JSON.parse(storedTodo);
        setTodo(parsedTodo);
      } catch (error) {
        console.error('Error parsing todo data from localStorage:', error);
        
        localStorage.removeItem('todo');
      }
    }
  }, []);
  

  function handleTodo() {
    let val = ref.current.value.trim();
    if (val) {
      setTodo((prevTodo) => [...prevTodo, val]);
      ref.current.value = ''; 
      localStorage.setItem('todo', JSON.stringify([...todo, val]));
    }
  }

  function handleCancelfn(li) {
    
    let filteredTodo = todo.filter((item) => item !== li);
    setTodo(filteredTodo);

    
    localStorage.setItem('todo', JSON.stringify(filteredTodo));
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className='todo-input-container'>
        <input ref={ref} className='todo-input' />
        <button onClick={handleTodo} className='todo-button'>Add</button>
      </div>
      <div>
        {todo.map((item, index) => (
          <Todo key={index} item={item} handleCancelfn={handleCancelfn} />
        ))}
      </div>
    </div>
  );
}

export default App;
