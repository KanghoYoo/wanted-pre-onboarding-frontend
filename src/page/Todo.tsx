import React, { useCallback, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Background, Container } from "./Login";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import axios from "axios";

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [addText, setAddText] = useState("");
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.setItem("access_token", "");
    navigate("/", { replace: true });
  };

  const onChangeTodo = (text: any, todoItem: any) => {
    axios
      .put(
        `https://pre-onboarding-selection-task.shop/todos/${todoItem.id}`,
        {
          todo: text,
          isCompleted: false,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setTodos(
          todos.map((item: any) => ({
            ...item,
            todo: item.id === todoItem.id ? text : item.todo,
          }))
        );
      })
      .catch(function (error) {
        console.log(error);
        console.log(text);
      });
  };

  const onToggle = useCallback(
    (todoItem: any) => {
      axios
        .put(
          `https://pre-onboarding-selection-task.shop/todos/${todoItem.id}`,
          {
            todo: todoItem.todo,
            isCompleted: !todoItem.isCompleted,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          setTodos(
            todos.map((todo: any) =>
              todo.id === todoItem.id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
            )
          );
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [todos]
  );

  const useOnChangeAddText = useCallback((e: any) => {
    setAddText(e.target.value);
  }, []);

  const useAddComponent = () => {
    axios
      .post(
        `https://pre-onboarding-selection-task.shop/todos`,
        { todo: addText },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setTodos([...todos, response.data]);
        console.log(response.data);
        setAddText("");
      });
  };

  const onRemove = useCallback(
    (id: any) => {
      axios
        .delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
          data: { commentId: 1, userId: 0 },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(function (response) {
          setTodos(todos.filter((todoItem) => todoItem.id !== id));
        });
    },
    [todos]
  );

  useEffect(() => {
    axios
      .get(`https://pre-onboarding-selection-task.shop/todos`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(function (response) {
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
  overflow: auto;
  width: 100%;
`;
const ListWrap = styled.ul`
  padding: 10px 15px;
  width: 100%;
  height: 100%;
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
