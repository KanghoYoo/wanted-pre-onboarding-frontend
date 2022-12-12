import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./page/Login";
import TodoList from "./page/TodoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
