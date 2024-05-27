"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductInfo({
  mainTitle,
  description,
  price,
  stockQuantity,
  productCategory,
  CTALink,
  SKU,
  img1,
  imgAlt1,
  img2,
  imgAlt2,
  img3,
  imgAlt3,
  img4,
  imgAlt4,
  img5,
  imgAlt5,
  img6,
  imgAlt6,
}) {
  const [slideImages] = useState([img1, img2, img3, img4, img5, img6]);
  const [activeImg, setActiveImage] = useState(img1);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center relative">
      <div className="absolute top-0 right-0">
        <span className="text-[#ffba00] font-semibold capitalize hidden md:flex text-1xl md:text-2xl lg:text-3xl">
          {productCategory}
        </span>
      </div>

      <div className="flex flex-col gap-6 lg:w-2/4">
        <Image
          src={activeImg}
          alt="#"
          width={500}
          height={500}
          priority
          className="w-full h-full md:w-[50%] md:h-[50%] md:mx-auto lg:w-[80%] lg:h-[80%] aspect-square object-cover rounded-xl"
        />

        <div className="flex flex-row justify-between h-20 w-full md:max-w-[80%] mx-auto">
          {slideImages.map((img, index) => {
            return (
              <Image
                key={img}
                src={img}
                alt={`imgAlt${index + 1}`}
                width={500}
                height={500}
                priority
                className="w-[42px] h-[42px] mr-1 rounded-md cursor-pointer"
                onClick={() => setActiveImage(img)}
              />
            );
          })}
        </div>
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div className="py-1">
          <h1 className="text-3xl font-bold mt-1">{mainTitle}</h1>
        </div>

        <p className="text-gray-700">{description}</p>

        <div className="py-1">
          <h6 className="text-2xl font-semibold">
            <span className="text-xs text-slate-500">
              Price per unit including taxes:
            </span>{" "}
            €{price}
          </h6>
        </div>

        <div className="uppercase text-sm font-bold text-slate-400 flex justify-between items-center">
          <span className="text-xs text-slate-500">SKU: {SKU}</span>
          <span className="text-xs text-slate-500">
            {stockQuantity} units in stock
          </span>
        </div>

        <div className="flex flex-row justify-center md:justify-start items-center mt-2">
          <div className="w-full">
            <Link href={CTALink} target="_blank">
              <button className="bg-[#ffba00] text-white hover:bg-black font-semibold py-3 px-16 rounded-xl h-full uppercase w-full md:w-[50%]">
                buy now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
