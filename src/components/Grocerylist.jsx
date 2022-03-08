import React from "react";
import "./Grocerylist.css";

const GroceryList = ({ val, deletefunction, id }) => {
  return (
    <div className="main">
      <div>{val}</div>
      <button className="btn"
        onClick={() => {
          deletefunction(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default GroceryList;
