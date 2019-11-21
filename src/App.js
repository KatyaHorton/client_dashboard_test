import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

import { DashboardComponent } from "./components/DashboardComponent";
import { ClientComponent } from "./components/ClientComponent";

function App() {
  return (
    <Router>
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
      <Route path="/client" component={ClientComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </Router>
  );
}

export default App;
