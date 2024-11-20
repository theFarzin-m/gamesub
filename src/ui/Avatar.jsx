import React from "react";

import "./Avatar.css";

export default function Avatar({ width }) {
  return (
    <div
      style={{ maxWidth: width, maxHeight: width }}
      className="custom-profile-image d-flex justify-content-center align-items-center rounded-circle"
    >
      <img
        src="/img/default-avatar.jpg"
        alt="profile image"
        className="overflow-hidden"
        width="111%"
        height="111%"
      />
    </div>
  );
}
