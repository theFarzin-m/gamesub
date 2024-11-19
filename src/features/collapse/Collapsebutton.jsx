import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";

import { open, close } from "./collapseSlice";

export default function Collapsebutton() {
  const collapse = useSelector((s) => s.collapse.isOpen);
  const dispatch = useDispatch();
  
  const handelCollapse = () => {
    if (collapse) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  };

  return (
    <button
      className="btn border fs-2 p-2 mt-3 d-flex d-lg-none justify-content-center align-items-center mx-3"
      id="collapse-button"
      onClick={handelCollapse}
    >
      <MdMenu />
    </button>
  );
}
