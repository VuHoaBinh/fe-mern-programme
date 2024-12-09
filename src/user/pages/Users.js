import React from "react";
import UserList from "../components/UserList";
function Users() {
  const Users = [
    {
      id: 1,
      image: 1,
      name: "Binh",
      places: 3,
    },
  ];
  return (
    <div>
      <UserList items={Users} />
    </div>
  );
}

export default Users;
