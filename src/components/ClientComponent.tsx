import * as React from "react";
// @ts-ignore
import { Context, AppContextInterface } from "../context/ContextProvider.tsx";

export const ClientComponent = () => {
  const context = React.useContext<AppContextInterface>(Context);

  return (
    <article>
      <header>Client</header>
      <div>
        <button onClick={context.startGame}>Start game</button>
      </div>
      {context.gameOn && (
        <div>
          <button>{context.orangeClicks}</button>
          <button>{context.blueClicks}</button>
        </div>
      )}

      <footer>
        Client for <em>Clicks Game</em>
      </footer>
    </article>
  );
};
