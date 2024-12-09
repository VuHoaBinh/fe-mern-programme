import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
// import GoalList from "./components/GoalList/GoalList";
// import NewGoal from "./components/NewGoal/NewGoal";
// function App() {
//   const [ListGoal, setListGoal] = useState([
//     {
//       id: "1",
//       name: "Goal 1",
//     },
//     {
//       id: "2",
//       name: "Goal 2",
//     },
//     ,
//     {
//       id: "3",
//       name: "Goal 3",
//     },
//   ]);

//   const onAddGoalHandler = (newGoalfromNewGoal) => {
//     // ListGoal.push(newGoalfromNewGoal);
//     // setListGoal((ListGoal) => [...ListGoal, newGoalfromNewGoal]);
//     setListGoal((prevListGoal) => prevListGoal.concat(newGoalfromNewGoal));
//     console.log(ListGoal);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <h1 title="Hello bình">Hello World! </h1>
//         <NewGoal onAddGoal={onAddGoalHandler} />
//         <GoalList goals={ListGoal} />
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/places/new" element={<NewPlaces />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
