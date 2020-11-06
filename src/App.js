import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" render={() => <p>test</p>} />
      </Switch>
    </>
  );
}

export default App;
