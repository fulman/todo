import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                key={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
              />
              {i < todo.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
}

export default TodoList;
