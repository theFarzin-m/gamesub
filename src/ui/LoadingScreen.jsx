import React, { useState } from "react";

import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [dotsNum, setDotsNum] = useState(1);
  const loadingScreens = [1, 2, 3];
  const [random] = useState(
    Math.floor(Math.random() * loadingScreens.length) + 1
  );

  setTimeout(() => setDotsNum(() => (dotsNum < 3 ? dotsNum + 1 : 1)), 1000);

  const text =
    dotsNum === 1 ? ".Loading" : dotsNum === 2 ? "..Loading" : "...Loading";

  switch (random) {
    case 1:
      return (
        <div className="custom-loading-screen">
          <div className="rdr-loading">
            <img src="/img/rdr-loading.png" />
            <div className="custom-text fs-1 fw-bold mt-2">{text}</div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="custom-loading-screen">
          <div className="batman-loading">
            <div className="logo"></div>
            <div className="custom-text fs-1 fw-bold mt-2">{text}</div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="custom-loading-screen bg-dark">
          <div className="witcher-loading">
            <img src="/img/witcher-loading.png" />
            <div className="custom-text fs-1 fw-bold mt-2">{text}</div>
          </div>
        </div>
      );
    default:
      return (
        <div className="custom-loading-screen">
          <div className="batman-loading">
            <div className="logo"></div>
            <div className="custom-text fs-1 fw-bold mt-2">{text}</div>
          </div>
        </div>
      );
  }
};

export default LoadingScreen;
