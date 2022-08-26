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

  useEffect(() => {
    const localData = localStorage.getItem("Favorite Recipes");
    if (localData) {
      setFavRecipes(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Favorite Recipes", JSON.stringify(favRecipes));
  }, [favRecipes]);

  return (
    <FavoritesContext.Provider
      value={{ favRecipes, addFavRecipe, removeFavRecipe }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
