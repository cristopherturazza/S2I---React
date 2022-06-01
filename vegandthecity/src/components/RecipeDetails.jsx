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
    console.log(recipe);
  });

  return (
    <div className="Recipe">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
    </div>
  );
}
