import React from "react";

import {
  HiArrowDownTray,
  HiOutlineChartPie,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineDocumentText,
  HiOutlineKey,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="custom-sidebar bg-light d-flex flex-column h-100 border-end ">
      <ul className="list-unstyled p-3 pe-0">
        <li className="list-item mb-2">
          <NavLink className="btn fs-5 px-0" to="dashboard">
            <HiOutlineChartPie className="fs-4" />
            <span className="mx-2">داشبورد</span>
          </NavLink>
        </li>
        <li className="list-item mb-2">
          <NavLink className="btn fs-5 px-0" to="orders">
            <HiOutlineDocumentText className="fs-4" />
            <span className="mx-2">سفارشات</span>
          </NavLink>
        </li>
        <li className="list-item my-2">
          <NavLink className="btn fs-5 px-0" to="downloads">
            <HiArrowDownTray className="fs-4" />
            <span className="mx-2">دانلودها</span>
          </NavLink>
        </li>
        <li className="list-item my-2">
          <NavLink className="btn fs-5 px-0" to="serial-numbers">
            <HiOutlineKey className="fs-4" />
            <span className="mx-2">شماره‌سریال‌ها</span>
          </NavLink>
        </li>
        <li className="list-item my-2">
          <NavLink className="btn fs-5 px-0" to="wallet">
            <HiOutlineCreditCard className="fs-4" />
            <span className="mx-2">شارژکیف‌‌پول</span>
          </NavLink>
        </li>
        <li className="list-item my-2">
          <NavLink className="btn fs-5 px-0" to="edite">
            <HiOutlinePencilSquare className="fs-4" />
            <span className="mx-2">ویرایش‌حساب</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}