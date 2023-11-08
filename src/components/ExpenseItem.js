import React from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expanse, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expanse.charge}</span>
        <span className="amount">{expanse.amount}</span>
      </div>
      <div>
        <button className="edit-btn" onClick={() => handleEdit(expanse.id)}>
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            // console.log(`${this.props.expanse.id} clicked`);
            handleDelete(expanse.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
