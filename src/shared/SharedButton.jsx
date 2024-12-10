import React from "react";

const SharedButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` bg-gray-900 py-[5px] px-[12px]   full text-white  font-sans disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};



export default SharedButton
