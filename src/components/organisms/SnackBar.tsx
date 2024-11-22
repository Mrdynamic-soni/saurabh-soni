import React from "react";

interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ open, message, onClose }) => {
  return (
    open && (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          &times;
        </button>
      </div>
    )
  );
};

export default Snackbar;
