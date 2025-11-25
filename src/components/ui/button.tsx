import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  className?: string;          
  children: React.ReactNode; 
}

export const Button = ({ 
  variant = "solid", 
  className = "", 
  children, 
  ...props 
}: ButtonProps) => {

  const baseStyle = "inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {

    solid: "bg-pacil-blue-900 text-white hover:bg-pacil-blue-800 border-2 border-transparent shadow-md",
    outline: "bg-transparent text-pacil-blue-900 border-2 border-pacil-blue-900 hover:bg-pacil-blue-50",
  };

  const finalClass = `${baseStyle} ${variants[variant]} ${className}`;

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
};