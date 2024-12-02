import React from "react";
import "./GoalList.css";

function GoalList(props) {
  console.log(props.goal);
  return (
    <div className="goal-list">
      <h2>Goal List</h2>
      <ul>
        {/* {props.goals.map((goal) => (
          <li key={goal.id}>{goal.name}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default GoalList;
