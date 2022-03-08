import React, { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./Grocerylist";

const Grocery = () => {
  const [item, setitem] = useState([]);

  const addHandler = (data) => {
    setitem([...item, data]);
  };

  const deletefunction = (id) => {
    setitem((ev) => {
      return ev.filter((carr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <GroceryInput addHandler={addHandler} />
      {item.map((grocee, index) => {
        return <GroceryList val={grocee} id={index} deletefunction={deletefunction} />;
      })}
    </div>
  );
};

export default Grocery;
