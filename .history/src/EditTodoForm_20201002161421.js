import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import {TodosContext} from './context/todos.context';

function EditTodoForm({ task, id, updateTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const {updateTodo} = useContext(TodosContext)l
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
