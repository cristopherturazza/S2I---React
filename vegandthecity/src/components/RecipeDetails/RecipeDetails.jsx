import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Ingredient from "../Ingredient/Ingredient";
import { GlobalContext } from "../../context/GlobalContext";
import { BiRestaurant, BiHeart, BiTimer, BiFoodMenu } from "react-icons/bi";
import { GiMilkCarton } from "react-icons/gi";
import { BsXDiamondFill } from "react-icons/bs";
import Instruction from "../Instruction/Instruction";

export default function RecipeDetails() {
  const { recipes } = useContext(GlobalContext);
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  // fetch recipe if is not in the global stare

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

  // pick recipe from the global state

  const pickRecipe = (id) => {
    const data = recipes.find((recipe) => recipe.id == id);
    setRecipe(data);
  };

  useEffect(() => {
    if (recipes.length > 0) {
      pickRecipe(id);
    } else {
      fetchRecipe(id);
    }
  }, []);

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <div className="recipe-top-section">
        <img className="recipe-photo" src={recipe.image} alt={recipe.title} />
        <div className="recipe-info">
          <span className="recipe-info-lines">
            {" "}
            <BiTimer className="recipe-info-icons" />{" "}
            <strong>Cooking Time:&nbsp; </strong>
            {recipe.readyInMinutes} minutes{" "}
          </span>
          <span className="recipe-info-lines">
            {" "}
            <BiRestaurant className="recipe-info-icons" />
            <strong> Servings:&nbsp; </strong> {recipe.servings} diners{" "}
          </span>
          <span className="recipe-info-lines">
            {" "}
            <BiFoodMenu className="recipe-info-icons" />{" "}
            <strong>Diet:&nbsp;</strong> {recipe.vegan ? "Vegan" : "Vegetarian"}{" "}
          </span>
          <span className="recipe-info-lines">
            {" "}
            <BsXDiamondFill className="recipe-info-icons" />{" "}
            <strong>Gluten Free:&nbsp;</strong>{" "}
            {recipe.glutenFree ? "Yes" : "No"}{" "}
          </span>
          <span className="recipe-info-lines">
            {" "}
            <GiMilkCarton className="recipe-info-icons" />{" "}
            <strong>Dairy Free:&nbsp;</strong> {recipe.dairyFree ? "Yes" : "No"}{" "}
          </span>
          <span className="recipe-info-lines">
            {" "}
            <BiHeart className="recipe-info-icons" />{" "}
            <strong>Health Score:&nbsp;</strong> {recipe.healthScore}{" "}
          </span>
        </div>
        <div className="ribbon-container">
          <div className="recipe-side-ribbon"></div>
        </div>
      </div>
      <div className="ingredients-container">
        <h1 className="recipe-subtitle mb-8">Ingredients</h1>
        <div className="ingredients-list">
          {recipe?.extendedIngredients?.map((ingredient, index) => (
            <Ingredient
              key={index}
              id={ingredient.id}
              image={ingredient.image}
              original={ingredient.original}
              name={ingredient.name}
            />
          ))}
        </div>
      </div>
      <div className="recipe-instructions-container">
        <h2 className="recipe-subtitle"> Instructions </h2>
      </div>
      <div className="instructions-list">
        {recipe?.analyzedInstructions?.[0].steps?.map((instr, index) => {
          return (
            <Instruction key={index} number={instr.number} text={instr.step} />
          );
        })}
      </div>
    </div>
  );
}
