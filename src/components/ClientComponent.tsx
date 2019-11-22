import * as React from "react";

export interface ClientProps {
  name: string;
}

export const ClientComponent = (props: ClientProps) => {
  return (
    <article>
      <header>Client</header>
      <div>Here is the Client, named: {props.name}</div>
      <footer>
        Client for <em>Clicks Game</em>
      </footer>
    </article>
  );
};
