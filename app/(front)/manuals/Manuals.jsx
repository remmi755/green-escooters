import Image from "next/image";
import React from "react";
import ManualSingle from "../../../components/ManualSingle";

const Manuals = () => {
  return (
    <div className="">
      <div className="">
        <Image
          src={"/images/manuals.jpg"}
          alt="manuals"
          layout="responsive"
          width={1920}
          height={648}
        />
      </div>
      <h1 className="text-center font-bold text-4xl my-10">Manuals Download</h1>
      <div className="max-w-[1300px] mx-auto bg-[#f4eff1]">
        <ManualSingle
          img={"/images/scooter-1.jpg"}
          alt="Jeep SENTINEL"
          title={"Jeep SENTINEL"}
          link={"/manuals/adventurer_urban_camou_escooters_manual.pdf"}
        />

        <ManualSingle
          img={"/images/scooter-2.jpg"}
          alt="Jeep ADVENTURER"
          title={"Jeep ADVENTURER"}
          link={"/manuals/adventurer_urban_camou_escooters_manual.pdf"}
        />

        <ManualSingle
          img={"/images/scooter-3.jpg"}
          alt="Jeep URBAN SAMOU"
          title={"Jeep URBAN SAMOU"}
          link={"/manuals/adventurer_urban_camou_escooters_manual.pdf"}
        />
      </div>
    </div>
  );
};

export default Manuals;
