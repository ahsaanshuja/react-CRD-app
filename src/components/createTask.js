import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// component import
import MyHeader from "./header.js";

// material ui import
import { Typography, Box, TextField, Button } from "@material-ui/core";

const CreateTask = (props) => {
  const [task, setTask] = useState();
  const taskId = uuidv4();

  return (
    <Box>
      <MyHeader />
      <Box mt={10} display="flex" justifyContent="center">
        <Typography variant="h3">Create new Task</Typography>
      </Box>

      <Box mt={10} display="flex" justifyContent="center">
        <TextField
          variant="outlined"
          label="Enter your task name"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <Button
          style={{ marginLeft: "10px" }}
          color="primary"
          variant="contained"
          onClick={() => {
            if (task) {
              const data = {
                task,
                checked: false,
                id: taskId,
              };

              let taskArray = JSON.parse(localStorage.getItem("data")) || [];
              taskArray.push(data);
              localStorage.setItem("data", JSON.stringify(taskArray));
              props.history.push("/list-tasks");
            } else {
              alert("please enter value first");
            }
          }}
        >
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default CreateTask;
