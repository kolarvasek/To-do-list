import React, { useState } from "react";
import "./App.css"

export default function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() === "") {
      return;
    }
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: item, completed: false },
    ]);
    setItem("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function Task() {
    const count = todos.length;
    if (count === 1) {
      return <h2 className="header">You currently have 1 task</h2>;
    } else if (count === 0) {
      return <h2 className="header">No tasks</h2>;
    } else {
      return <h2 className="header">You currently have {count} tasks</h2>;
    }
  }

  return (
    <div>
      <h1 className="header">To-Do List</h1>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            id="item"
            placeholder="New Task"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      {Task()}
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
