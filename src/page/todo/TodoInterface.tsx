export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export type todoPropsType = {
  todos: TodoType[];
  onRemove(id: number): any;
  onChangeTodo(todoItem: TodoType, item: string): any;
  onToggle(todoItem: TodoType, item: boolean): any;
};

export type todoListPropsType = {
  todoItem: TodoType;
  onRemove(id: number): any;
  onChangeTodo(todoItem: TodoType, item: string): any;
  onToggle(todoItem: TodoType, item: boolean): any;
};
