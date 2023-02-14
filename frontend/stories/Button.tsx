import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonStyles = cva("flex items-center justify-center px-4 py-2", {
  variants: {
    intent: {
      primary: "bg-blue-400",
      secondary: "bg-green-300",
    },
  },
});

export interface IButtonProps
  extends VariantProps<typeof buttonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ intent, ...props }: IButtonProps) => {
  return (
    <button {...props} className={`${buttonStyles({ intent })}`}>
      {props.children || "Button"}
    </button>
  );
};
