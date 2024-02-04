// use client

import getCategories from "@/getData/getCategories";
import React from "react";
import Category from "./Category";

export default async function DuaCategories() {
  const categories = await getCategories();

  return (
    <div className="p-1 w-2/4">
      {/* desing categories heading with full widht */}
      <h3 className="text-3xlw-[250px] h-[40px] rounded-3xs bg-green-500 border-[1px] border-solid border-gainsboro-100 text-center">
        Categories
      </h3>
      <div>
        <input
          type="text"
          placeholder=" Search Category"
          className="w-[250px] h-[40px] rounded-3xs bg-white border-[1px] border-solid border-gainsboro-100"
        />
      </div>
      {categories.data.map((category) => (
        <Category
          key={category.id}
          cat_id={category.cat_id}
          cat_name_en={category.cat_name_en}
          no_of_subcat={category.no_of_subcat}
          no_of_dua={category.no_of_dua}
        ></Category>
      ))}
    </div>
  );
}
