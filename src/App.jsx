import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import MenuPage from "./pages/MenuPage";
import OffersPage from "./pages/OffersPage";

function App() {
  const [activePage, setActivePage] = useState("menu"); // menu أو offers

  return (
    <div className="app">
      <Header />
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {activePage === "menu" ? <MenuPage /> : <OffersPage />}

      <Footer />
    </div>
  );
}

export default App;
