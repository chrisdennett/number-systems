import React, { useState } from "react";
// utils
import useInterval from "./UseInterval";
// styles
import "./styles.css";
// comps
import NumberSystemTable from "./NumberSystemTable";
import HexVisualiser from './hexVisualiser/HexVisualiser';

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
      <div>Number: {count}</div>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "pause" : "start"}
      </button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setDelay(delay === 1000 ? 50 : 1000)}>
        {delay === 1000 ? "go fast" : "go slow"}
      </button>

      {/* <NumberSystemTable currentValue={count} base={2} /> */}
      <NumberSystemTable currentValue={count} base={10} />
      <HexVisualiser />
    </div>
  );
};

export default App;
