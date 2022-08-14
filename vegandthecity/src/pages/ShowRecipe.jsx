import React, { Suspense, useContext } from "react";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Header from "../components/Header/Header";
import { GlobalContext } from "../context/GlobalContext";

export default function ShowRecipe() {
  const { recipes, setRecipes } = useContext(GlobalContext);

  return (
    <div>
      <GlobalContext.Provider value={{ recipes, setRecipes }}>
        <Header />
        <RecipeDetails />
      </GlobalContext.Provider>
    </div>
  );
}
