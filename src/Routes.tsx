import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";

export const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);