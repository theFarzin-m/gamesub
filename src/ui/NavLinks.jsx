import React from "react";

import CartButtonNavbart from "../features/cart/CartButtonNavbart";
import { Link, NavLink } from "react-router-dom";
import Searchform from "./Searchform";

export default function NavLinks() {
  return (
    <>
      <div className="d-flex d-lg-none justify-content-center align-items-center">
        <Searchform />
      </div>
      <hr className="d-lg-none" />

      <ul className="navbar-nav order-3 order-lg-1">
        <li className="nav-item">
          <NavLink
            className="nav-link d-flex flex-column align-items-center"
            to="/"
          >
            <i className="bi bi-house-door fs-4"></i>
            <span className="fs-7">خانه</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link d-flex flex-column align-items-center"
            to="/shop"
          >
            <i className="bi bi-shop fs-4"></i>
            <span className="fs-7">فروشگاه</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link d-flex flex-column align-items-center"
            to="/profile/Dashboard"
          >
            <i className="bi bi-person fs-4"></i>
            <span className="fs-7">پروفایل</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link d-flex flex-column align-items-center"
            to="https://shorturl.at/aAHW6"
          >
            <i className="bi bi-suit-heart fs-4"></i>
            <span className="fs-7">حمایت مالی</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <CartButtonNavbart />
        </li>
        <li className="nav-item custom-wallet rounded">
          <Link
            to="/profile/wallet"
            className="nav-link text-nowrap d-flex flex-column align-items-center text-light"
          >
            <i className="bi bi-wallet fs-4"></i>
            <span className="fs-7">200.000 تومان</span>
          </Link>
        </li>
      </ul>
      <div className="d-none d-lg-flex justify-content-center align-items-center order-3">
        <Searchform />
      </div>
    </>
  );
}
