import "./App.css";
import { Search } from "./Components/Search";
import { TodoBox } from "./Components/TodoBox";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoBox />} />
      <Route path="/search" element={<Search/>} />
    </Routes>
  );
}

export default App;
