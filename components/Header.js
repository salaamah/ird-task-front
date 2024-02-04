import React from "react";

export default function Header() {
  return (
    <header className="relative bg-red-500">
      <div className="absolute top-[5px] left-[170px] flex flex-col items-start justify-start gap-[2px] text-5xl font-poppins">
        <div className="relative font-semibold">Dua Page</div>
      </div>

      <div className="absolute top-[14px] left-[1050px] flex flex-row items-center justify-start gap-[15px] text-black-100">
        <input
          type="text"
          placeholder=" Search by Dua Name"
          className="w-[250px] h-[40px] rounded-3xs bg-white border-[1px] border-solid border-gainsboro-100"
        />
      </div>
    </header>
  );
}
