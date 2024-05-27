"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [navigation, setNavigation] = useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <header className="w-full bg-slate-800 text-[#ffba00] fixed top-0 left-0 z-30">
      <nav className="check max-w-[1440px] mx-auto h-[90px] flex justify-between items-center px-7 py-4">
        <Link href="/" className="cursor-pointer">
          <p className="text-custom_gold font-bold text-3xl lg:text-2xl xl:text-4xl">
            eScooters
          </p>
        </Link>

        <ul
          className="
                    hidden
                    lg:flex
                    uppercase
                    font-semibold
                    text-[14px]
                    xl:text-[16px]
                    cursor-pointer
                    text-white
                "
        >
          <li className="">
            <Link href="/">home</Link>
          </li>
          <li className="ml-12">
            <Link href="/company">company</Link>
          </li>
          <li className="ml-12">
            <Link href="/manuals">manuals</Link>
          </li>
          <li className="ml-12">
            <Link href="/contact">contact</Link>
          </li>
        </ul>

        {/* Smaller screens - Toggle buttons */}
        <div onClick={handleNavigation} className="block lg:hidden z-10">
          {navigation ? (
            <AiOutlineClose size={22} className="text-custom_white" />
          ) : (
            <AiOutlineMenu size={22} className="text-custom_white" />
          )}
        </div>

        {/* Smaller screens - Navigation links */}
        <div
          className={
            navigation
              ? "lg:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-center ease-in duration-300"
              : "lg:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen text-center ease-in duration-300"
          }
        >
          <div className="w-full text-custom_white text-1xl">
            <div className="w-full mb-10 pb-10 flex justify-center items-center mx-auto text-3xl font-bold">
              <Link href="/" onClick={handleNavigation}>
                eScooters
              </Link>
            </div>

            <ul className="check px-8 uppercase font-bold cursor-pointer">
              <li className="m-4" onClick={handleNavigation}>
                <Link href="/">home</Link>
              </li>
              <li className="m-4" onClick={handleNavigation}>
                <Link href="/company">company</Link>
              </li>
              <li className="m-4" onClick={handleNavigation}>
                <Link href="/manuals">manuals</Link>
              </li>
              <li className="" onClick={handleNavigation}>
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
