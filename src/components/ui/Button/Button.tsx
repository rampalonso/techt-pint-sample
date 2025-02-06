import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  if (!children) return null;

  return <button className="bg-gray-900 text-gray-100 px-4 py-2 rounded-md cursor-pointer">{children}</button>;
};

export default Button;
