import React from "react";
import { Link } from "react-router-dom";
import "../styling/header-style.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <button name="Home">Home</button>
        </Link>
        <Link to="/tx">
          <button name="Transactions">Transactions</button>
        </Link>
        <Link to="user">
          <button name="User Details">User Details</button>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
