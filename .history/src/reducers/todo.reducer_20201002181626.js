import {v4 as uuid} from 'uuid';

const reducer = {state, action} => {
  switch(action.type){
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }]
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id)
    case "TOGGLE":
      return state.map((todo) =>
      todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    )
  }
}

toggleTodo: (todoId) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
},
updateTodo: (todoId, newTask) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, task: newTask } : todo
  );
  setTodos(updatedTodos);
},