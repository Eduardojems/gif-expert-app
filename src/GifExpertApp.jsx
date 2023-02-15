import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Multitraslados"]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, '456'])
    //setCategories(cat=>[...cat, '789']);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      //onNewCategory={onAddCategory}
      ></AddCategory>

      {categories.map((category) => {
        return <GifGrid key={category} category={category}></GifGrid>;
      })}
    </>
  );
};
