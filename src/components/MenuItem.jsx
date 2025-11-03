import React from "react";

export default function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      {item.priceM && item.priceL ? (
        <p>M: {item.priceM} جنيه — L: {item.priceL} جنيه</p>
      ) : (
        <p>{item.price} جنيه</p>
      )}
    </div>
  );
}
