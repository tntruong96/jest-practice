import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/counter/counter";
import { AppProviders } from "./providers/AppProviders";
import { Skills } from "./components/skills";
import { Application } from "./components/application/application";
import { MuiMode } from "./mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter />
        {/* <CounterTwo count={1} />
      <Users /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
