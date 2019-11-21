import * as React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import { DashboardComponent } from "./components/DashboardComponent.tsx";
import { ClientComponent } from "./components/ClientComponent.tsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/client">
          <ClientComponent name="Katya" />
        </Route>
        <Route path="/dashboard">
          <DashboardComponent />
        </Route>

        <Route
          exact
          path="/"
          render={() => {
            return (
              <article>
                <h1>Hello, Client Dashboard</h1>
                <ul>
                  <li>
                    <Link to="/client">To CLIENT App</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">To DASHBOARD App</Link>
                  </li>
                </ul>
              </article>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
