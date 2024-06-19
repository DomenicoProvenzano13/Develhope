import { Color } from "./Color";

export function Colors({ colors }) {
  return (
    <>
      <h2>Colors</h2>
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </>
  );
}
