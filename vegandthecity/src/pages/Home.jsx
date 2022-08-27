import React, { useRef } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import PopularRecipes from "../components/PopularRecipes/PopularRecipes";

export default function Home() {
  // scrollTo to SearchBar CTA
  const buttonRef = useRef();

  const scrollTo = () => {
    buttonRef.current.focus();
    buttonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col pb-36">
        <Header />
        <Hero scrollTo={scrollTo} />
        <PopularRecipes />
        <SearchBar ref={buttonRef} title={"Search Your Recipe"} />
      </div>
      <Footer />
    </div>
  );
}
