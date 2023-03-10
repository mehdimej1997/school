import { cva } from "class-variance-authority";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IFeatureCard } from "types/FeatureCard.type";

export const featureCardStyle = cva(
  "flex justify-center items-center flex-col gap-4 shadow-lg max-w-[280px] p-8 rounded-sm transition-all duration-300 outline outline-white",
  {
    variants: {
      outline: {
        true: ["outline-1"],
        false: ["outline-0"],
      },
    },
  }
);

export function FeatureCard({
  icon = <FaUserAlt />,
  title = "title",
  description = "lorem ipsum",
  accentColor = "white",
  outline = false,
}: IFeatureCard) {
  const [state, setState] = useState(false);
  function outlineStyle() {
    if (state) {
      return { outlineColor: accentColor };
    }
    return {};
  }

  return (
    <div
      className={`${featureCardStyle({
        outline,
      })}`}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
      style={{ ...outlineStyle(), aspectRatio: 1 / 1 }}
    >
      <div className="relative">
        <div
          style={{ backgroundColor: accentColor, opacity: 0.1 }}
          className="rounded-full h-20 w-20"
        />
        <div
          style={{ color: accentColor }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}
