import React from "react";

export default function Navigation({ activePage, setActivePage }) {
  return (
    <nav className="nav-buttons">
      <button
        id="btn-menu"
        className={activePage === "menu" ? "active" : ""}
        onClick={() => setActivePage("menu")}
      >
        Menu 🥩
      </button>
      <button
        id="btn-offers"
        className={activePage === "offers" ? "active" : ""}
        onClick={() => setActivePage("offers")}
      >
        Offers 🎉
      </button>
    </nav>
  );
}
