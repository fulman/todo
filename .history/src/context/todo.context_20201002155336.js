import React, { createContext } from "react";

const defaultTodos = [
  { id: 1, task: "Finish React Course", completed: false },
  { id: 2, task: "Finish Homework", completed: false },
];

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  return <TodoContext.Provider value={}>{props.children}</TodoContext.Provider>;
};
