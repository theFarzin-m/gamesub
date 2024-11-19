import React, { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../utility/helpers";
import {
  add,
  remove,
  increase,
  decrease,
  startUpdating,
} from "../../features/cart/cartSlice";
import "./CardShop.css";

export default function CardShop({ data }) {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((s) => s.cart);

  const [quantity, setQuantity] = useState(0);

  const { id, title, price, mainImage } = data;
  const isInCart = cart.filter((c) => c.id === id);

  useEffect(() => {
    if (isInCart.length > 0 && !isLoading) {
      setQuantity(isInCart[0].quantity);
    } else {
      setQuantity(0);
    }
  }, [isInCart]);

  const handelAddToCart = () => {
    setQuantity(1);

    dispatch(add({ id, title, mainImage, price, quantity: 1 }));
  };

  const handelIncrease = () => {
    dispatch(startUpdating());

    setQuantity((q) => q + 1);

    dispatch(increase({ id }));
  };

  const handelDecrease = () => {
    dispatch(startUpdating());

    setQuantity((q) => q - 1);

    dispatch(decrease({ id }));
  };

  const handelRemove = () => {
    setQuantity(0);
    dispatch(remove(id));
  };

  return (
    <div className="custom-shop-card card">
      <div>
        <img src={mainImage} className="card-img-top" alt={title} />
        <div className="custom-card-price text-center py-2 px-3 rounded-end text-light position-absolute">
          {formatCurrency(price)}
        </div>
      </div>
      <div className="card-body p-0 pb-1">
        <h5 className="card-title p-2 pt-3 text-truncate custom-dir-ltr">
          {title}
        </h5>
        <div className="d-flex justify-content-between">
          {quantity > 0 ? (
            <div className="custom-quantity-button d-flex justify-content-center align-items-center border col mx-2 rounded">
              {quantity == 1 ? (
                <button className="btn col-3" onClick={handelRemove}>
                  <HiOutlineTrash />
                </button>
              ) : (
                <button className="btn col-3" onClick={handelDecrease}>
                  -
                </button>
              )}
              <span className="col text-center"> {quantity} </span>
              <button className="btn col-3" onClick={handelIncrease}>
                +
              </button>
            </div>
          ) : (
            <button
              className="btn btn-light pb-2 col"
              onClick={handelAddToCart}
            >
              <i className="bi bi-cart4 mx-2"></i>
              افزودن
            </button>
          )}
          <div className="custom-vertical-divider" />
          <Link to={`/shop/${id}`} className="btn btn-light pb-2 col">
            <ImAttachment className="mx-2" />
            جزئیات
          </Link>
        </div>
      </div>
    </div>
  );
}
