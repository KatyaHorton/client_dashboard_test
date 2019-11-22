import * as React from "react";

export interface AppContextInterface {
  orangeClicks: number;
  orangeTime: number;
  blueClicks: number;
  blueTime: number;
  gameOn: boolean;
  startGame: () => void;
}

interface ProviderProps {
  // @ts-ignore
  children: ReactNode;
}

export const Context = React.createContext<AppContextInterface>({
  orangeClicks: 0,
  orangeTime: 0,
  blueClicks: 0,
  blueTime: 0,
  gameOn: false,
  startGame: () => {}
});

export const ContextProvider = ({ children }: ProviderProps) => {
  const [gameOn, setGameOn] = React.useState(false);
  const startGame = () => {
    setGameOn(true);
    setTimeout(() => setGameOn(false), 5000);
  };

  return (
    <Context.Provider
      value={{
        orangeClicks: 0,
        orangeTime: 0,
        blueClicks: 0,
        blueTime: 0,
        startGame: startGame,
        gameOn: gameOn
      }}
    >
      {children}
    </Context.Provider>
  );
};
