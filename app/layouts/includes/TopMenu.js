"use client";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

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
          >
            <div
              id="AuthDropdown"
              className="absolute bg-white w-[2000px] text-[#333333] z-40
              top-[20px] left-[0] border shadow-lg"
            >
              <div className="flex items-center justify-start gap-1 p-3"></div>
            </div>
            <BsChevronDown />
          </Link>
        </div>
      </div>
    </>
  );
}
