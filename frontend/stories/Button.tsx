import { cva, VariantProps } from "class-variance-authority";
import { LinkProps } from "next/link";
import React, { HTMLProps } from "react";

const buttonStyles = cva(
  "flex items-center justify-center  px-8 py-2 rounded-full font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-md active:shadow-none active:-translate-y-[0px]",
  {
    variants: {
      intent: {
        primary: ["bg-[#f4a261]", "hover:bg-[#e76f51]"],
        secondary: ["bg-green-500", "hover:bg-[#e76f51]"],
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
  }
);

export interface IButtonProps
  extends VariantProps<typeof buttonStyles>,
    HTMLProps<HTMLDivElement & LinkProps> {
  fullWidth?: boolean;
}

export const Button = ({
  intent = "primary",
  fullWidth = false,
  href,
  ...props
}: IButtonProps) => {
  return (
    <div
      role="button"
      {...props}
      className={`${buttonStyles({ intent, fullWidth })}`}
    >
      <p>{props.children || "Button"}</p>
    </div>
  );
};
