import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    const direction = counter > initialValue ? "UP" : "DOWN";
    if (direction !== directionRef.current) {
      directionRef.current = direction;
      console.log(`The direction is ${direction}`);
    }
  });

  useEffect(() => {
    console.log(`The value of the counter is ${counter}`);
  }, [counter]);

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  function handleCounterDecrement() {
    setCounter(counter - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
