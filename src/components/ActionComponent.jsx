import React, { useState } from "react";
import axios from "axios";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter.js";

const ActionComponent = ({ action }) => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState("");

  const handleUserId = (e) => {
    setUserId(e.target.value);
    setResult("");
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
    setResult("");
  };

  const submit = (e) => {
    e.preventDefault();

    if (action !== "transfer") {
      const url = `https://naughty-knickers-bass.cyclic.app/api/${userId}/${action}`;

      axios
        .put(url, null, { params: { [action]: amount } })
        .then((res) => {
          console.log(res.data);
          setAmount(0);
          setUserId("");
          setResult(`${Transfer} Completed!`);
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <br />
        <label htmlFor="userId">User Account ID:</label>
        <input
          onChange={handleUserId}
          type="text"
          id="userId"
          name="userId"
          value={userId}
        />
        <br />
        <label htmlFor="amount">{capitalizeFirstLetter(action)} Amount:</label>

        <input
          onChange={handleAmount}
          type="number"
          name={`${capitalizeFirstLetter(action)} Amount`}
          value={amount}
        />
        <br />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
        <div>{result}</div>
      </form>
    </div>
  );
};

export default ActionComponent;
