import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export function ControlledForm() {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return { ...d, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleResetForm() {
    setData(createData());
  }

  function handleLoginFormSubmit() {
    event.preventDefault();

    console.log("Login button pressed", data);
  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <h1>Controlled Form</h1>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />
      <button disabled={!data.username || !data.password || !data.session}>
        Login
      </button>
      <button type="button" onClick={handleResetForm}>
        Reset
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
