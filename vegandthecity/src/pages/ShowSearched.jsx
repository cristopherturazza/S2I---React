import React, { useContext } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Recipes from "../components/Recipes/Recipes";
import Header from "../components/Header/Header";
import NavFootButtons from "../components/NavFootButtons/NavFootButtons";
import Footer from "../components/Footer/Footer";

export default function ShowSearched() {
  return (
    <>
      <div>
        <Header />
        <Recipes />
        <SearchBar title={"Search Another Recipe"} />
        <NavFootButtons />
        <Footer />
      </div>
    </>
  );
}
