import * as React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
// @ts-ignore
import { DashboardComponent } from "./components/DashboardComponent.tsx";
// @ts-ignore
import { ClientComponent } from "./components/ClientComponent.tsx";
// @ts-ignore
import { ContextProvider } from "./context/ContextProvider.tsx";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/client">
            <ClientComponent />
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
    </ContextProvider>
  );
}

export default App;
