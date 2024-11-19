import React, { useState } from "react";
import { Link } from "react-scroll";

import TooltipComponent from "../../ui/TooltipComponent";
import "./VerticalPagination.css";

export default function VerticalPagination() {
  const [showTooltip, setShowTooltip] = useState("");

  const handelShowingTooltip = (sectionName) => {
    setShowTooltip(sectionName);
    setTimeout(() => setShowTooltip(""), 2000);
  };
  return (
    <div
      id="vertical-pagination"
      className="custom-vertical-pagination position-fixed d-flex flex-column z-1"
    >
      <TooltipComponent
        tooltipText="آغاز"
        placement="left"
        show={showTooltip === "intro"}
      >
        <Link
          onSetActive={() => handelShowingTooltip("intro")}
          onMouseEnter={() => handelShowingTooltip("intro")}
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-200}
          className="custom-pagination-link rounded-circle my-2"
        ></Link>
      </TooltipComponent>

      <TooltipComponent
        tooltipText="راهنمایی"
        placement="left"
        show={showTooltip === "guide"}
      >
        <Link
          onSetActive={() => handelShowingTooltip("guide")}
          onMouseEnter={() => handelShowingTooltip("guide")}
          activeClass="active"
          to="giude"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-200}
          className="custom-pagination-link rounded-circle my-2"
        ></Link>
      </TooltipComponent>

      <TooltipComponent
        tooltipText="محصولات"
        placement="left"
        show={showTooltip === "products"}
      >
        <Link
          onSetActive={() => handelShowingTooltip("products")}
          onMouseEnter={() => handelShowingTooltip("products")}
          activeClass="active"
          to="products"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-200}
          className="custom-pagination-link rounded-circle my-2"
          href="#products"
        ></Link>
      </TooltipComponent>
      <TooltipComponent
        tooltipText="سوالات"
        placement="left"
        show={showTooltip === "questions"}
      >
        <Link
          onSetActive={() => handelShowingTooltip("questions")}
          onMouseEnter={() => handelShowingTooltip("questions")}
          activeClass="active"
          to="questions"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-200}
          className="custom-pagination-link rounded-circle my-2"
          href="#products"
        ></Link>
      </TooltipComponent>
      <TooltipComponent
        tooltipText="شبکه اجتماعی"
        placement="left"
        show={showTooltip === "social"}
      >
        <Link
          onSetActive={() => handelShowingTooltip("social")}
          onMouseEnter={() => handelShowingTooltip("social")}
          activeClass="active"
          to="social"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-200}
          className="custom-pagination-link rounded-circle my-2"
          href="#products"
        ></Link>
      </TooltipComponent>
    </div>
  );
}
