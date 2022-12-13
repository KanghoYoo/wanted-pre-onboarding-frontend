import React, { useState } from "react";
import styled from "styled-components";

function TodoListItem({ todos, todo, onRemove, onChangeTodo }: any) {
  const [isEdited, setIsEdited] = useState(false);
  const [modifyText, setModifyText] = useState(todo.text);

  const { id, isCheck, text } = todo;

  const onClickConfirmButton = () => {
    const modifyTodoList = todos.map((item: any) => ({
      ...item,
      text: item.id === todo.id ? modifyText : item.text,
    }));
    onChangeTodo(modifyTodoList);
    console.log(modifyTodoList);
    setIsEdited(false);
  };

  const onChangeEditInput = (e: any) => {
    setModifyText(e.target.value);
  };

  const onClickEditButton = () => {
    setIsEdited(true);
  };

  const onClickCancleButton = () => {
    setIsEdited(false);
  };

  return (
    <LiTodoItem>
      <TodoTextLabel htmlFor="todoCheck">
        <CheckTodoInput type="checkbox" id="todoCheck"></CheckTodoInput>
        {isEdited ? (
          <ModifyInputText onChange={onChangeEditInput}></ModifyInputText>
        ) : (
          text
        )}
      </TodoTextLabel>
      <ButtonWrapper>
        <ModifyTodoButton
          onClick={isEdited ? onClickConfirmButton : onClickEditButton}
        >
          {isEdited ? "확인" : "수정"}
        </ModifyTodoButton>
        <RemoveTodoButton
          onClick={isEdited ? onClickCancleButton : () => onRemove(id)}
        >
          {isEdited ? "취소" : "삭제"}
        </RemoveTodoButton>
      </ButtonWrapper>
    </LiTodoItem>
  );
}
const LiTodoItem = styled.li`
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 40px;
`;

const TodoTextLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  :after {
    text-decoration: line-through;
  }
`;
const CheckTodoInput = styled.input`
  margin-right: 5px;
`;

const ModifyInputText = styled.input`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
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

export default TodoListItem;
function setTodos(nextTodoList: any) {
  throw new Error("Function not implemented.");
}
