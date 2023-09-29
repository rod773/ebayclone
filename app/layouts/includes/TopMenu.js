"use client";

import Link from "next/link";

export default function TopMenu() {
  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[11px] text-[#333333] ox-2 h-8
          "
          ></ul>
          <li className="relative px-3"></li>
          <Link
            href="/auth"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          ></Link>
        </div>
      </div>
    </>
  );
}
