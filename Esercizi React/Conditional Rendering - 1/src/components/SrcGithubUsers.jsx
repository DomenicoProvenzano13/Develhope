import { useRef, useState } from "react";
import { GithubUser } from "./GitHubUsers";

export function SrcGithubUsers() {
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);

  function handleSrcGithubUser(event) {
    event.preventDefault();

    if (inputRef.current?.value) {
      setUsers([...users, inputRef.current.value]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSrcGithubUser}>
        <input name="search" ref={inputRef}></input>
        <button>Search</button>
      </form>
      <div>
        {users.map((user, index) => {
          return <GithubUser key={index} username={user} />;
        })}
      </div>
    </div>
  );
}
