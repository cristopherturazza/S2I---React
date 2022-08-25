import React from "react";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Header from "../components/Header/Header";
import NavFootButtons from "../components/NavFootButtons/NavFootButtons";
import Footer from "../components/Footer/Footer";
import FavoritesContextProvider from "../context/FavoritesContextProvider";

export default function ShowRecipe() {
  return (
    <div>
      <FavoritesContextProvider>
        <Header />
        <RecipeDetails />
        <NavFootButtons />
        <Footer />
      </FavoritesContextProvider>
    </div>
  );
}
