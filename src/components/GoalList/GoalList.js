import React from "react";
import "./GoalList.css";

function GoalList(props) {
  console.log(props.goals);
  return (
    <div className="goal-list">
      <h2>Goal List</h2>
      <ul>
        {props.goals.map((goal) => {
          return <li key={goal.id}>{goal.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default GoalList;
