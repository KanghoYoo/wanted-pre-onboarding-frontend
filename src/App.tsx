import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./page/Login";
import TodoList from "./page/TodoList";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
