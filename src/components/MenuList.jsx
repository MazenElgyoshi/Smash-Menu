import React from "react";
import MenuItem from "./MenuItem";

export default function MenuList({ items }) {
  return (
    <div className="menu-grid">
      {items.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </div>
  );
}
