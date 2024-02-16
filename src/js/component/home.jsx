import React, { useState } from 'react';

const home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
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
            {todo}
            <button class="delete-button" onClick={() => handleDelete(index)}><i class="fa-solid fa-trash"></i></button>
          </li>
        ))}
      </ul>
      <div className='Counter'>
        {todos.length === 0 ? (<p>No Duty</p>) : (`${todos.length} duty to do!`)}
      </div>
    </div>
  );
};

export default home;

