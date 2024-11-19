import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utility/helpers";
import { remove, increase, decrease } from "./cartSlice";
import "./CardCart.css";

export default function CardCart({ data }) {
  const dispatch = useDispatch();
  const { id, title, price, mainImage, quantity } = data;

  const [newQuantity, setNewQuantity] = useState(quantity);

  const handelIncrease = () => {
    setNewQuantity((q) => q + 1);

    dispatch(increase({ id }));
  };

  const handelDecrease = () => {
    setNewQuantity((q) => q - 1);
    dispatch(decrease({ id }));
  };

  const handelRemove = () => {
    setNewQuantity(0);
    dispatch(remove(id));
  };

  return (
    <div className="custom-cart-card card">
      <Link to={`/shop/${id}`}>
        <img src={mainImage} className="card-img-top" alt={title} />
      </Link>
      <div className="card-body py-2">
        <Link to={`/shop/${id}`}>
          <h5 className="card-title text-truncate custom-dir-ltr my-0">
            {title}
          </h5>
          <div className="custom-card-price">{formatCurrency(price)}</div>
        </Link>
        <div className="custom-quantity-button d-flex justify-content-center align-items-center border rounded my-1">
          <button
            className="btn col-3"
            onClick={handelDecrease}
            disabled={newQuantity <= 1}
          >
            -
          </button>
          <span className="col text-center"> {quantity} </span>
          <button className="btn col-3" onClick={handelIncrease}>
            +
          </button>
        </div>
        <button className="btn btn-primary w-100" onClick={handelRemove}>
          <HiOutlineTrash className="fs-4" />
        </button>
      </div>
    </div>
  );
}
