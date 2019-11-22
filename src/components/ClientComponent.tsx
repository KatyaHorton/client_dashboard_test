import * as React from "react";
// @ts-ignore
import { Context, AppContextInterface } from "../context/ContextProvider.tsx";

export const ClientComponent = () => {
  const context = React.useContext<AppContextInterface>(Context);

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
          disabled={!context.gameOn}
          onClick={() => context.onClick(true)}
        >
          {context.orangeData.length - 1}
        </button>
        <button
          disabled={!context.gameOn}
          onClick={() => context.onClick(false)}
        >
          {context.blueData.length - 1}
        </button>
      </div>

      <footer>
        Client for <em>Clicks Game</em>
      </footer>
    </article>
  );
};
