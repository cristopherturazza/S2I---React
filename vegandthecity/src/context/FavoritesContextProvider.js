import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [favRecipes, setFavRecipes] = useState([]);

  const addFavRecipe = (id, title, image) => {
    setFavRecipes([...favRecipes, { id, title, image }]);
  };
  const removeFavRecipe = (id) => {
    setFavRecipes(favRecipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favRecipes, addFavRecipe, removeFavRecipe }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
