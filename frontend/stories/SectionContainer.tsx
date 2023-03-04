import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  header?: string;
  subHeader?: string;
};

export default function SectionContainer({
  children,
  header = "Achieve Your Goals With Edu School",
  subHeader = "Best Features",
  ...props
}: Props) {
  return (
    <div className="container mx-auto">
      <div className="w-1/3 text-center mx-auto">
        <h3 className="uppercase font-light text-lg">{subHeader}</h3>
        <h2 className="font-bold text-5xl">{header}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
