import React, { useState } from "react";
import PropTypes from "prop-types";
import { InfoIcon } from "../../icons/FloatIcons";
import "./WooriFloatButton.css";

const WooriFloatButton = ({
  label,
  icon,
  type,
  shape,
  style,
  tooltip,
  badge,
  position,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  const positionStyle = {
    position: "fixed",
    ...position,
    ...style,
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        className={`woori-float-button ${type} ${shape}`}
        style={positionStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        {icon || InfoIcon}
        {badge?.count > 0 && <span className="woori-badge">{badge.count}</span>}
      </button>
      {hovered && tooltip && <div className="woori-tooltip">{tooltip}</div>}
    </div>
  );
};

WooriFloatButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.oneOf([
    "primary",
    "default",
    "info",
    "warn",
    "error",
    "success",
  ]),
  shape: PropTypes.oneOf(["circle", "rounded-square"]),
  style: PropTypes.object,
  tooltip: PropTypes.string,
  badge: PropTypes.shape({
    count: PropTypes.number,
  }),
  position: PropTypes.shape({
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

WooriFloatButton.defaultProps = {
  label: "info",
  icon: null,
  type: "default",
  shape: "circle",
  style: {},
  tooltip: "info",
  badge: { count: 0 },
  position: { bottom: "20px", right: "20px" },
  onClick: () => {},
};

export default WooriFloatButton;
