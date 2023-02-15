import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Nav = (props: Props) => {
  return (
    <nav className="flex justify-between items-center container mx-auto h-20 font-semibold">
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
    </nav>
  );
};
