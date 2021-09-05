import React from "react"
import './App.css';
import MainPage from "./pages/MainPage";
import { Switch,Route } from "react-router"
import Suggestion from "./pages/Suggestions";

function App() {
  return (
    <Switch>
    <Route exact path="/">
      <MainPage/>
    </Route>
    <Route exact path="/blah">
      <Suggestion/>
    </Route>
    </Switch>
  );
}

export default App;
