import React from "react";
import { Navigate } from "react-router-dom";
import { Background } from "./Login";
import styled from "styled-components";

function TodoList() {
  return (
    <>
      {localStorage.getItem("access_token") === null ? (
        <Navigate to="/admin" replace={true} />
      ) : (
        <Background>
          <LogoutButton></LogoutButton>todolist
        </Background>
      )}
    </>
  );
}

const LogoutButton = styled.button``;

export default TodoList;
