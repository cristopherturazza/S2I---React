import React, { useContext } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Recipes from "../components/Recipes/Recipes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { GlobalContext } from "../context/GlobalContext";

export default function ShowSearched() {
  const { recipes, setRecipes } = useContext(GlobalContext);

  return (
    <div className="flex flex-col">
      <GlobalContext.Provider value={{ recipes, setRecipes }}>
        <Header />
        <SearchBar />
        <Recipes />
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}
