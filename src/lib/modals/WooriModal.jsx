import React, { useEffect, useState } from "react";
import {
  AlertIcon,
  WarningIcon,
  MultiChoiceIcon,
  CloseIcon,
} from "../icons/Icons";
import "./WooriModal.css";

const getIcon = (type) => {
  const icons = {
    warning: <WarningIcon size={24} color="#ffa500" />,
    multiChoice: <MultiChoiceIcon size={24} color="#4287f5" />,
    alert: <AlertIcon size={24} color="#ffa500" />,
  };
  return icons[type] || icons.alert;
};

export const WooriModal = ({
  children,
  isOpen,
  onClose,
  style,
  contentStyle,
  type,
  title,
  message,
  buttons,
  autoClose,
  autoCloseTime = 5000,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [countdown, setCountdown] = useState(Math.floor(autoCloseTime / 1000));

  useEffect(() => {
    if (!isOpen) {
      setIsShowing(false);
      return;
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };

    setIsShowing(true);
    window.addEventListener("keydown", handleEsc);

    let countdownTimer;
    if (autoClose) {
      setCountdown(Math.floor(autoCloseTime / 1000));
      countdownTimer = setInterval(() => {
        setCountdown((prev) =>
          prev <= 1 ? (clearInterval(countdownTimer), onClose(), 0) : prev - 1
        );
      }, 1000);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      if (countdownTimer) clearInterval(countdownTimer);
    };
  }, [isOpen, onClose, autoClose, autoCloseTime]);

  if (!isOpen) return null;

  const isBasicType = type === "basic" || !type;

  const modalContent = isBasicType ? (
    children
  ) : (
    <>
      <WooriModal.Header>
        <div className="modal-title-container">
          {getIcon(type)}
          <h2 className="modal-title">{title}</h2>
        </div>
      </WooriModal.Header>
      <WooriModal.Body>
        {message && <p>{message}</p>}
        {autoClose && (
          <div className="auto-close-countdown">
            Closing automatically after {countdown} seconds ...
          </div>
        )}
      </WooriModal.Body>
      <WooriModal.Footer>
        {buttons ? (
          buttons.map((button, index) => (
            <button
              key={index}
              className="custom-button"
              onClick={button.onClick}
            >
              {button.text}
            </button>
          ))
        ) : (
          <button className="custom-button" onClick={onClose}>
            OK
          </button>
        )}
      </WooriModal.Footer>
    </>
  );

  return (
    <div
      className={`modal-overlay ${isShowing ? "show" : ""} ${
        !isBasicType ? "top-aligned" : ""
      }`}
      onClick={onClose ? onClose : undefined}
      style={style}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...contentStyle,
          fontSize: "16px",
          backgroundColor: "white",
          border: type === "warning" ? "none" : "none",
        }}
        data-type={type}
      >
        {onClose && (
          <button className="modal-close-btn" onClick={onClose}>
            <CloseIcon size={20} color="#333" />
          </button>
        )}

        {modalContent}
      </div>
    </div>
  );
};

WooriModal.Header = ({ children }) => (
  <div className="modal-header">{children}</div>
);
WooriModal.Body = ({ children }) => (
  <div className="modal-body">{children}</div>
);
WooriModal.Footer = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

export default WooriModal;
