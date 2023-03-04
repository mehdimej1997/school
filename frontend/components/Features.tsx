"use client";
import { FeatureCard } from "@ui/FeatureCard";
import SectionContainer from "@ui/SectionContainer";
import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";

type Props = {};

export default function Features({}: Props) {
  return (
    <div>
      <SectionContainer>
        <div className="my-12 flex justify-center gap-8">
          <FeatureCard
            outline
            accentColor="red"
            icon={<BsFillPeopleFill size={32} />}
            title="Expert Teachers"
            description="Ras effic itur metusga via suscipit consect eturerse adi unde omnis."
          />
          <FeatureCard
            outline
            accentColor="#00a4e4"
            icon={<BsFillPeopleFill size={32} />}
            title="Quality Education"
            description="Ras effic itur metusga via suscipit consect eturerse adi unde omnis."
          />
          <FeatureCard
            outline
            accentColor="#ffc845"
            icon={<BsFillPeopleFill size={32} />}
            title="Life Time Support"
            description="Ras effic itur metusga via suscipit consect eturerse adi unde omnis."
          />
          <FeatureCard
            outline
            accentColor="#00c16e"
            icon={<BsFillPeopleFill size={32} />}
            title="Best Scholarships"
            description="Ras effic itur metusga via suscipit consect eturerse adi unde omnis."
          />
        </div>
        <div></div>
      </SectionContainer>
    </div>
  );
}
