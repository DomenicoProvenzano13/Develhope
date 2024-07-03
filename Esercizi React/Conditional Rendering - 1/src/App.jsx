import { Clock } from "./components/Clock";
import { Counter } from "./components/Counter";
import { HelloWorld } from "./components/HelloWorld";
import { MouseClicker } from "./components/MouseClicker";
import { Welcome } from "./components/Welcome";
import { AlertClock } from "./components/AlertClock";
import { ControlledForm } from "./components/ControlledForm";
import { UncontrolledForm } from "./components/UncontrolledForm";
import FocusableInput from "./components/FocusableInput";
import { Colors } from "./components/Colors";
import { TodoList } from "./components/TodoList";
import { Container } from "./components/Container";
import { LanguageContext } from "./components/LanguageContext";
import { useState } from "react";
import { SrcGithubUser } from "./components/SrcGithubUser";
import { CurrentLocation } from "./components/CurrentLocation";
import { Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./components/ShowGithubUser";

export function App() {
  const [language, setLanguage] = useState("it");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handleSetLanguage("en")}>ENG</button>
      <button onClick={() => handleSetLanguage("it")}>ITA</button>
      <Container title={<h1>My new App</h1>}>
        <LanguageContext.Provider value={language}>
          <Link to="/">Home |</Link>
          <Link to="/counter">Counter |</Link>
          <Link to="/users/DomenicoProvenzano13">Users |</Link>
          <hr />
          <Routes>
            <Route path="/" element={<Welcome name="John" age={45} />} />
            <Route path="/counter" element={<Counter initialValue={42} />} />
            <Route path="/users/:username" element={<ShowGithubUser />} />
          </Routes>
          <hr />
          <AlertClock />
          <hr />
          <HelloWorld />
          <hr />
          <Clock />
          <hr />
          <MouseClicker />
          <hr />
          <ControlledForm />
          <hr />
          <UncontrolledForm />
          <hr />
          <FocusableInput />
          <hr />
          <Colors
            colors={[
              { id: 1, name: "Blue" },
              { id: 2, name: "Red" },
              { id: 3, name: "Green" },
            ]}
          />
          <hr />
          <TodoList />
          <hr />
          <SrcGithubUser />
          <hr />
          <CurrentLocation />
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}
