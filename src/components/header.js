import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

import { Toolbar, IconButton, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  myLink: {
    color: "#fff",
    textDecoration: "none",
  },
  MyToolbar: {
    display: "unset !important",
  },
}));

export default function MyHeader() {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.MyToolbar}>
          <IconButton color="inherit">
            <Link className={classes.myLink} to="/list-tasks" variant="h6">
              Task List
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link to="/create-task" variant="h6" className={classes.myLink}>
              Create Task
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link to="/bulk-delete" variant="h6" className={classes.myLink}>
              Bulk Delete
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
