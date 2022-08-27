import React from "react";
import Home from "./pages/Home";
import ShowRecipe from "./pages/ShowRecipe";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowSearched from "./pages/ShowSearched";
import FavoritesContextProvider from "./context/FavoritesContextProvider";

function App() {
  return (
    <div className="antialiased bg-slate-50 text-stone-900">
      <Router>
        <FavoritesContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search/:query" element={<ShowSearched />} />
            <Route path="/search/recipe/:id" element={<ShowRecipe />} />
            <Route path="/favorites/" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavoritesContextProvider>
      </Router>
    </div>
  );
}

export default App;

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
