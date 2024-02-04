import Image from "next/image";
import React from "react";
import catIcon from "../public/duar_gurutto.svg";
import SubCategory from "./SubCategory";

export default function Category({
  cat_id,
  cat_name_en,
  no_of_subcat,
  no_of_dua,
}) {

 
  return (
    <div>
      <div className="self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 gap-[16px] text-left text-base text-darkslategray-200 font-inter border-b-[1px] border-solid border-whitesmoke-100">
        <div className="rounded-3xs bg-aliceblue flex flex-row items-start justify-start p-2.5">
          <Image
            className="w-10 relative h-10 object-cover"
            alt=""
            src={catIcon}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
          {/*         <div className="w-[255px] relative font-semibold inline-block">
            {cat_name_en}
          </div> */}
          <div className="relative text-sm font-poppins text-black-200 text-left">
            <h1 className="font-bold">{cat_name_en}</h1> Subcategory:{" "}
            {no_of_subcat}
          </div>
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gainsboro-100" />
        <div className="flex flex-col items-center justify-center gap-[5px]">
          {/* <div className="relative font-semibold">{no_of_dua}</div> */}
          <div className="relative text-sm font-poppins text-black-200">
            {no_of_dua} Duas
          </div>
        </div>
      </div>
      <div>
        <SubCategory cat_id={cat_id}></SubCategory>
      </div>
    </div>
  );
}
