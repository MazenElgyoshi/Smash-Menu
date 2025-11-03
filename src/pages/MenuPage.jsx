import { useState } from "react";
import CategoryButtons from "../components/CategoryButtons";
import MenuList from "../components/MenuList";
import menuData from "../data/menuData";
import "../styles/MenuPage.css";



export default function MenuPage() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div>
      <CategoryButtons
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <MenuList items={menuData[activeCategory]} />
    </div>
  );
}
