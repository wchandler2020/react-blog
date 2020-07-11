import React from "react";
import Navigation from "./components/layout/Navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "antd/dist/antd.css";

import PageRenderer from "./page_renderer";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "./assets/styles/styles.scss";

function App() {
  const user = {
    first_name: "William",
    last_name: "Chandler",
  };
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
