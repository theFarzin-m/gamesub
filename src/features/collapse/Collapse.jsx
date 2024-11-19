import React from "react";
import { useDispatch } from "react-redux";

import NavLinks from "../../ui/NavLinks";
import useOutsideClick from "../../hooks/useOutsideClick";
import { close } from "./collapseSlice";

import "./Collapse.css";

export default function Collapse() {
  const dispath = useDispatch();

  const closeHandel = () => {
    dispath(close());
  };
  const ref = useOutsideClick(closeHandel);


  return (
    <div
      className="d-felx flex-nowrap flex-column justify-content-start pt-4 px-3 h-100 position-fixed bg-light z-4"
      id="collapse"
      ref={ref}
    >
      <NavLinks />
    </div>
  );
}
