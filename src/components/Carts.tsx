import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

export default function Carts() {
  const items = useSelector((store: any) => store.cart.items);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-6 w-full h-screen overflow-scroll">
      {items?.map((item: any) => {
        return (
          <div>
            <Cart item={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
}
