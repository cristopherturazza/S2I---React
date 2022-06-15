import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Recipes from "../components/Recipes";
import Header from "../components/Header";

import PopularRecipes from "../components/PopularRecipes";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <SearchBar />
      <PopularRecipes />
    </div>
  );
}

export default Home;
