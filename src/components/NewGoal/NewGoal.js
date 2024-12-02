import React, { useState } from "react";
import "./NewGoal.css";

function NewGoal(props) {
  const [textEnterChange, setTextEnterChange] = useState("");
  const onSubmitAddGoal = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);

    const NewGoal = {
      id: Math.random().toString(),
      name: textEnterChange,
    };

    setTextEnterChange("");
    //   ref value to GoalList from App (parent and child)
    props.onAddGoal(NewGoal);
  };

  const onChangeTextChange = (event) => {
    setTextEnterChange(event.target.value);
  };
  return (
    <div>
      <h1>NewGoal</h1>
      <form className="new-goal" onSubmit={onSubmitAddGoal}>
        <input
          type="text"
          value={textEnterChange}
          onChange={onChangeTextChange}
        />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default NewGoal;
