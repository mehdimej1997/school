import { cva } from "class-variance-authority";
import React from "react";
import { IButtonProps } from "types/Button.type";

export const buttonStyles = cva(
  "flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200 ease-out ",
  {
    variants: {
      intent: {
        warning: ["bg-[#f4a261]", "text-white", "hover:bg-[#e76f51]"],
        white: [
          "bg-white",
          "text-black",
          "hover:text-white",
          "hover:bg-[#e76f51]",
        ],
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      float: {
        true: [
          "hover:shadow-md",
          "active:shadow-none",
          "hover:-translate-y-[2px]",
          "active:-translate-y-[0px]",
        ],
        false: "",
      },
    },
  }
);

export const Button = ({
  intent = "warning",
  fullWidth = false,
  float = true,
  text = "Button",
  href,
  ...props
}: IButtonProps) => {
  return (
    <div
      role="button"
      {...props}
      className={`${buttonStyles({ intent, fullWidth, float })}`}
    >
      <p>{props.children || text}</p>
    </div>
  );
};
