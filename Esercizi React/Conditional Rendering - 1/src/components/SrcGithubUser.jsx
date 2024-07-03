import { useRef, useState } from "react";
import { GithubUser } from "./GitHubUser";

export function SrcGithubUser() {
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

/* import { useEffect, useState } from "react";

export function SrcGithubUsers(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  function handleSrcGithubUser(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSrcGithubUser}>
        <input name="Search"></input>
      </form>
      {data && <h1>{data.name}</h1>}
      {data && <h2>{data.login}</h2>}
      {data && <img src={data.avatar_url} style={{ width: "50px" }}></img>}
    </div>
  );
} */
