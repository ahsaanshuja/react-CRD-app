import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export default function MyTaskList(props) {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.task.checked}
            onChange={() => {
              let taskArray = JSON.parse(localStorage.getItem("data")) || [];
              let task = taskArray.find((tId) => tId.id === props.task.id);
              task.checked = !task.checked;
              taskArray = taskArray.map((x) => (x.id === task.id ? task : x));
              localStorage.setItem("data", JSON.stringify(taskArray));
              props.handleChange();
            }}
            name="checkedB"
            color="primary"
          />
        }
        label={props.task.task}
      />
    </>
  );
}
