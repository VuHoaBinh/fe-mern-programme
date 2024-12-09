import React from "react";
import Avatar from "../../shared/components/UIElement/Avatar";
import { Link } from "react-router-dom";
function UserItem(props) {
  return (
    <li>
      <Link to={`/${props.id}/places`}>
        <h1>
          {props.id} - <Avatar image={props.image} alt={props.name} /> -{" "}
          {props.places === 1 ? "Place" : "Places"}
        </h1>
      </Link>
    </li>
  );
}

export default UserItem;
