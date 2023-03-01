import { Button } from "@ui/Button";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex min-h-screen flex-col-reverse items-center justify-between gap-6 md:flex-row">
      <div className="flex flex-col gap-10">
        <div className="text-[72px] leading-[70px]">
          <h1 className=" font-bold">
            Your Kids <br /> Deserve The
          </h1>
          <h1 className="font-thin">Best Education</h1>
        </div>
        <p>Active Learning, Expert Teachers & Safe Environment</p>
        <Button>
          <p>Admission Now</p>
        </Button>
      </div>

      <div className="relative aspect-[2/3] w-[300px] md:w-[400px]">
        <div className="absolute  top-16 -left-[10%] rounded-message bg-cyan-600 p-4">
          <p className="font-semibold text-2xl text-white">Back to School</p>
          <div className="relative">
            <div className="border-triangle"></div>
          </div>
        </div>
        <div className="absolute bottom-0 aspect-square w-full rounded-weave bg-gradient-to-tr from-cyan-600 to-blue-300" />
        <Image alt="child_with_bag" src={"/images/child.png"} fill />
      </div>
    </div>
  );
}
