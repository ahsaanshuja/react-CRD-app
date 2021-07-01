import React from "react";

// component import
import MyHeader from "./header.js";
import MyCard from "./card.js";

// material ui import
import { Typography, Box } from "@material-ui/core";

export default function ListTasks() {
  let taskArray = JSON.parse(localStorage.getItem("data")) || [];

  return (
    <Box>
      <MyHeader />
      <Box mt={10} mb={5} display="flex" justifyContent="center">
        <Typography variant="h3">Task List</Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" p={"0 30px"}>
        {taskArray.map((task) => {
          return <MyCard taskName={task.task} />;
        })}
      </Box>
    </Box>
  );
}
