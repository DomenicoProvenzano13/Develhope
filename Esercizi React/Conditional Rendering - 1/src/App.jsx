import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export default function App() {
  return (
    <>
      <h1>My new App</h1>
      <hr />
      <Welcome name="John" age={45} />
      <AlertClock />
      <hr />
      <HelloWorld />
      <hr />
      <Counter initialValue={42} />
      <hr />
      <Clock />
      <hr />
      <MouseClicker />
    </>
  );
}
