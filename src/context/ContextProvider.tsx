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
  const [startTime, setStartTime] = React.useState(0);
  const [orangeData, setOrangeData] = React.useState([{ clicks: 0, time: 0 }]);
  const [blueData, setBlueData] = React.useState([{ clicks: 0, time: 0 }]);

  const startGame = () => {
    setGameOn(true);
    setStartTime(Date.now());
    setTimeout(() => setGameOn(false), 5000);
    setOrangeData([{ clicks: 0, time: 0 }]);
    setBlueData([{ clicks: 0, time: 0 }]);
  };

  const setClickTime = () => {
    let time;
    time = Date.now() - startTime;
    time = time / 1000;
    time = Math.round(time * 2) / 2;
    return time;
  };

  const setData = (isOrange: boolean) => {
    isOrange
      ? setOrangeData([...orangeData, { clicks: 1, time: setClickTime() }])
      : setBlueData([...blueData, { clicks: 1, time: setClickTime() }]);
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
