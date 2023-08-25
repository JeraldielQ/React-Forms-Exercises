import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm"; 
import { v4 as uuid } from "uuid";

function ToDoList() {
  const [items, setItems] = useState([]);

  const renderItems = () => {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.ToDo}
            <button onClick={() => removeItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    );
  };

  const addItem = todo => {
    let newItem = { ...todo, id: uuid() };
    setItems(items => [...items, newItem]);
  };

  const removeItem = itemId => {
    setItems(items => items.filter(item => item.id !== itemId));
  };

  return (
    <div className="ToDoList">
      <NewTodoForm addToDo={addItem} />
      {renderItems()}
    </div>
  );
}

export default ToDoList;

  
  