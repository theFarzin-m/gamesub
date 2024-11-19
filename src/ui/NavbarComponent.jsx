import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./NavbarComponent.css";
import CartButtonNavbart from "../features/cart/CartButtonNavbart";

function NavbarComponent() {
  document.onscroll = () => {
    const scrollY = document.scrollingElement?.scrollTop;
    const navbar = document.querySelector(".navbar");
    if (!navbar || !scrollY) return;

    if (scrollY > 100) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  };

  return (
    <>
      <nav className="navbar position-md-fixed sticky-top w-100 navbar-expand-lg bg-light border-bottom overflow-hidden z-3">
        <div className="container-xxl align-items-lg-center align-items-start flex-nowrap">
          <div className="custom-translateY-brand navbar-brand d-flex flex-column">
            <NavLink to="/" className="">
              <img className="img-fluid" src="/img/brand.png" alt="gamesub" />
            </NavLink>
            <NavLink to="/" className="">
              <img
                className="img-fluid"
                src="/img/brand-secondary.png"
                alt="gamesub"
              />
            </NavLink>
          </div>
          <button
            className="navbar-toggler mt-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start d-flex flex-lg-row flex-column justify-content-lg-between justify-content-start pt-4 px-3 p-lg-0"
            tabIndex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
          >
            <button
              type="button"
              className="btn-close mb-2 d-lg-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
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
              className="d-flex order-1 my-lg-auto order-lg-2"
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
            <hr className="d-lg-none order-2" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
