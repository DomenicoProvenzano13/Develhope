import { Button } from "./Button";

export function AlertClock() {
  function handleShowTime() {
    const now = new Date();

    alert(`The current time is ${now.toLocaleTimeString()}`);
  }

  /* return (
    <div>
      <p>Click the button</p>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  ); */

  return (
    <div>
      <p>Click the button</p>
      <Button onClick={handleShowTime} label={"Click me!"} />
    </div>
  );
}
