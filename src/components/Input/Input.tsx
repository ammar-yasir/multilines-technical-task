import React from "react";
import type { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        className={`
          w-full px-4 py-2.5 border rounded-lg text-sm text-gray-800
          focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-transparent
          transition
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default Input;