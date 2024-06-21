import { useState } from "react";

export function TodoList() {
  //creazione di variabili di stato per gestire l'array dei todos e i valori degli input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //gestione eventi per aggiungere i nuovi todo
  const addTodo = () => {
    //ci si assicura che l'input non sia vuoto
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      //ripristianiamo a stringa vuota il campo di input
      setInputValue("");
    }
  };

  const resetTodo = () => {
    setTodos([]);
  };

  return (
    <div>
      <h2>To do List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() =>
                setTodos(() => {
                  const newTodos = [...todos];
                  newTodos.splice(index, 1);
                  return newTodos;
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={resetTodo}>Reset</button>
    </div>
  );
}
