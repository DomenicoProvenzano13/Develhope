import { useGithubUser } from "./hooks/useGithubUser";
import { useRef, useState } from "react";

export function GithubUser({ username }) {
  const { data, loading, error, update } = useGithubUser(username);
  const [finduser, setFinduser] = useState(null);

  const inputRef = useRef(null);

  return (
    <div>
      <button onClick={() => setFinduser(inputRef.current.value)}>
        <input ref={inputRef} placeholder="Cerca" />
      </button>
      <button
        onClick={() => {
          update();
        }}
      >
        Update
      </button>
      {loading && <h1>Loading...</h1>}
      {error && <h2>{error.message}</h2>}
      {data && (
        <>
          <h1>{data.name}</h1>
          <h2>{data.login}</h2>
          <img src={data.avatar_url} style={{ width: "50px" }}></img>
        </>
      )}
    </div>
  );
}

/* import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("user not found"));
        }

        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>The has been an error!</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
} */
