import React from "react";
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // state to set the value of the tasks into list

  const handleSubmit = (e) => { //function to add tasks to todo list
    e.preventDefault();
    addTodo(value);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
