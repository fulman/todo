import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Finish React Course", completed: false },
  { id: 2, task: "Finish Homework", completed: false },
];

export const TodoContext = createContext();

export function TodoProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodoContext.Provider value={todosStuff}>
      {props.children}
    </TodoContext.Provider>
  );
}
