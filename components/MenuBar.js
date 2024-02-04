import Image from "next/image";
import React from "react";
import duaLogo from "../public/menu-icons/dua-logo.svg";
import home from "../public/menu-icons/home.svg";
import alldua from "../public/menu-icons/alldua.svg";
import memorize from "../public/menu-icons/memorize.svg";
import bookmark from "../public/menu-icons/bookmark.svg";
import ruqyah from "../public/menu-icons/ruqyah.svg";
import duaInfo from "../public/menu-icons/dua-info.svg";
import books from "../public/menu-icons/books.svg";
import support from "../public/menu-icons/support.png";

export default function MenuBar() {
  const menus = [
    { id: 1, icon: home, text: "Home" },
    { id: 2, icon: alldua, text: "All Duas" },
    { id: 3, icon: memorize, text: "Memorize" },
    { id: 4, icon: bookmark, text: "Bookmark" },
    { id: 5, icon: ruqyah, text: "Ruqyah" },
    { id: 6, icon: duaInfo, text: "Dua Info" },
    { id: 7, icon: books, text: "Books" },
  ];
  return (
    <div className="absolute top-[40px] left-[40px] w-[100px] h-[927px] text-center text-xs text-gray-200 font-poppins">
      <div className="absolute top-[0px] left-[0px] rounded-3xl bg-white w-[100px] h-[927px]" />
      <Image
        className="absolute top-[31px] left-[14px] w-[73px] h-[73px] object-cover"
        alt=""
        src={duaLogo}
      />

      <div className="absolute top-[179.5px] left-[31px] flex flex-col items-start justify-start gap-[27px]">
        {/* <Image
          className="w-[38px] relative h-[38px]"
          alt=""
          src={alldua}
        /> */}
        {menus.map((menu) => (
          <Image
            key={menu.id}
            className="w-[28px] relative h-[28px]"
            alt=""
            src={menu.icon}
          />
        ))}
      </div>

      <Image
        className="absolute top-[670px] left-[22px] w-[57px] h-14 object-contain"
        alt=""
        src={support}
      />
    </div>
  );
}
