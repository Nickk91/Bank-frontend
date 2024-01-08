import React from "react";
import { useState } from "react";
import axios from "axios";

const TransferComponent = () => {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState("");

  function handleSenderId(e) {
    setFromId(e.target.value);
    setResult("");
  }

  function handleRecipientId(e) {
    setToId(e.target.value);
    setResult("");
  }

  function handleAmount(e) {
    setAmount(e.target.value);
    setResult("");
  }

  function submit(e) {
    e.preventDefault();

    let url = `https://naughty-knickers-bass.cyclic.app/api/${fromId}/${toId}/transfer`;

    axios
      .put(url, null, { params: { transfer: amount } })
      .then((res) => {
        console.log(res.data);
        setFromId("");
        setToId("");
        setAmount(0);
        setResult(`Transfer Completed!`);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        setResult(error);
      });
  }

  return (
    <div>
      <form onSubmit={submit}>
        <br />
        <label htmlFor="fromId">Sender Account ID:</label>
        <input
          onChange={handleSenderId}
          type="text"
          id="userId"
          name="userId"
          value={fromId}
        />
        <br />

        <label htmlFor="toId">Recipient Account ID:</label>
        <input
          onChange={handleRecipientId}
          type="text"
          id="toId"
          name="userId"
          value={toId}
        />
        <br />
        <label htmlFor="amount">Deposit Amount:</label>

        <input
          onChange={handleAmount}
          type="number"
          name="Deposit Amount"
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

export default TransferComponent;
