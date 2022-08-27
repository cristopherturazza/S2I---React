import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Ingredient from "../Ingredient/Ingredient";
import { BiRestaurant, BiHeart, BiTimer, BiFoodMenu } from "react-icons/bi";
import { GiMilkCarton } from "react-icons/gi";
import { BsXDiamondFill, BsHeart, BsHeartFill } from "react-icons/bs";
import Instruction from "../Instruction/Instruction";
import MiniCard from "../MiniCard/MiniCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FavoritesContext } from "../../context/FavoritesContextProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [similarRecipes, setSimilarRecipes] = useState({});
  const { favRecipes, addFavRecipe, removeFavRecipe } =
    useContext(FavoritesContext);
  const { id } = useParams();
  const location = useLocation();

  const fetchRecipe = async (id) => {
    setIsLoading(true);
    try {
      // fetch recipe main data

      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
      );
      setRecipe(response.data);

      // fetch similar recipes by id

      const similar = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=4`
      );
      setSimilarRecipes(similar.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleFavorite = () => {
    favorite
      ? removeFavRecipe(recipe.id)
      : addFavRecipe(recipe.id, recipe.title, recipe.image);
    setFavorite(!favorite);
  };

  // fetch recipes on loading
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRecipe(id);
    favRecipes.find((fav) => fav.id === id)
      ? setFavorite(true)
      : setFavorite(false);
  }, [location]);

  return (
    <div className="recipe-container">
      {isLoading === true && (
        <div className="search-loader">
          <LoadingSpinner />
        </div>
      )}
      {isLoading === false && recipe && Object.keys(recipe).length === 0 && (
        <div className="search-loader">
          <p>No data founded. Try to reload the page.</p>
        </div>
      )}
      {isLoading === false && recipe && Object.keys(recipe).length > 0 && (
        <>
          <h1 className="recipe-title">{recipe.title}</h1>
          <div className="recipe-top-section">
            <img
              className="recipe-photo"
              src={recipe.image}
              alt={recipe.title}
            />
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
                <strong>Diet:&nbsp;</strong>{" "}
                {recipe.vegan ? "Vegan" : "Vegetarian"}{" "}
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
                <strong>Dairy Free:&nbsp;</strong>{" "}
                {recipe.dairyFree ? "Yes" : "No"}{" "}
              </span>
              <span className="recipe-info-lines">
                {" "}
                <BiHeart className="recipe-info-icons" />{" "}
                <strong>Health Score:&nbsp;</strong> {recipe.healthScore}{" "}
              </span>
            </div>

            <div className="ribbon-container">
              <div className="recipe-side-ribbon">
                <div className="recipe-add-favorite-container">
                  {favorite ? (
                    <>
                      <div className="text-favorite-button">
                        Remove from favorites
                      </div>
                      <BsHeartFill
                        className="heart-favorite-button"
                        onClick={handleFavorite}
                      />
                    </>
                  ) : (
                    <>
                      <div className="text-favorite-button">
                        Add to favorites
                      </div>
                      <BsHeart
                        className="heart-favorite-button"
                        onClick={handleFavorite}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="ingredients-container">
            <h1 className="recipe-subtitle mb-8">Ingredients</h1>
            <div className="ingredients-list">
              <Swiper
                breakpoints={{
                  // when window width is >= 18px
                  180: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  // when window width is >= 830px
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  // when window width is >= 1120px
                  950: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1600: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                }}
                slidesOffsetBefore={45}
                simulateTouch={true}
                scrollbar={{ draggable: true }}
                modules={[Scrollbar]}
              >
                {recipe?.extendedIngredients?.map((ingredient, index) => (
                  <SwiperSlide key={"S" + index}>
                    <Ingredient
                      key={index}
                      id={ingredient.id}
                      image={ingredient.image}
                      original={ingredient.original}
                      name={ingredient.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="recipe-instructions-container">
            <h2 className="recipe-subtitle"> Instructions </h2>
          </div>
          <div className="instructions-list">
            {recipe.analyzedInstructions &&
              recipe.analyzedInstructions.length &&
              recipe.analyzedInstructions[0].steps.map((instr, index) => {
                return (
                  <>
                    <Instruction
                      key={index}
                      number={instr.number}
                      text={instr.step}
                    />
                  </>
                );
              })}
            ;
          </div>
          <div className="similar-recipes-container">
            <h2 className="recipe-subtitle"> Similar Recipes</h2>
            <div className="similar-recipes-list">
              {similarRecipes &&
                similarRecipes.length &&
                similarRecipes.map((recipe) => (
                  <>
                    <MiniCard
                      key={recipe.id}
                      id={recipe.id}
                      image={
                        "https://spoonacular.com/recipeImages/" +
                        recipe.id +
                        "-556x370." +
                        recipe.imageType
                      }
                      title={recipe.title}
                      servings={recipe.servings}
                      hscore={recipe.healthScore}
                    />
                  </>
                ))}
            </div>
          </div>
        </>
      )}
      ;
    </div>
  );
}
