import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Finish React Course", completed: false },
  { id: 2, task: "Finish Homework", completed: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
