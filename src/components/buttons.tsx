import React from "react";
import { twMerge } from "tailwind-merge";

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonField = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "px-[16px] py-[6px] rounded-[100px] text-[0.9rem] uppercase border duration-100",
          className
        )}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

export { ButtonField };
