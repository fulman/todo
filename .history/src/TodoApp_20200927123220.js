import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Finish homework", completed: false },
    { id: 2, task: "Clean house", completed: true },
    { id: 3, task: "Fast typing", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" positino="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
        <TodoList todos={todos} />
      </AppBar>
    </Paper>
  );
}

export default TodoApp;
