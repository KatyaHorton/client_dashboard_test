import * as React from "react";

export interface ClicksData {
  clicks: number;
  time: number;
}

export interface AppContextInterface {
  orangeData: ClicksData[] | [];
  blueData: ClicksData[] | [];
  orangeClicks: number[];
  blueClicks: number[];
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
  orangeData: orangeDataReceived,
  orangeClicks: [0],
  blueClicks: [0]
});

export const ContextProvider = ({ children }: ProviderProps) => {
  const [gameOn, setGameOn] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [orangeData, setOrangeData] = React.useState(orangeDataReceived);
  const [blueData, setBlueData] = React.useState(blueDataReceived);
  const [orangeClicks, setOrangeClicks] = React.useState([0]);
  const [blueClicks, setBlueClicks] = React.useState([0]);

  const startGame = () => {
    setGameOn(true);
    setStartTime(Date.now());
    setTimeout(() => setGameOn(false), 5000);
    setOrangeClicks([0]);
    setBlueClicks([0]);
  };

  React.useEffect(() => {
    !gameOn && generateResult(orangeClicks, setOrangeData);
    !gameOn && generateResult(blueClicks, setBlueData);
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
      ? setOrangeClicks([...orangeClicks, setClickTime()])
      : setBlueClicks([...blueClicks, setClickTime()]);
  };
  // @ts-ignore
  const generateResult = (arr, fn) => {
    const timeArray = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    // @ts-ignore
    let grouped = arr.reduce((r, v, i, a) => {
      if (v === a[i - 1]) {
        r[r.length - 1].push(v);
      } else {
        r.push(v === a[i + 1] ? [v] : v);
      }
      return r;
    }, []);

    const result = timeArray.map(time => {
      // @ts-ignore
      let resultArray = {};
      // @ts-ignore
      let found = grouped.find(element => {
        return element[0] === time;
      });

      if (found) {
        resultArray = { time: time, clicks: found.length };
      } else {
        resultArray = { time: time, clicks: 0 };
      }
      // @ts-ignore
      return resultArray;
    });
    fn(result);
    console.log("game not on and log: ", result);
  };

  // console.log("orangeData", orangeData);

  return (
    <Context.Provider
      value={{
        orangeData: orangeData,
        blueData: blueData,
        orangeClicks: orangeClicks,
        blueClicks: blueClicks,
        startGame: startGame,
        onClick: setData,
        gameOn: gameOn
      }}
    >
      {children}
    </Context.Provider>
  );
};
