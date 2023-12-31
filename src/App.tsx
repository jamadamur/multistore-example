import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestComponent } from "./TestComponent/TestComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent componentId="first" />
        <TestComponent componentId="second" />
      </header>
    </div>
  );
}

export default App;
