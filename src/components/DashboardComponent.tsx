import * as React from "react";
// @ts-ignore
import { ChartComponent } from "./ChartComponent.tsx";
export const DashboardComponent = () => {
  return (
    <article>
      <header>Dashboard</header>
      <ChartComponent />
      <footer>
        Dashboard for <em>Clicks Game</em>
      </footer>
    </article>
  );
};
