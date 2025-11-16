import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "large",
  type = "button",
  disabled = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles =
    "rounded-full text-16 leading-24 black-italic transition-all cursor-pointer flex items-center justify-center";

  // Size styles
  const sizeStyles = {
    large: "px-24 py-6 lg:px-32 lg:py-8",
    small: "px-24 py-6",
  };

  // Variant styles (normal state)
  const variantStyles = {
    primary: {
      normal:
        "bg-bg-primary-normal text-neutral-invert-accent hover:bg-bg-primary-accent",
      disabled: "opacity-40 cursor-not-allowed",
    },
    secondary: {
      normal: "shadow-button text-neutral-accent hover:shadow-button-hover",
      disabled: "opacity-40 cursor-not-allowed",
    },
  };

  // Get styles based on state
  const getVariantStyles = () => {
    if (disabled) {
      return variantStyles[variant].disabled;
    }
    return variantStyles[variant].normal;
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${
        sizeStyles[size]
      } ${getVariantStyles()} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
