import React, { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../utility/helpers";
import { add, remove } from "../../features/cart/cartSlice";
import "./Card.css";
import { HiOutlineTrash } from "react-icons/hi2";

export default function Card({ data }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cart);
  const [isInCart, setIsInCart] = useState(false);
  const { id, title, price, mainImage } = data;

  // const isInCart = cart.filter((c) => c.id === id);

  useEffect(() => {
    const isIt = cart.filter((c) => c.id === id);
    setIsInCart(isIt.length > 0);
  }, [cart]);

  return (
    <div className="custom-card card overflow-hidden text-light rounded-0 border-0">
      <img src={mainImage} className="card-img rounded-0" alt={title} />
      <div className="custom-price-tag position-absolute right-0 bottom-0 p-2">
        {formatCurrency(price)}
      </div>
      <div className="card-img-overlay p-0 rounded-0">
        <div className="card-title position-absolute w-100 d-flex flex-column align-items-center justify-content-center">
          <h5 className="border-bottom p-2 text-center mx-3 text-truncate custom-dir-ltr">
            {title}
          </h5>
        </div>
        <div className="custom-card-details position-absolute">
          <div className="custom-card-text text-center fs-6 py-2">
            {formatCurrency(price)}
          </div>
          <div className="row gx-1">
            {isInCart ? (
              <button
                className="col btn btn-dark rounded-0 me-1"
                onClick={() => dispatch(remove(id))}
              >
                <HiOutlineTrash />
                حذف ازسبد
              </button>
            ) : (
              <button
                className="col btn btn-dark rounded-0 me-1"
                onClick={() =>
                  dispatch(add({ id, title, price, mainImage, quantity: 1 }))
                }
              >
                <i className="bi bi-cart4 mx-2"></i>
                افزودن
              </button>
            )}
            <Link className="col btn btn-dark rounded-0" to={`/shop/${id}`}>
              <ImAttachment className="mx-2" />
              جزئیات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
