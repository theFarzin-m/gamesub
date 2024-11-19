import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

export default function Applayout() {
  const [isLoading, setISLoading] = useState(true);

  setTimeout(() => setISLoading(false), 1000);

  if (isLoading) return <LoadingScreen />;

  return (
    <ReactLenis root>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ReactLenis>
  );
}
