import { buttonStyles } from "@ui/Button";
import { VariantProps } from "class-variance-authority";
import { LinkProps } from "next/link";
import { HTMLProps } from "react";

export interface IButtonProps
  extends VariantProps<typeof buttonStyles>,
    HTMLProps<HTMLDivElement & LinkProps> {
  float?: boolean;
  fullWidth?: boolean;
  text?: string;
}
