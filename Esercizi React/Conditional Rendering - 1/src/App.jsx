import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>My new App</h1>
      <hr />
      <Welcome name="John" age={45} />
      <AlertClock />
      <hr />
      <HelloWorld />
      <hr />
      <Counter initialValue={42} />
    </div>
  );
}
