import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchFilters from "../Filters/Filters";
import Card from "../Card/Card";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchAPI, setSearchAPI] = useState([]); // download API memory
  const [isLoading, setIsLoading] = useState(true); // loader

  const [diet, setDiet] = useState(false); // vegan filter on/off
  const [cooktime, setCooktime] = useState(60); // max cooking time filter option
  const [dairy, setDairy] = useState(false); // dairy free filter option
  const [gluten, setGluten] = useState(false); // gluten free filter option

  const { query } = useParams();

  //link filter state data

  const handleDiet = (diet) => {
    setDiet(diet);
  };

  const handleTime = (time) => {
    setCooktime(time);
  };

  const handleDairy = (dairy) => {
    setDairy(dairy);
  };

  const handleGluten = (gluten) => {
    setGluten(gluten);
  };

  // fetch recipes data

  useEffect(() => {
    window.scrollTo(0, 0);

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
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    searchRecipes(query);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  // Filters application

  useEffect(() => {
    const applyFilters = () => {
      let newRecipes = searchAPI;

      if (diet) {
        newRecipes = newRecipes.filter((recipe) => recipe.vegan === true);
      }
      if (cooktime <= 120) {
        newRecipes = newRecipes.filter(
          (recipe) => recipe.readyInMinutes <= cooktime
        );
      }
      if (dairy) {
        newRecipes = newRecipes.filter((recipe) => recipe.dairyFree === true);
      }
      if (gluten) {
        newRecipes = newRecipes.filter((recipe) => recipe.glutenFree === true);
      }

      setRecipes(newRecipes);
    };

    applyFilters();
  }, [diet, cooktime, dairy, gluten]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="recipes-container">
      <h1 className="recipes-searched-title">Search Results for "{query}"</h1>
      <SearchFilters
        handleTime={handleTime}
        handleDiet={handleDiet}
        handleDairy={handleDairy}
        handleGluten={handleGluten}
      />
      {recipes.length === 0 && isLoading === false && (
        <div className="search-loader">
          <p>No recipes founded.</p>
        </div>
      )}
      {recipes.length === 0 && isLoading === true && (
        <div className="search-loader">
          <LoadingSpinner />
        </div>
      )}
      {recipes.length > 0 && (
        <>
          <div className="recipes-searched">
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
