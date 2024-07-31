import React from "react";
import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => { 
  const [value, setValue] = useState(task.task); //state to set vlaue of task coming as prop

  const handleSubmit = (e) => { //function to update the task from previous task
    e.preventDefault();
    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
