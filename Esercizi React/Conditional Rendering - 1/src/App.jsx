import { Clock } from "./components/Clock";
import { Counter } from "./components/Counter";
import { HelloWorld } from "./components/HelloWorld";
import { MouseClicker } from "./components/MouseClicker";
import { Welcome } from "./components/Welcome";
import { AlertClock } from "./components/AlertClock";
import { ControlledForm } from "./components/ControlledForm";
import { UncontrolledForm } from "./components/UncontrolledForm";
import FocusableInput from "./components/FocusableInput";

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
      <hr />
      <ControlledForm />
      <hr />
      <UncontrolledForm />
      <hr />
      <FocusableInput />
    </>
  );
}
