import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          label="Add Todo"
          fullWidth
          onChange={handleChange}
          style={{ padding: "0 0 1rem" }}
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
