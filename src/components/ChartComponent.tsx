import * as React from "react";
import { Scatter } from "react-chartjs-2";

import {
  Context,
  AppContextInterface,
  ClicksData
  // @ts-ignore
} from "../context/ContextProvider.tsx";
export const ChartComponent = () => {
  const context = React.useContext<AppContextInterface>(Context);

  const dataReceivedOrange = context.orangeData;
  let dataReceivedBlue = context.blueData;

  const useDataOrange =
    // @ts-ignore
    dataReceivedOrange.map((item: ClicksData) => {
      return {
        x: item.time,
        y: item.clicks
      };
    });
  const useDataBlue =
    // @ts-ignore
    dataReceivedBlue.map((item: ClicksData) => {
      return {
        x: item.time,
        y: item.clicks
      };
    });
  // @ts-ignore
  const [data, setData] = React.useState({
    labels: ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"],
    datasets: [
      {
        label: "Orange",
        fill: false,
        showLine: true,
        backgroundColor: "orange",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: useDataOrange,
        borderWidth: 4,
        borderColor: "orange"
      },
      {
        label: "Blue",
        fill: false,
        showLine: true,
        backgroundColor: "orange",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: useDataBlue,
        borderWidth: 4,
        borderColor: "blue"
      }
    ]
  });
  return (
    <div style={{ position: "relative", width: "600px", height: "600px" }}>
      <Scatter
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 5
                }
              }
            ]
          }
        }}
        data={data}
      />
    </div>
  );
};
