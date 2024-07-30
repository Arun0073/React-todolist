
#React-ToDoList

This application is built using React with Material UI.

This application uses basic concepts of HTML,CSS along with state management libraries of React.



## System Design

#### Architecture

The application follows a single-page application (SPA) architecture built with React.

#### Components

- App: The main component that holds the state and renders other components.
- TodoList: Displays the list of todo items.
- TodoItem: Represents an individual task with options to complete or delete the task.
- AddTodo: A form component for adding new tasks.
- Search: A input field that allows user to search based on URL parameters.

#### State Management

State management is primarily handled using React's useState  hook along with useLocation and useNavigate hook from react-router-dom. 

#### Data Flow
Data flows in a unidirectional manner:

- Adding a Task: The AddTodo component triggers a state update in the App component.
- Displaying Tasks: The TodoList component receives the list of tasks as props from the App component and renders TodoItem components.
- Completing/Deleting Tasks: Actions in the TodoItem component trigger state updates in the App component, which in turn re-renders the updated task list.
- Editing a Task: The EditTodo component allows users to edit a task, storing the previous task version and the timestamp of the edit.
- Searching Tasks: The TodoList component handles URL parameter-based search to filter and display tasks.

#### Styling

Styling is handled using CSS modules or styled-components to ensure styles are scoped locally and do not conflict with each other.
## Features

- Add a Task to list ✅
- Editing the task 🌟
- Once completed the task will be marked 🚩
- Delete the task ⚛️
- Search using URL Parameters 🔍
- user can view Previous Tasks with their Timestamps 🖋️


## Run Locally

Clone the project

```bash
  git clone https://github.com/Arun0073/React-todolist
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

