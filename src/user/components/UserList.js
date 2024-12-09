import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
  if (props.items.lenght === 0) {
    return (
      <div>
        <h1> Not thing items....</h1>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((users) => (
        <UserItem
          key={users.id}
          id={users.id}
          image={users.image}
          name={users.name}
          placeCount={users.places}
        />
      ))}
    </ul>
  );
}

export default UserList;
