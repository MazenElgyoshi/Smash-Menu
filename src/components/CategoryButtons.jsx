import React from "react";

export default function CategoryButtons({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`btn ${activeCategory === cat ? "active" : ""}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
