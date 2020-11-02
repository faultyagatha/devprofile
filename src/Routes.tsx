import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);