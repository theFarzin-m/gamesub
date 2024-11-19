import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

import "./Profile.css";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

export default function Profile() {
  return (
    <div id="profile" className="container-xxl">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col p-4">
          <div className="d-flex flex-nowrap mb-4">
            <div className="custom-profile-image d-flex justify-content-center align-items-center rounded-circle border border-secondary-subtle">
              <img
                src="/img/default-avatar.jpg"
                alt="profile image"
                className="overflow-hidden"
                width="111%"
                height="111%"
              />
            </div>
            <div className="mx-4 mt-4 pt-2">
              <div className="h2">user name</div>
              <div className="h4 my-3">email@email.com</div>
              <button className="btn btn-primary fs-6">
                <HiOutlineArrowRightOnRectangle className="me-2 fs-5" />
                خروج
              </button>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
