import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TodoList from "../../components/TodoList";
import { TodoType } from "./TodoInterface";
import {
  LogoutButton,
  TodoContainer,
  ListContainer,
  ListWrap,
  AddContainer,
  AddInputText,
  AddTextButton,
  MainText,
} from "./TodoStyleds";
import { Background } from "../login/LoginStyles";
import { createTodo, delateTodo, getTodos, updateTodo } from "./TodoAPI";

function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [addText, setAddText] = useState<string>("");
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.setItem("access_token", "");
    window.alert("로그아웃되었습니다.");
    navigate("/", { replace: true });
  };

  const onChangeTodo = (todoItem: TodoType, item: string) => {
    updateTodo(todoItem, item).then(function (response) {
      setTodos(response.data);
    });
  };

  const onToggle = (todoItem: TodoType, item: boolean) => {
    updateTodo(todoItem, item).then(function (response) {
      setTodos(response.data);
    });
  };

  const useOnChangeAddText = useCallback((e: any) => {
    setAddText(e.target.value);
  }, []);

  const onClickAddTodo = () => {
    createTodo(addText).then(function (response) {
      setTodos(response.data);
      setAddText("");
    });
  };

  const onRemove = (id: number) => {
    delateTodo(id).then(function (response) {
      setTodos(
        response.data.filter((todoItem: TodoType) => todoItem.id !== id)
      );
    });
  };

  useEffect(() => {
    getTodos().then(function (response) {
      setTodos(response.data);
    });
  }, []);

  return (
    <>
      {localStorage.getItem("access_token") === "" ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Background>
          <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
          <TodoContainer>
            <MainText>Todo List</MainText>
            <ListContainer>
              <ListWrap>
                <TodoList
                  todos={todos}
                  onRemove={onRemove}
                  onChangeTodo={onChangeTodo}
                  onToggle={onToggle}
                ></TodoList>
              </ListWrap>
            </ListContainer>
            <AddContainer>
              <AddInputText
                onChange={useOnChangeAddText}
                value={addText}
              ></AddInputText>
              <AddTextButton onClick={onClickAddTodo}>추가</AddTextButton>
            </AddContainer>
          </TodoContainer>
        </Background>
      )}
    </>
  );
}

export default Todo;
