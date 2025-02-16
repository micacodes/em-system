import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "", isLoading = false }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center justify-center";

  const variants = {
    primary: "bg-purple-700 text-white hover:bg-purple-800",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 mr-2"></span>
      ) : null}
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
