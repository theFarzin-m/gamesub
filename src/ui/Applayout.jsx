import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import Collapse from "../features/collapse/Collapse";

export default function Applayout() {
  const [isLoading, setISLoading] = useState(true);

  setTimeout(() => setISLoading(false), 1000);

  if (isLoading) return <LoadingScreen />;

  return (
      <div className="d-flex flex-nowrap">
          <div id="collapse-main" className="d-block d-lg-none">
            <Collapse />
          </div>
        <div id="main">
          <NavbarComponent />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
  );
}
