import React from "react";

export function Card({ children, className }) {
  return <div className={`bg-white p-6 rounded-lg shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-4 text-center">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
