import { featureCardStyle } from "@ui/FeatureCard";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

export interface IFeatureCard extends VariantProps<typeof featureCardStyle> {
  icon?: ReactNode;
  accentColor?: string;
  title: string;
  description: string;
}
