import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { close } from "../features/collapse/collapseSlice";

export default function OnPageChange() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollY = 0
    dispatch(close());
  }, [pathname]);

  return null;
}
