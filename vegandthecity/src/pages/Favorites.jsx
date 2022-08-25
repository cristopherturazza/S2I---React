import React from "react";
import Header from "../components/Header/Header";
import FavoritesPanel from "../components/FavoritesPanel/FavoritesPanel";
import Footer from "../components/Footer/Footer";
import FavoritesContextProvider from "../context/FavoritesContextProvider";

export default function Favorites() {
  return (
    <>
      <div>
        <FavoritesContextProvider>
          <Header />
          <FavoritesPanel />
          <Footer />
        </FavoritesContextProvider>
      </div>
    </>
  );
}
