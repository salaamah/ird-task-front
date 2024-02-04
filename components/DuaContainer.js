import React from "react";
import DuaCard from "./DuaCard";
import getDuas from "@/getData/getDuas";

export default async function DuaContainer() {
  const duas = await getDuas();
  //console.log(duas.data[3].dua_name_en);
  return (
    <div className=" w-2/3 p-10">
      {duas.data.map((dua) => (
        <DuaCard
          key={dua.id}
          dua_id={dua.dua_id}
          dua_name_en={dua.dua_name_en}
          top_en={dua.top_en}
          dua_arabic={dua.dua_arabic}
          transliteration_en={dua.transliteration_en}
          translation_en={dua.translation_en}
          refference_en={dua.refference_en}
          audio={dua.audio}
        />
      ))}
    </div>
  );
}
