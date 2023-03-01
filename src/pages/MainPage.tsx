import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartDetails from "../components/CartDetails";
import Carts from "../components/Carts";
import Header from "../components/header";

export default function MainPage() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Header />
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Carts />} />
            <Route path="/carts/:id" element={<CartDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
