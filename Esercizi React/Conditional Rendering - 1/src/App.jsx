import { AlertClock } from "./AlertClock";
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
    </div>
  );
}
