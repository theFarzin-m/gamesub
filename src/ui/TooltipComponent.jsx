import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const TooltipComponent = ({ children, tooltipText, placement, show }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipText}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement={placement}
      overlay={renderTooltip}
      show={show}
      delay={{ show: 0, hide: 500 }}
      transition={false}
      popperConfig={{
        strategy: "fixed",
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: "viewport",
            },
          },
          {
            name: "computeStyles",
            options: {
              adaptive: false,
            },
          },
        ],
      }}
    >
      {children}
    </OverlayTrigger>
  );
};

export default TooltipComponent;
