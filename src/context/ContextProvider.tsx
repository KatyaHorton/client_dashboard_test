import * as React from "react";

export interface ClicksData {
  clicks: number;
  time: number;
}

export interface AppContextInterface {
  orangeData: ClicksData[];
  blueData: ClicksData[];
  gameOn: boolean;
  startGame: () => void;
  onClick: (isOrange: boolean) => void;
}

interface ProviderProps {
  // @ts-ignore
  children: ReactNode;
}

export const Context = React.createContext<AppContextInterface>({
  orangeData: [{ clicks: 0, time: 0 }],
  blueData: [{ clicks: 0, time: 0 }],
  gameOn: false,
  startGame: () => {},
  onClick: (isOrange: boolean) => {}
});

export const ContextProvider = ({ children }: ProviderProps) => {
  const [gameOn, setGameOn] = React.useState(false);
  const [orangeData, setOrangeData] = React.useState([{ clicks: 0, time: 0 }]);
  const [blueData, setBlueData] = React.useState([{ clicks: 0, time: 0 }]);

  const startGame = () => {
    setGameOn(true);
    setTimeout(() => setGameOn(false), 5000);
    setOrangeData([{ clicks: 0, time: 0 }]);
    setBlueData([{ clicks: 0, time: 0 }]);
  };

  const setData = (isOrange: boolean) => {
    isOrange
      ? setOrangeData([...orangeData, { clicks: 1, time: Date.now() }])
      : setBlueData([...blueData, { clicks: 1, time: Date.now() }]);
    console.log("orangeData", orangeData);
    console.log("blueData", blueData);
  };

  return (
    <Context.Provider
      value={{
        orangeData: orangeData,
        blueData: blueData,
        startGame: startGame,
        onClick: setData,
        gameOn: gameOn
      }}
    >
      {children}
    </Context.Provider>
  );
};
