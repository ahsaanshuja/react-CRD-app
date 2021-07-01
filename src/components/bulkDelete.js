import React from "react";

// component import
import MyHeader from "./header.js";
import MyTaskList from "./bulkTask";

// material ui import
import { Typography, Box, Button } from "@material-ui/core";

const BulkDelete = () => {
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const handleChange = () => {
    setTasks(JSON.parse(localStorage.getItem("data")) || []);
  };
  return (
    <Box>
      <MyHeader />
      <Box mt={10} mb={5} display="flex" justifyContent="center">
        <Typography variant="h3">Delete Task</Typography>
      </Box>
      <Box
        p={"0 30px"}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        {tasks.map((task) => {
          return <MyTaskList task={task} handleChange={handleChange} />;
        })}
      </Box>
      <Button
        style={{ marginTop: "40px", margin: "0 30px" }}
        color="primary"
        variant="contained"
        onClick={() => {
          let taskArray = JSON.parse(localStorage.getItem("data")) || [];
          taskArray = taskArray.filter((fil) => fil.checked === false);
          localStorage.setItem("data", JSON.stringify(taskArray));
          handleChange();
        }}
      >
        Remove Bulk
      </Button>
    </Box>
  );
};

export default BulkDelete;
