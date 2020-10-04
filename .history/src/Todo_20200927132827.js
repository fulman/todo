import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed }) {
  return (
    <ListItem>
      <Checkbox checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
    </ListItem>
  );
}

export default Todo;
