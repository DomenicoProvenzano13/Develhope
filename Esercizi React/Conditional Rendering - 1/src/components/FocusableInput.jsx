import { useEffect, useRef } from "react";

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Focusable Input</h1>
      <input ref={inputRef} />
    </div>
  );
};

export default FocusableInput;
