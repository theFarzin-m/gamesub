import React from "react";
import { NavLink } from "react-router-dom";

import "./NavbarComponent.css";
import Collapsebutton from "../features/collapse/collapsebutton";
import NavLinks from "./NavLinks";

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
          <Collapsebutton />
          <div className="d-none d-lg-flex flex-row justify-content-between p-0  w-100">
            <NavLinks />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
