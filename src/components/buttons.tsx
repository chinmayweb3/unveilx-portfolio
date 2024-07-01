import React from "react";

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonField = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, ...props }) => {
    return (
      <button
        className="px-[16px] py-[10px] rounded-[100px] text-[0.9rem] uppercase border"
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

export default ButtonField;
