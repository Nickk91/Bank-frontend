import React from "react";
import "../styling/user-card-style.css";

const UserCardComponent = ({
  _id,
  userId,
  isActive,
  fName,
  lName,
  cash,
  credit,
}) => {
  return (
    <>
      <ul className="user-container">
        <li>Account ID: {_id}</li>
        <li>ID Number: {userId}</li>
        <li>Account Status: {isActive}</li>
        <li>First Name: {fName}</li>
        <li>Last Name: {lName}</li>
        <li>Cash Balance: {cash}</li>
        <li>Credit Balance: {credit}</li>
        <li>Total Blance: {cash + credit}</li>
      </ul>
    </>
  );
};

export default UserCardComponent;
