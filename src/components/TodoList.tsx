import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, onRemove, onChangeTodo }: any) {
  return (
    <>
      <ListWrap>
        {todos.map((todo: any) => (
          <TodoListItem
            todos={todos}
            todo={todo}
            onRemove={onRemove}
            onChangeTodo={onChangeTodo}
            key={todo.id}
          />
        ))}
      </ListWrap>
    </>
  );
}
const ListWrap = styled.ul`
  padding: 10px 15px;
  border-bottom: 1px solid #8383ff;
  width: 100%;
  height: 100%;
`;

export default TodoList;
