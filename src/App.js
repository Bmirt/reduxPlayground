import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Todos from "./containers/Todos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Todos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
