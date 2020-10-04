import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ task, id, updateTodo, editToggleForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField value={value} onChange={handleChange} />
    </form>
  );
}

export default EditTodoForm;
