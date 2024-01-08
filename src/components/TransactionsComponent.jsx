import React from "react";
import { useState } from "react";
import TransferComponent from "./TransferComponent.jsx";
import DepositWithdrawComponent from "./ActionComponent.jsx";
import "../styling/transaction-component-style.css";

const TransactionsComponent = () => {
  const [action, setAction] = useState("Withdraw");


  return (
    <div className="operations-container">
      <div className="buttons-container">
        {" "}
        <button
          className={action === "Deposit" ? "blue" : "grey"}
          onClick={() => setAction("Deposit")}
        >
          Deposit Money
        </button>
        <button
          className={action === "Withdraw" ? "blue" : "grey"}
          onClick={() => setAction("Withdraw")}
        >
          Withdraw Money
        </button>
        <button
          className={action === "Transfer" ? "blue" : "grey"}
          onClick={() => setAction("Transfer")}
        >
          Transfer Money
        </button>
      </div>

      {action === "Deposit" ? (
        <DepositWithdrawComponent action="deposit" />
      ) : action === "Withdraw" ? (
        <DepositWithdrawComponent action="withdraw" />
      ) : (
        <TransferComponent />
      )}
    </div>
  );
};

export default TransactionsComponent;
