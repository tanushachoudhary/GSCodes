import React from "react";
export function Input({ type, placeholder, ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    );
  }