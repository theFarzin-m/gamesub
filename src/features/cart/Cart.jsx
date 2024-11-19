import React from "react";
import { useSelector } from "react-redux";

import CardCart from "./CardCart";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  if (!cart.length) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="h1">خالیه</div>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-2">
      {cart.map((game) => (
        <div className="col p-0" key={game.id}>
          <CardCart data={game} />
        </div>
      ))}
    </div>
  );
}
