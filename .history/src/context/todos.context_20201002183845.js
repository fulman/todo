import React, { createContext, useReducer } from "react";
import TodoReducer from "../reducers/todo.reducer";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Finish React Course", completed: false },
  { id: 2, task: "Finish Homework", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(TodoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
