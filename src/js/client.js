import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

// Components
import Reservations from "./pages/Reservations";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={Reservations}></Route>
      <Route path="/reservations" name="reservations" component={Reservations}></Route>
  </Router>,
app);
