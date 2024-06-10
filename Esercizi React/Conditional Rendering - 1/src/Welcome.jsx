import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <Age age={age} />
      {age >= 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age >= 18 && age <= 65 && <Age age={age} />}
      {age >= 18 && age <= 65 && name === "John" && <Age age={age} />}
    </div>
  );
}
