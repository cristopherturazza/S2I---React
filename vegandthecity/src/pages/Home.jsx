import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";

import PopularRecipes from "../components/PopularRecipes/PopularRecipes";

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
