import getSubCategories from '@/getData/getSubCategories'
import React from 'react'

export default async function SubCategory({cat_id}) {
    const result = await getSubCategories();
    const subCats = result.data.filter(subCat => subCat.cat_id == cat_id);
    //console.log(subCats);
  return (
    <div>
        <ul>
            {
                subCats.map(subCat => (
                    <li key={subCat.id}>{subCat.subcat_name_en}</li>
                ))
            }
        </ul>
    </div>
  )
}
