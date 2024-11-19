import React, { useEffect, useRef } from "react";

import "./Home.css";
import IntroSection from "./IntroSection";
import VerticalPagination from "./VerticalPagination";
import GiudeSction from "./GiudeSction";
import ProductSection from "./ProductSection";
import QuestionsSection from "./QuestionsSection";
import SocialSection from "./SocialSection";

export default function Home() {
  return (
    <>
      <VerticalPagination />
      <IntroSection />
      <GiudeSction />
      <ProductSection />
      <QuestionsSection />
      <SocialSection />
    </>
  );
}
