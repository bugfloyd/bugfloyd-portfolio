import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/yash.ar-frontend" component={Home} />
      </Switch>
    </>
  );
}

export default App;
