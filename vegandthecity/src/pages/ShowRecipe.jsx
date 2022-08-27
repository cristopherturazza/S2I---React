import React from "react";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Header from "../components/Header/Header";
import NavFootButtons from "../components/NavFootButtons/NavFootButtons";
import Footer from "../components/Footer/Footer";

export default function ShowRecipe() {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col pb-36">
        <Header />
        <RecipeDetails />
        <NavFootButtons />
      </div>
      <Footer />
    </div>
  );
}
