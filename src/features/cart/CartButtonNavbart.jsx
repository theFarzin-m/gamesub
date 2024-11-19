import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Cart from "./Cart";
import { useSelector } from "react-redux";

export default function CartButtonNavbart() {
  const { cart } = useSelector((s) => s.cart);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(0);
    cart.map((c) => setCartLength((cl) => (cl += c.quantity)));
  }, [cart]);

  return (
    <Modal>
      <Modal.open opens={"cart"}>
        <button className="nav-link d-flex flex-column align-items-center position-relative w-100">
          <div
            className="position-absolute d-flex justify-content-center align-items-center"
            id="custom-num-tag"
          >
            <span>{cartLength}</span>
          </div>
          <i className="bi bi-cart3 fs-4"></i>
          <span className="fs-7">سبد خرید</span>
        </button>
      </Modal.open>
      <Modal.window name={"cart"}>
        <Cart />
      </Modal.window>
    </Modal>
  );
}
