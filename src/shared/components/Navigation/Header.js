import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <Navigation>
      <Link to="/">new place1</Link>

      <Link to="/places/new">new place2</Link>
      <Link to="/">new place3</Link>
      <nav>
        <NavLinks/>
      </nav>
    </Navigation>
  );
}

export default Header;
