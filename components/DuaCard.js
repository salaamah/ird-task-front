import React from "react";
import Image from "next/image";
import duacard from "../public/dua-icons/duacard.svg";
import audioIcon from "../public/dua-icons/audiobtn.svg";
import copy from "../public/dua-icons/copy.svg";
import bookmark from "../public/dua-icons/bookmark.svg";
import plan from "../public/dua-icons/plan.svg";
import share from "../public/dua-icons/share.svg";
import report from "../public/dua-icons/report.svg";
import Link from "next/link";

function DuaCard(props) {
  const {
    dua_id,
    dua_name_en,
    top_en,
    dua_arabic,
    transliteration_en,
    translation_en,
    refference_en,
    audio,
  } = props;
  const options = [
    { id: 1, icon: copy },
    { id: 2, icon: bookmark },
    { id: 3, icon: plan },
    { id: 4, icon: share },
    { id: 5, icon: report },
  ];
  return (
    <main className="rounded-3xs bg-white flex flex-col items-start justify-start py-[15px] px-[30px] gap-[28px] border-[0.5px] border-solid border-gainsboro-100">
      <div className="flex flex-col items-start justify-center gap-[28px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
          <Image className="w-[35px] relative h-[35px]" alt="" src={duacard} />
          <div className="relative leading-[25px] font-semibold">
            {dua_id}. {dua_name_en}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[28px] text-darkslategray-200">
          <div className="flex flex-col items-start justify-center">
            <div className="w-[529px] relative leading-[24px] inline-block">
              {top_en}
            </div>
          </div>
          <div className="w-[529px] relative text-5xl leading-[71.33px] font-open-sans text-right inline-block">
            {dua_arabic}
          </div>
          <div className="flex flex-col items-start justify-center gap-[10px]">
            <div className="w-[529px] relative leading-[25px] inline-block">
              <span className="font-semibold">{`Transliteration: `}</span>
              <i>{transliteration_en}</i>
            </div>
            <div className="self-stretch relative leading-[25px]">
              <span className="font-semibold">Translation:</span>
              <span>{` ${translation_en}`}</span>
            </div>
          </div>
        </div>
        <div className="w-[529px] relative leading-[24px] inline-block">
          <p className="m-0 font-semibold">Reference:</p>
          <p className="m-0 font-medium text-darkslategray-200">
            {refference_en}
          </p>
        </div>
      </div>
      <div className="w-[529px] flex flex-row items-center justify-between">
        {audio !== null && (
          <Link href={audio}>
            <Image className="w-11 relative h-11" alt="" src={audioIcon} />
          </Link>
        )}
        {audio === null && <p className="w-11 relative h-11"></p>}
        <div className="flex flex-row items-center justify-end gap-[39px]">
          {options.map((option) => (
            <Image
              key={option.id}
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src={option.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default DuaCard;
