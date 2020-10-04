import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm task={task} id={id} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndez={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
