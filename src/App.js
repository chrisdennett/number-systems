import React, { useState } from "react";
// utils
import { toBinary, createBinaryColumns, maxCount } from "./UTILS";
import useInterval from "./UseInterval";
// styles
import "./styles.css";
import BinaryTable from "./BinaryTable";

const binaryCols = createBinaryColumns(maxCount);

const App = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div className={"app"}>
      <div>count: {count}</div>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "pause" : "start"}
      </button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setDelay(delay === 1000 ? 50 : 1000)}>
        {delay === 1000 ? "go fast" : "go slow"}
      </button>

      <BinaryTable maxValue={maxCount} currentValue={count} />
    </div>
  );
};

export default App;
