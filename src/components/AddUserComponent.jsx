import React from "react";
import "../styling/add-user-component-style.css";
import { useState } from "react";
import Axios from "axios";

const AddUserComponent = () => {
  const url = "https://naughty-knickers-bass.cyclic.app/api/create";
  const [user, setUser] = useState({ userId: "", fName: "", lName: "" });

  function handle(e) {
    const newUser = { ...user };
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
    console.log(newUser);
  }
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      userId: user.userId.toString(),
      fName: user.fName,
      lName: user.lName,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }

  return (
    <>
      <h3 className="add-user-title">Add New User</h3>
      <form>
        <br />
        <label htmlFor="userId">User ID:</label>

        <input
          onChange={(e) => handle(e)}
          type="text"
          id="userId"
          name="userId"
          value={user.userId}
        />
        <br />
        <label htmlFor="fName">First name:</label>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="fName"
          name="fName"
          value={user.fName}
        />
        <br />
        <label htmlFor="lName">Last name:</label>

        <input
          onChange={(e) => handle(e)}
          type="text"
          id="lName"
          name="lName"
          value={user.lName}
        />
        <br />
        <button onClick={(e) => submit(e)} type="submit" value="Submit">
          {" "}
          Submit
        </button>
      </form>
    </>
  );
};

export default AddUserComponent;
