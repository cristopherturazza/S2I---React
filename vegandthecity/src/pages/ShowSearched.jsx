import React, { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import Recipes from "../components/Recipes";
import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalContext";

export default function ShowSearched() {
  const { recipes, setRecipes } = useContext(GlobalContext);

  return (
    <div className="flex flex-col">
      <GlobalContext.Provider value={{ recipes, setRecipes }}>
        <Header />
        <SearchBar />
        <Recipes />
      </GlobalContext.Provider>
    </div>
  );
}
