import axios from "axios";
import { TodoType } from "./TodoInterface";

export const getTodos = () =>
  axios.get(`https://pre-onboarding-selection-task.shop/todos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

export const createTodo = (text: string) =>
  axios
    .post(
      `https://pre-onboarding-selection-task.shop/todos`,
      { todo: text },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => getTodos());

export const updateTodo = (todoItem: TodoType, item: string | boolean) =>
  axios
    .put(
      `https://pre-onboarding-selection-task.shop/todos/${todoItem.id}`,
      {
        todo: typeof item === "string" ? item : todoItem.todo,
        isCompleted: typeof item === "string" ? false : item,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => getTodos());

export const delateTodo = (id: number) =>
  axios
    .delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
      data: { commentId: 1, userId: 0 },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(() => getTodos());
