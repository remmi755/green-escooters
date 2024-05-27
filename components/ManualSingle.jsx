import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

const ManualSingle = ({ img, title, link }) => {
  return (
    <div className="flex gap-12 p-8">
      <Image src={img} alt="Jeep SENTINEL" width={280} height={280} />
      <div className="">
        <h1 className="text-4xl font-bold py-2">{title}</h1>
        <p className="mt-4 text-xl">electric scooter</p>
        <button className="mt-8 px-4 py-2 bg-[#ffba00]">
          <Link className="flex items-center gap-2" href={link}>
            <span className="font-bold">DOWNLOAD PDF</span>
            <span>
              <HiChevronRight />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ManualSingle;
