import React, { useState } from "react";

const NewTodoForm = ({ addToDo }) => {
  const INITIAL_STATE = { ToDo: "" };
  const [todoData, setToDoData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addToDo(todoData);
    setToDoData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setToDoData(tData => ({
      ...tData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ToDo">ToDo:</label>
      <input
        id="ToDo"
        name="ToDo" 
        value={todoData.ToDo} 
        onChange={handleChange}
      />

      <button>Add a new item!</button>
    </form>
  );
};

export default NewTodoForm;
