import React, { useState } from "react";
import Home from "./pages/Home";
import ShowRecipe from "./pages/ShowRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowSearched from "./pages/ShowSearched";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const [recipes, setRecipes] = useState([]); // showed recipes

  return (
    <div className="flex flex-col antialiased text-stone-900 h-screen">
      <GlobalContext.Provider value={{ recipes, setRecipes }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search/:query" element={<ShowSearched />} />
            <Route path="/search/recipe/:id" element={<ShowRecipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
