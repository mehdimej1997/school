import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Nav = (props: Props) => {
  return (
    <nav className="absolute left-0 h-20 w-full font-semibold">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <ul className="flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/">Courses</Link>
            <Link href="/">Contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
