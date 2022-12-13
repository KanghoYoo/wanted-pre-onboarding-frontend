import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./page/Login";
import Todo from "./page/Todo";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
