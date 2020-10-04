import React, { createContext } from "react";
import TodoReducer from "../reducers/todo.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Finish React Course", completed: false },
  { id: 2, task: "Finish Homework", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    TodoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
