import React from "react";
import "./NewGoal.css";

function NewGoal(props) {
  const onSubmitAddGoal = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);

    const NewGoal = {
      id: Math.random().toString(),
      name: "Binh dep trai",
    };

    //   ref value to GoalList from App (parent and child)
    props.onAddGoal(NewGoal);
  };
  return (
    <div>
      <h1>NewGoal</h1>
      <form className="new-goal" onSubmit={onSubmitAddGoal}>
        <input type="text" />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default NewGoal;
