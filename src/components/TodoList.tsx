import React from "react";
import { todoPropsType, TodoType } from "../page/todo/TodoInterface";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, onRemove, onChangeTodo, onToggle }: todoPropsType) {
  return (
    <>
      {todos &&
        todos.map((todoItem: TodoType) => (
          <TodoListItem
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
