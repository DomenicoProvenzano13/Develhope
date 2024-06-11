import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterDecrement() {
    setCounter(counter - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
