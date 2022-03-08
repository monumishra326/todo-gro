import React, { useState } from "react";

const GroceryInput = ({ addHandler }) => {
  const [text, settext] = useState("");
  const changeHandler = (e) => {
    settext(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <button
        onClick={() => {
          addHandler(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default GroceryInput;
