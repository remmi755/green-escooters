import Image from "next/image";
import React from "react";
import ManualSingle from "../../../components/ManualSingle";

const Manuals = () => {
  return (
    <div className="">
      <div className="">
        <Image
          src={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2021/12/manuals.png?id=112"
          }
          alt="manuals"
          layout="responsive"
          width={1920}
          height={648}
        />
      </div>
      <h1 className="text-center font-bold text-4xl my-10">Manuals Download</h1>
      <div className="max-w-[1300px] mx-auto bg-[#f4eff1]">
        <ManualSingle
          img={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2023/09/JAF-per-sito.jpg"
          }
          alt="Jeep SENTINEL"
          title={"Jeep SENTINEL"}
          link={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2023/10/Manuale-Generale-Jeep-e-Scooter-Rev.0-DIGITAL.pdf"
          }
        />

        <ManualSingle
          img={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2021/12/2xe_adventurer_laterale.png"
          }
          alt="Jeep ADVENTURER"
          title={"Jeep ADVENTURER"}
          link={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2023/11/manual_jeep_e-scooter_JE-MO-000001-rev.-2_DIGITAL.pdf"
          }
        />

        <ManualSingle
          img={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2021/12/2xe_urban_camou_laterale.png"
          }
          alt="Jeep URBAN SAMOU"
          title={"Jeep URBAN SAMOU"}
          link={
            "https://www.jeepurbanemobility.com/wp-content/uploads/2023/11/manual_jeep_e-scooter_JE-MO-000001-rev.-2_DIGITAL.pdf"
          }
        />
      </div>
    </div>
  );
};

export default Manuals;
