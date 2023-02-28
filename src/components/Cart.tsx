import React from "react";

import { Link } from "react-router-dom";
interface IProp {
  item: any;
}
function Cart({ item }: IProp) {
  return (
    <Link to={`/carts/${item.id}`}>
    <div className="bg-slate-200 shadow-md w-30 h-40 rounded-sm pointer-events-auto">
      <div className="p-3">
        <span className="font-medium text-lg ">{item.title}</span>
      </div>
      <div className="p-3">
        <span>{item.body}</span>
      </div>
    </div>
    </Link>
  );
}

export default Cart;
