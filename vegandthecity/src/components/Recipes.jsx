import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SearchFilters from "./Filters";
import Card from "./Card";

export default function Recipes() {
  const { recipes, setRecipes } = useContext(GlobalContext);
  const [searchAPI, setSearchAPI] = useState([]); // download from API memory
  const [isLoading, setIsLoading] = useState(true);

  const [diet, setDiet] = useState(false); // vegan filter on/off
  const [cooktime, setCooktime] = useState(120); // max cooking filter option

  const { query } = useParams();

  // fetch recipes data

  const searchRecipes = async (query) => {
    setIsLoading(true);
    recipes.length = 0;
    try {
      //fetch searched recipes ids

      const responseSearch = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=6&query=${query}&diet=vegetarian`
      );
      const data = responseSearch.data.results;
      const recipesId = data.map((recipe) => recipe.id).toString();

      //fetch full data recipes

      const responseRecipes = await axios.get(
        `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${recipesId}`
      );

      setRecipes(responseRecipes.data);
      setSearchAPI(responseRecipes.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleDiet = (diet) => {
    setDiet(diet);
  };

  const handleTime = (time) => {
    setCooktime(time);
  };

  useEffect(() => {
    searchRecipes(query);
  }, [query]);

  useEffect(() => {
    const newRecipes = searchAPI.filter(
      (data) => data.vegan === diet && data.readyInMinutes <= cooktime
    );
    setRecipes(newRecipes);
  }, [diet, cooktime]);

  return (
    <div className="flex flex-col w-full justify-center shadow-lg">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-900 to-violet-800 w-full p-6 text-center text-stone-50">
        Search Results
      </h1>
      {recipes.length === 0 && isLoading === false && (
        <div className="flex w-full justify-center font-medium h-screen items-center">
          <p>No recipes founded.</p>
        </div>
      )}
      {recipes.length === 0 && isLoading === true && (
        <div className="flex w-full justify-center font-medium h-screen">
          <p>Loading...</p>
        </div>
      )}
      {recipes.length > 0 && (
        <>
          <SearchFilters handleTime={handleTime} handleDiet={handleDiet} />
          <div className="justify-evenly flex flex-row flex-wrap p-8">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                servings={recipe.servings}
                hscore={recipe.healthScore}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
