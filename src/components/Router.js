import React from "react";
//this will make the routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

//Stateless Functional Component is used here as well (see Header.js for details)
//how Switch works: First tries the exact route, if it is not the case then tries the 2nd route, and if not that the case, then the 3rd (fallback) route is used
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker}></Route>
      <Route path="/store/:storeId" component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
