import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent";
};

const Button = ({
  children,
  className = "",
  variant = "accent",
}: ButtonProps) => {
  if (!children) return null;

  const baseStyles = "px-4 py-2 rounded-md cursor-pointer";
  const variantStyles = {
    primary: "bg-primary text-gray-900",
    accent: "bg-gray-900 text-gray-100",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
