import * as React from "react";
// @ts-ignore
import { Context, AppContextInterface } from "../context/ContextProvider.tsx";

export const ClientComponent = () => {
  const context = React.useContext<AppContextInterface>(Context);

  console.log("orange data from context", context.orangeData);

  return (
    <article>
      <header>Client</header>
      <div>
        <button disabled={context.gameOn} onClick={context.startGame}>
          Start game
        </button>
      </div>

      <div>
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            width: "100px",
            height: "100px",
            borderRadius: "50%"
          }}
          disabled={!context.gameOn}
          onClick={() => context.onClick(true)}
        >
          {context.orangeClicks.length - 1}
        </button>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "100px",
            height: "100px",
            borderRadius: "50%"
          }}
          disabled={!context.gameOn}
          onClick={() => context.onClick(false)}
        >
          {context.blueClicks.length - 1}
        </button>
      </div>

      <footer>
        Client for <em>Clicks Game</em>
      </footer>
    </article>
  );
};
