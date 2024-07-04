import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  //inizializzo l'hook useState, con valore iniziale un array vuoto
  const { username } = useParams();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  /*uso l'hook useEffect per inizializzare un fetch
passo come parametro al fetch il link della API per effettuare una richiesta
completata la richiesta viene restituita una response, confertita in formato json
ottenuti i dati json vengono passati a setUsers per aggiornare la variabile di stato
l'array delle dipendenze è vuoto per permettere la renderizzazione del componente al montaggio*/

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

/*Nel rendering del componente:
eseguo un map della variabile di stato (in questo caso un array),
creo i vari <li> indicando un key unico (user.id), 
creo dentro ogni <li> un <Link> che punta a un url composto da users/ + l'elemento login di ogni oggetto.*/
