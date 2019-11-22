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

const orangeDataReceived = [
  { clicks: 0, time: 0 },
  { clicks: 0, time: 0.5 },
  { clicks: 0, time: 1 },
  { clicks: 0, time: 1.5 },
  { clicks: 5, time: 2 },
  { clicks: 0, time: 2.5 },
  { clicks: 0, time: 3 },
  { clicks: 0, time: 3.5 },
  { clicks: 3, time: 4 },
  { clicks: 0, time: 4.5 },
  { clicks: 0, time: 5 }
];
const blueDataReceived = [
  { clicks: 0, time: 0 },
  { clicks: 0, time: 0.5 },
  { clicks: 1, time: 1 },
  { clicks: 0, time: 1.5 },
  { clicks: 4, time: 2 },
  { clicks: 2, time: 2.5 },
  { clicks: 0, time: 3 },
  { clicks: 0, time: 3.5 },
  { clicks: 2, time: 4 },
  { clicks: 0, time: 4.5 },
  { clicks: 0, time: 5 }
];

export const Context = React.createContext<AppContextInterface>({
  gameOn: false,
  startGame: () => {},
  onClick: (isOrange: boolean) => {},
  blueData: blueDataReceived,
  orangeData: orangeDataReceived
});

export const ContextProvider = ({ children }: ProviderProps) => {
  const [gameOn, setGameOn] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [orangeData, setOrangeData] = React.useState(orangeDataReceived);
  const [blueData, setBlueData] = React.useState(blueDataReceived);

  const startGame = () => {
    setGameOn(true);
    setStartTime(Date.now());
    setTimeout(() => setGameOn(false), 5000);

    setOrangeData([{ clicks: 0, time: 0 }]);
    setBlueData([{ clicks: 0, time: 0 }]);
  };

  React.useEffect(() => {
    generateResult(orangeData);
    generateResult(blueData);
  }, [gameOn]);

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
  };
  // @ts-ignore
  const generateResult = arr => {
    const timeArray = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    // @ts-ignore
    const result = arr.filter(obj => {
      // @ts-ignore
      let smth;
      smth = timeArray.map(num => {
        return obj.time === num;
      });
      return smth;
    });

    console.log("result", result);
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
