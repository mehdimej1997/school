import Image from "next/image";
import React from "react";
import image from "../public/images/Music_Icon.jpg";
import portrait from "../public/images/portrait.jpg";
import {
  HiBookOpen,
  HiStar,
  HiArrowNarrowRight,
  HiCalendar,
} from "react-icons/hi";
import { VariantProps, cva } from "class-variance-authority";

export const accentColor = cva(
  "absolute top-4 left-6 z-50 rounded-md text-white font-semibold",
  {
    variants: {
      intent: {
        green: "bg-green-500",
        orange: "bg-orange-400",
        blue: "bg-blue-500",
      },
    },
  }
);

export interface ICard extends VariantProps<typeof accentColor> {
  type: "blog" | "course";
}

export function Card({ intent = "blue", type }: ICard) {
  return (
    <div className="group cursor-pointer shadow-xl max-w-[400px] rounded-lg overflow-hidden">
      <div className="relative w-full aspect-video overflow-hidden">
        {type === "course" && (
          <div className={accentColor({ intent })}>
            <p className="p-1 px-2 ">Games</p>
          </div>
        )}
        <Image
          alt="image"
          src={image}
          fill
          className="group-hover:scale-110 transition-all duration-500 ease-in object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 mt-8 mb-4 mx-6">
        {type === "course" && (
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <HiBookOpen className="text-blue-500" size={24} />
              <p>14 Lesson</p>
            </div>
            <div className="flex gap-1 items-center">
              <HiStar className="text-yellow-500" size={24} />
              <p>4.2</p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet
          </p>
        </div>
        {type !== "course" ? (
          <div className="mb-4 mt-6 flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="relative h-8 aspect-square rounded-full overflow-hidden">
                <Image
                  alt="profile"
                  src={portrait}
                  className="object-cover"
                  fill
                />
              </div>
              <p className="font-semibold text-sm">Maylon Joe</p>
            </div>
            <div className="flex gap-2 items-center">
              <HiCalendar className="text-orange-400" size={21} />
              <p>Oct 10,2021</p>
            </div>
          </div>
        ) : (
          <>
            <div className="h-[1px] bg-gray-200 w-full"></div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg px-4">$30.00</p>
              <div className="flex gap-2 items-center group/link hover:bg-slate-100 p-2 px-4 rounded-full">
                <p className="font-semibold">Know Details</p>
                <HiArrowNarrowRight
                  size={21}
                  className="group-hover/link:translate-x-1 transition-all ease-in duration-200"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
