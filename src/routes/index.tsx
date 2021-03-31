import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Lessons from "../pages/Lessons";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/lessons/:id" component={Lessons} />
  </Switch>
);

export default Routes;