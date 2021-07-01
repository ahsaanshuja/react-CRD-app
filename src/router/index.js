import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListTasks from "../components/listTasks";
import CreateTask from "../components/createTask";
import BulkDelete from "../components/bulkDelete";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/list-tasks" />} />
      <Route exact path="/list-tasks" component={ListTasks} />
      <Route exact path="/create-task" component={CreateTask} />
      <Route exact path="/bulk-delete" component={BulkDelete} />
    </Switch>
  );
};

export default Routes;
