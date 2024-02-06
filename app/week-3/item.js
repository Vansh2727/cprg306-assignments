import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-slate-800 list-none max-w-96  p-4 my-2 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-white">
        Buy {quantity} in {category}
      </p>
    </li>
  );
};

export default Item;
