import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, onRemove, onChangeTodo, onToggle }: any) {
  return (
    <>
      {todos &&
        todos.map((todoItem: any) => (
          <TodoListItem
            todos={todos}
            todoItem={todoItem}
            onRemove={onRemove}
            onChangeTodo={onChangeTodo}
            onToggle={onToggle}
            key={todoItem.id}
          />
        ))}
    </>
  );
}

export default TodoList;
