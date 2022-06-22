import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  // fetch recipe

  const fetchRecipe = async (id) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
      );
      const data = response.data;
      setRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <img
        className="w-5/12 ml-20 rounded-xl shadow-md"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="p-8 pb-4 ml-12 w-10/12">
        <h2 className="recipe-subtitle"> Summary </h2>
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      </div>
      <div className="p-8 pt-0 ml-12 w-10/12">
        <h2 className="recipe-subtitle"> Instructions </h2>
        <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
      </div>
    </div>
  );
}
