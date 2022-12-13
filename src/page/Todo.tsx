import React, { useCallback, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { Background, Container } from "./Login";
import styled from "styled-components";
import TodoList from "../components/TodoList";

function Todo() {
  const [todos, setTodos] = useState([{ id: 1, isCheck: false, text: "hi" }]);
  const [addText, setAddText] = useState("");

  const onChangeTodo = (value: any) => {
    setTodos(value);
  };

  const nextId = useRef(2);

  const onInsert = useCallback(
    (text: any) => {
      const todo = {
        id: nextId.current,
        isCheck: false,
        text: text,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  const useOnChangeAddText = useCallback((e: any) => {
    setAddText(e.target.value);
  }, []);

  const useAddComponent = () => {
    onInsert(addText);
    setAddText("");
  };

  const onRemove = useCallback(
    (id: any) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <>
      {localStorage.getItem("access_token") === null ? (
        <Navigate to="/admin" replace={true} />
      ) : (
        <Background>
          <LogoutButton>Logout</LogoutButton>
          <TodoContainer>
            <MainText>Todo List</MainText>
            <ListContainer>
              <TodoList
                todos={todos}
                onRemove={onRemove}
                onChangeTodo={onChangeTodo}
              ></TodoList>
            </ListContainer>
            <AddContainer>
              <AddInputText
                onChange={useOnChangeAddText}
                value={addText}
              ></AddInputText>
              <AddTextButton onClick={useAddComponent}>추가</AddTextButton>
            </AddContainer>
          </TodoContainer>
        </Background>
      )}
    </>
  );
}

const LogoutButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #5e5eff;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 16px;
`;

const TodoContainer = styled(Container)`
  width: 450px;
  height: 550px;
`;
const MainText = styled.h1`
  flex: 1;
  background-color: #5e5eff;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  padding-top: 15px;
  color: #fff;
  font-size: 40px;
  text-align: center;
`;

const ListContainer = styled.div`
  flex: 7;
  display: flex;
  direction: column;
  width: 100%;
`;

const AddContainer = styled.div`
  display: flex;
  direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #5e5effa2;
  border-top: 4px solid #9999ff;
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  height: 60px;
`;
const AddInputText = styled.input`
  background: none;
  border: none;
  border-bottom: 3px solid #4c4cff;
  width: 340px;
  height: 40px;
  font-size: 16px;
  :focus {
    outline: none;
    border-bottom: 4px solid #5e5eff;
  }
`;

const AddTextButton = styled.button`
  background-color: #5e5eff;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  width: 80px;
  height: 40px;
`;

export default Todo;
