import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        solid:
          "bg-pacil-blue-900 text-white hover:bg-pacil-blue-800 border-2 border-transparent shadow-md",
        outline:
          "bg-transparent text-pacil-blue-900 border-2 border-pacil-blue-900 hover:bg-pacil-blue-50",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
