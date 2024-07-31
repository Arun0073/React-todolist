import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { Search } from "./Search";
import { useLocation } from "react-router-dom";
uuidv4();

export const TodoBox = () => {
  const [todos, setTodos] = useState([]);
  const location = useLocation();
  console.log(todos);

  const addTodo = (todo) => { //adding the task to list 
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        timestamp: "",
        isEdited: false,
        prevTasks: [],
      },
    ]);
  };

  const toggleComplete = (id) => { //updating the task once completed
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => { //deleting the task to list
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => { //editing the current todo list
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, isEdited: !todo.isEdited }
          : todo
      )
    );
  };

  const editTask = (task, id) => { //editing the task to list
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: !todo.isEditing,
              timestamp: new Date().toISOString(),
              prevTasks: [
                ...todo.prevTasks,
                { task: todo.task, timestamp: todo.timestamp },
              ],
            }
          : todo
      )
    );
  };

  // Function to get query parameter from URL
  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  // Get the search query from URL
  const searchQuery = getQueryParam("query") || "";

  // Filter todos based on the search query
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="TodoBox">
      <h1>Get Things Done!</h1>
      <Search />
      <TodoForm addTodo={addTodo} />
      {filteredTodos.map((todo, i) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={i}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
