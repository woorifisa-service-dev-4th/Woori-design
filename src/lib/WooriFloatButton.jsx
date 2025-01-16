import React from "react";
import PropTypes from "prop-types";

const WooriFloatButton = ({ label, onClick, style }) => {
  const defaultStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    fontSize: "16px",
    fontWeight: "bold",
    ...style,
  };

  const hoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.3)",
  };

  return (
    <button
      style={defaultStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, {
          transform: "scale(1)",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
        });
      }}
    >
      {label}
    </button>
  );
};

WooriFloatButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

WooriFloatButton.defaultProps = {
  onClick: () => {},
  style: {},
};

export default WooriFloatButton;
