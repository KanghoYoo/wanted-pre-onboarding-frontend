import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Background, Container } from "./Login";
import styled from "styled-components";

function TodoList() {
  useEffect(() => {}, []);

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
              <ListWrap>
                <TodoTextLabel>
                  <CheckTodoInput type="checkbox"></CheckTodoInput>
                  텍스트
                </TodoTextLabel>
                <ButtonWrapper>
                  <ModifyTodoButton>수정</ModifyTodoButton>
                  <RemoveTodoButton>삭제</RemoveTodoButton>
                </ButtonWrapper>
              </ListWrap>
            </ListContainer>
            <AddContainer>
              <AddInputText></AddInputText>
              <AddTextButton>추가</AddTextButton>
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
const ListWrap = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #8383ff;
  width: 100%;
  height: 40px;
`;

const TodoTextLabel = styled.label``;
const CheckTodoInput = styled.input`
  margin-right: 5px;
`;

const ButtonWrapper = styled.div``;
const ModifyTodoButton = styled.button`
  background: #5e5eff;
  border: none;
  width: 40px;
  height: 20px;
  margin-left: 5px;
  border-radius: 4px;
  color: white;
`;
const RemoveTodoButton = styled.button`
  background: #5e5eff;
  border: none;
  width: 40px;
  height: 20px;
  margin-left: 5px;
  border-radius: 4px;
  color: white;
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

export default TodoList;
