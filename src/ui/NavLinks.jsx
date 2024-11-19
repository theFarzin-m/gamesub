import React from "react";

import CartButtonNavbart from "../features/cart/CartButtonNavbart";
import { Link, NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <form className="d-flex d-lg-none" role="search">
        <div className="input-group rounded-0 rounded-start border">
          <input
            className="form-control rounded-0 rounded-start border-0"
            type="search"
            placeholder="جستجو"
            aria-label="Search"
          />
        </div>
        <button
          className="btn btn-primary me-2 rounded-0 rounded-end"
          type="submit"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
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
      <form
        className="d-none d-lg-flex order-1 my-lg-auto order-lg-2"
        role="search"
      >
        <div className="input-group rounded-0 rounded-start border">
          <input
            className="form-control rounded-0 rounded-start border-0"
            type="search"
            placeholder="جستجو"
            aria-label="Search"
          />
        </div>
        <button
          className="btn btn-primary me-2 rounded-0 rounded-end"
          type="submit"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
    </>
  );
}
