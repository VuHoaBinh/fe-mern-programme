import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoalList from "./components/GoalList.js";

function App() {
  const ListGoal = [
    {
      id: "1",
      name: "Goal 1",
    },
    {
      id: "2",
      name: "Goal 2",
    },
    ,
    {
      id: "3",
      name: "Goal 3",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 title="Hello bình">Hello World! </h1>
        <GoalList goal={ListGoal} />
      </header>
    </div>
  );
}

export default App;
