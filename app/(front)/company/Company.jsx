import React from "react";
import Image from "next/image";

const Company = () => {
  return (
    <div className="mt-20 max-w-[1440px] mx-auto">
      <div className="">
        <Image
          src={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2021/12/azienda.png?id=112"
          }
          alt="factory"
          layout="responsive"
          width={1920}
          height={648}
        />
      </div>
      <h1 className="font-bold text-4xl text-center my-16">THE COMPANY</h1>
      <div className="pb-5  flex">
        <div className="w-1/2">
          <Image
            src={
              "https://www.jeepurbanemobility.com/wp-content/uploads/2021/12/logo-jeep-uem.png"
            }
            alt="Company"
            layout="responsive"
            width={400}
            height={400}
          />
        </div>

        <div className="w-1/2 px-4">
          <p className="text-3xl font-bold text-center">About Us</p>
          <p className="text-lg mt-10">
            Jeep Urban eMobility is a brand that is inspired by the Jeep® brand
            and is dedicated to electric mobility. It is a brand that is
            committed to delivering the best electric scooters for urban
            mobility. Jeep Urban eMobility is a brand that is inspired by the
            Jeep® brand and is dedicated to electric mobility. It is a brand
            that is committed to delivering the best electric scooters for urban
            mobility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
