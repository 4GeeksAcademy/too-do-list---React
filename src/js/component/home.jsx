import React, { useState, useEffect } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const urlTodos = "https://playground.4geeks.com/apis/fake/todos/user/josereimondez29";
    
    fetch(urlTodos)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const addTodo = () => {
    if (inputValue) {
      const newTodo = {
        label: inputValue,
        done: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? addTodo() : null)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.label}
            <button className="delete-button" onClick={() => handleDelete(index)}><i className="fa-solid fa-trash"></i></button>
          </li>
        ))}
      </ul>
      <div className='Counter'>
        {todos.length === 0 ? (<p>No Duty</p>) : (`${todos.length} task`)}
      </div>
    </div>
  );
};

export default Home;
